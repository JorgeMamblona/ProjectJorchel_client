import { ProjectsContext } from "../../../contexts/projects.context"

import uploadServices from "../../../services/upload.services"

import { formatDate } from "../../../utils/formatDate"

import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useContext } from "react"

import UsersListForm from "../../UsersListForm/UsersListForm"
import { Col, Form, Row, Button } from "react-bootstrap"
import { prettyDate } from "../../../utils/prettyDate"
import projectService from "../../../services/projects.services"

import './EditProjectForm.css'


const EditProjectForm = () => {

    const { loadProjects } = useContext(ProjectsContext)
    const navigate = useNavigate()

    const { project_id } = useParams()
    const [project, setProject] = useState({})
    const [projectDetails, setProjectDetails] = useState({})


    const [editFormData, seteditFormData] = useState({
        title: '',
        description: '',
        image: '',
        state: '',
        startDate: '',
        endDate: '',
        colaborators: '',

    })

    useEffect(() => {
        handleDetails()
        loadProjects()

    }, [])


    const handleDetails = () => {

        projectService
            .getDetails(project_id)
            .then(({ data }) => {
                seteditFormData(data)
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.target
        seteditFormData({ ...editFormData, [name]: value })
    }

    const handleFormSubmit = e => {

        e.preventDefault()

        projectService
            .edit(editFormData)
            .then(() => {
                loadProjects()
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
        !projectDetails
            ?
            <></>
            :
            <div className="edit-project-form">
                <Form onSubmit={handleFormSubmit}>
                    <div className="row">
                        <div className="col-6 item-list">
                            <Form.Label>Title *</Form.Label>
                            <Form.Control type="text" value={editFormData.title} name='title' placeholder={project.title} onChange={handleInputChange}></Form.Control>
                        </div>
                        <div className="col-5 ">
                            <Row>
                                <Form.Label>Participants:</Form.Label>
                                <Col md={{ span: 6 }}>
                                    <UsersListForm setUsers={setUsers} />
                                </Col>
                                <Col md={{ span: 6 }}>
                                    {
                                        editFormData.colaborators
                                            ?
                                            editFormData.colaborators.map(elm => {
                                                return <p key={elm._id}>{elm.username}</p>
                                            })
                                            :
                                            <></>
                                    }
                                </Col>
                            </Row >
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">

                            <Form.Group className="mb-3">
                                <Form.Label>Description *</Form.Label>
                                <Form.Control type="text" value={editFormData.description} name='description' placeholder={project.description} onChange={handleInputChange}></Form.Control>
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 item-list">
                            <Form.Group className="mb-3">
                                <Form.Label>State </Form.Label>
                                <Form.Select type="text" value={editFormData.state} name='state' onChange={handleInputChange} >
                                    <option value='TODO'>To Do</option>
                                    <option value="ONGOING">On Going</option>
                                    <option value="REVIEW">Review</option>
                                    <option value="DONE">Done</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className="col-4">

                            <Form.Group className="mb-3">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="file" onChange={handleFileUpload}></Form.Control>
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 item-list">

                            <Col >
                                <Form.Group className="mb-3">
                                    <Form.Label>Current start date: {prettyDate(project.startDate)}</Form.Label>
                                    <Form.Control type="date" value={editFormData.startDate} name='startDate' onChange={handleInputChange}></Form.Control>
                                </Form.Group>
                            </Col>
                        </div>
                        <div className="col-3">


                            <Form.Group className="mb-3">
                                <Form.Label>End date</Form.Label>
                                <Form.Control type="date" value={editFormData.endDate} name='endDate' onChange={handleInputChange}></Form.Control>
                            </Form.Group>
                        </div>

                    </div>


                    <Button className="mt-3 myButton2" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
    )
}

export default EditProjectForm