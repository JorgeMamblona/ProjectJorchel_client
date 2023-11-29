import { AuthContext } from '../../contexts/auth.context'

import { formatDate } from "../../utils/formatDate"

import UsersListForm from '../UsersListForm/UsersListForm'

import taskService from '../../services/tasks.services'

import { useContext, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import { Col, Form, Row, Button } from "react-bootstrap"
import './NewTaskForm.css'

const NewTaskForm = () => {

    const { project_id } = useParams()
    const { loggedUser, logout } = useContext(AuthContext)
    const navigate = useNavigate()

    const [newTaskData, setNewTaskData] = useState({
        title: '',
        description: '',
        state: 'TODO',
        startDate: formatDate(new Date),
        endDate: '',
        participants: [],
        owner: loggedUser._id,
        project: project_id

    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setNewTaskData({ ...newTaskData, [name]: value })

    }

    const handleFormSubmit = e => {
        e.preventDefault()

        taskService
            .create(newTaskData)
            .then(() => navigate(`/project/${project_id}`))
            .catch(err => console.log(err))
    }


    const setUsers = list => {
        setNewTaskData({ ...newTaskData, participants: list })
    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Title *</Form.Label>
                <Form.Control type="text" value={newTaskData.title} name='title' placeholder="Enter Project Title" onChange={handleInputChange}></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Description *</Form.Label>
                <Form.Control type="text" value={newTaskData.description} name='description' placeholder="Enter description" onChange={handleInputChange}></Form.Control>
            </Form.Group>

            <Row>
                <Col md={{ span: 6 }}>
                    <Form.Group className="mb-3">
                        <Form.Label>State </Form.Label>
                        <Form.Select type="text" value={newTaskData.state} name='state' onChange={handleInputChange}>
                            <option value='TODO'>To Do</option>
                            <option value="ONGOING">On Going</option>
                            <option value="REVIEW">Review</option>
                            <option value="DONE">Done</option>
                        </Form.Select>
                    </Form.Group>
                </Col>


                <Col md={{ span: 6 }}>
                    <Form.Group className="mb-3">
                        <Form.Label>Starting date:</Form.Label>
                        <Form.Control type="date" value={newTaskData.startDate} name='startDate' onChange={handleInputChange}></Form.Control>
                    </Form.Group>
                </Col>

                <Col md={{ span: 6 }}>
                    <Form.Group className="mb-3">
                        <Form.Label>End date</Form.Label>
                        <Form.Control type="date" value={newTaskData.endDate} name='endDate' onChange={handleInputChange}></Form.Control>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 6 }}>
                    <UsersListForm data={newTaskData} handleInputChange={handleInputChange} setUsers={setUsers} />
                </Col>
                <Col md={{ span: 6 }}>

                    {
                        newTaskData.participants.map(elm => {
                            return <p key={elm._id}>{elm.username}</p>
                        })
                    }

                </Col>
            </Row >
            <Button className="mt-3" variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
export default NewTaskForm