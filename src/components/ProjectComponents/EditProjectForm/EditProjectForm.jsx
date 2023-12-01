import { Col, Form, Row, Button } from "react-bootstrap"

import { formatDate } from "../../../utils/formatDate"

import uploadServices from "../../../services/upload.services"

import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import UsersListForm from "../../UsersListForm/UsersListForm"

import projectService from "../../../services/projects.services"


const EditProjectForm = () => {

    const navigate = useNavigate()
    const { project_id } = useParams()
    const [editFormData, seteditFormData] = useState({
        title: '',
        description: '',
        image: '',
        state: 'TODO',
        startDate: formatDate(new Date),
        endDate: '',
        colaborators: [],
        project_id: project_id

    })

    const handleInputChange = e => {
        const { value, name } = e.target
        seteditFormData({ ...editFormData, [name]: value })
    }

    const handleFormSubmit = e => {

        e.preventDefault()

        projectService
            .edit(editFormData)
            .then(() => {
                navigate("/")
            })
            .catch(err => console.log(err))

    }


    const handleFileUpload = e => {

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(({ data }) => {
                seteditFormData({ ...editFormData, image: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const setUsers = list => {
        seteditFormData({ ...editFormData, colaborators: list })
    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Title *</Form.Label>
                <Form.Control type="text" value={editFormData.title} name='title' placeholder="Enter Project Title" onChange={handleInputChange}></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Description *</Form.Label>
                <Form.Control type="text" value={editFormData.description} name='description' placeholder="Enter description" onChange={handleInputChange}></Form.Control>
            </Form.Group>

            <Row>
                <Col md={{ span: 6 }}>
                    <Form.Group className="mb-3">
                        <Form.Label>State </Form.Label>
                        <Form.Select type="text" value={editFormData.state} name='state' onChange={handleInputChange}>
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
                        <Form.Control type="date" value={editFormData.startDate} name='startDate' onChange={handleInputChange}></Form.Control>
                    </Form.Group>
                </Col>

                <Col md={{ span: 6 }}>
                    <Form.Group className="mb-3">
                        <Form.Label>End date</Form.Label>
                        <Form.Control type="date" value={editFormData.endDate} name='endDate' onChange={handleInputChange}></Form.Control>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 6 }}>
                    <UsersListForm setUsers={setUsers} />
                </Col>
                <Col md={{ span: 6 }}>
                    {
                        editFormData.colaborators.map(elm => {
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

export default EditProjectForm