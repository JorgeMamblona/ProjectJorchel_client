import { useContext, useState } from "react"
import { AuthContext } from '../../../contexts/auth.context'

import { formatDate } from "../../../utils/formatDate"

import UsersListForm from "../../UsersListForm/UsersListForm"

import projectService from "../../../services/projects.services"
import uploadServices from "../../../services/upload.services"

import { useNavigate } from "react-router-dom"

import { Col, Form, Row, Button } from "react-bootstrap"

import './NewProjectForm.css'

const NewProjectForm = () => {

    const navigate = useNavigate()
    const { loggedUser, logout, authenticateUser } = useContext(AuthContext)


    const [newFormData, setNewFormData] = useState({
        title: '',
        description: '',
        image: '',
        state: 'TODO',
        startDate: formatDate(new Date),
        endDate: '',
        colaborators: [],
        owner: loggedUser._id
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setNewFormData({ ...newFormData, [name]: value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        projectService
            .create(newFormData)
            .then(() => {
                authenticateUser()
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    const setUsers = list => {
        if (!list.includes(loggedUser._id)) list.unshift(loggedUser._id)
        setNewFormData({ ...newFormData, colaborators: list })
    }

    const handleFileUpload = e => {

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(({ data }) => {
                setNewFormData({ ...newFormData, image: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    return (
        <Form className="new-project-form" onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Title *</Form.Label>
                <Form.Control type="text" value={newFormData.title} name='title' placeholder="Enter Project Title" onChange={handleInputChange}></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Description *</Form.Label>
                <Form.Control type="text" value={newFormData.description} name='description' placeholder="Enter description" onChange={handleInputChange}></Form.Control>
            </Form.Group>

            <Row>
                <Col md={{ span: 6 }}>
                    <Form.Group className="mb-3">
                        <Form.Label>State </Form.Label>
                        <Form.Select type="text" value={newFormData.state} name='state' onChange={handleInputChange}>
                            <option value='TODO'>To Do</option>
                            <option value="ONGOING">On Going</option>
                            <option value="REVIEW">Review</option>
                            <option value="DONE">Done</option>
                        </Form.Select>
                    </Form.Group>
                </Col>

                <Col md={{ span: 6 }}>
                    <Form.Group className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" onChange={handleFileUpload}></Form.Control>
                    </Form.Group>
                </Col>

                <Col md={{ span: 6 }}>
                    <Form.Group className="mb-3">
                        <Form.Label>Starting date:</Form.Label>
                        <Form.Control type="date" value={newFormData.startDate} name='startDate' onChange={handleInputChange}></Form.Control>
                    </Form.Group>
                </Col>

                <Col md={{ span: 6 }}>
                    <Form.Group className="mb-3">
                        <Form.Label>End date</Form.Label>
                        <Form.Control type="date" value={newFormData.endDate} name='endDate' onChange={handleInputChange}></Form.Control>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 6 }}>
                    <UsersListForm setUsers={setUsers} />
                </Col>
                <Col md={{ span: 6 }}>
                    {
                        newFormData.colaborators.map(elm => {
                            return <div key={elm._id}><p>{elm.username}</p>

                            </div>
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

export default NewProjectForm