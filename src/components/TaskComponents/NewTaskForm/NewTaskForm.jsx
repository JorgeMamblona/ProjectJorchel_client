
import { formatDate } from "../../../utils/formatDate"

import UsersListForm from '../../UsersListForm/UsersListForm'

import taskService from '../../../services/tasks.services'

import { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Col, Form, Row, Button } from "react-bootstrap"
import './NewTaskForm.css'

const NewTaskForm = () => {

    const { project_id } = useParams()
    const navigate = useNavigate()

    const [newTaskData, setNewTaskData] = useState({
        title: '',
        description: '',
        state: 'TODO',
        startDate: formatDate(new Date),
        endDate: '',
        participants: [],
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

    const setUsers = participants => {

        setNewTaskData({ ...newTaskData, participants })
    }

    return (
        <div className="new-task-form">
            <Form onSubmit={handleFormSubmit}>
                <div className="row">
                    <div className="col-6 title-form">
                        <Form.Group className="mb-3">
                            <Form.Label>Title *</Form.Label>
                            <Form.Control type="text" value={newTaskData.title} name='title' placeholder="Enter Project Title" onChange={handleInputChange}></Form.Control>
                        </Form.Group>
                    </div>
                    <div className="col-3">
                        <Form.Group className="mb-3">
                            <Form.Label>State </Form.Label>
                            <Form.Select type="text" value={newTaskData.state} name='state' onChange={handleInputChange}>
                                <option value='TODO'>To Do</option>
                                <option value="ONGOING">On Going</option>
                                <option value="REVIEW">Review</option>
                                <option value="DONE">Done</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Form.Group className="mb-3">
                            <Form.Label>Description *</Form.Label>
                            <Form.Control type="text" value={newTaskData.description} name='description' placeholder="Enter description" onChange={handleInputChange}></Form.Control>
                        </Form.Group>
                    </div>
                </div>

                <div className="row">
                    <div className="col-3">
                        <Form.Group className="mb-3 date-form">
                            <Form.Label>Starting date:</Form.Label>
                            <Form.Control type="date" value={newTaskData.startDate} name='startDate' onChange={handleInputChange}></Form.Control>
                        </Form.Group>
                    </div>
                    <div className="col-3">
                        <Col md={{ span: 6 }}>
                            <Form.Group className="mb-3">
                                <Form.Label>End date</Form.Label>
                                <Form.Control type="date" value={newTaskData.endDate} name='endDate' onChange={handleInputChange}></Form.Control>
                            </Form.Group>
                        </Col>

                    </div>
                </div>


                <div className="row user-select">
                    <div className="col-5">
                        <Form.Label>Participants:</Form.Label>
                        <UsersListForm data={newTaskData} handleInputChange={handleInputChange} setUsers={setUsers} />
                    </div>
                    <div className="selectioned-user col-5">
                        <Form.Label>Participants selected:</Form.Label>
                        {
                            newTaskData.participants.map(elm =>
                                <div key={elm._id} className='my-user-select'>
                                    <p >{elm.username}</p>
                                </div>)
                        }
                    </div>
                </div>
                <Button className="myButton2 submit-form" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default NewTaskForm