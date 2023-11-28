import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Col, Form, Row, Button } from "react-bootstrap"
import projectService from "../../../services/projects.services"
import { formatDate } from "../../../utils/formatDate"
import UsersListForm from "../../UsersListForm/UsersListForm"
import uploadServices from "../../../services/upload.services"

const NewProjectForm = () => {

    const navigate = useNavigate()

    const [newFormData, setNewFormData] = useState({
        title: '',
        description: '',
        image: '',
        state: 'TODO',
        startDate: formatDate(new Date),
        endDate: '',
        colaborators: []
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setNewFormData({ ...newFormData, [name]: value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        projectService
            .create(newFormData)
            .then(() => navigate("/"))
            .catch(err => console.log(err))
    }

    const setUsers = list => {
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
        <Form onSubmit={handleFormSubmit}>
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
                    <UsersListForm data={newFormData} handleInputChange={handleInputChange} setUsers={setUsers} />
                </Col>
                <Col md={{ span: 6 }}>

                    {
                        newFormData.colaborators.map(elm => {
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

export default NewProjectForm