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
import { PROJECT_TYPES } from "../../../consts/project-consts"


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
                        <div className="col-6 title-form">
                            <Form.Label>Title *</Form.Label>
                            <Form.Control type="text" value={editFormData.title} name='title' placeholder={project.title} onChange={handleInputChange}></Form.Control>
                        </div>
                        <div className="col-3">
                            <Form.Group className="mb-3">
                                <Form.Label>State </Form.Label>
                                <Form.Select type="text" value={editFormData.state} name='state' onChange={handleInputChange} >
                                    {
                                        // TODO: OBTENER SIEMPRE LAS OPCIONES DE PROYECTOS DESDE CONSTANTES
                                        PROJECT_TYPES.map(elm => <option value={elm.value} key={elm.value}>{elm.text}</option>)
                                    }
                                </Form.Select>
                            </Form.Group>
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

                        <div className="col-6">

                            <Form.Group className="mb-3">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="file" onChange={handleFileUpload}></Form.Control>
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 item-list">

                            <Col >
                                <Form.Group className="mb-3 ">
                                    <Form.Label>Current start date: {prettyDate(formatDate(editFormData.startDate))}</Form.Label>
                                    <Form.Control type="date" value={formatDate(editFormData.startDate)} name='startDate' onChange={handleInputChange}></Form.Control>
                                </Form.Group>
                            </Col>
                        </div>
                        <div className="col-3">


                            <Form.Group className="mb-3 edit-date-form ">
                                <Form.Label>End date</Form.Label>
                                <Form.Control type="date" value={formatDate(editFormData.endDate)} name='endDate' onChange={handleInputChange}></Form.Control>
                            </Form.Group>
                        </div>

                    </div>
                    <div className="row user-select">
                        <div className="col-6">
                            <Form.Label>Participants:</Form.Label>
                            <UsersListForm setUsers={setUsers} />
                        </div>
                        <div className="col-5 selectioned-user ">
                            <Form.Label>Participants selected:</Form.Label>
                            {
                                editFormData.colaborators
                                    ?
                                    editFormData.colaborators.map(elm => <div className='my-user-select' key={elm._id}>

                                        <p>{elm.username}</p>
                                        {/* <img className='avatar-image' src={elm.avatar} alt="" /> */}

                                    </div>)
                                    :
                                    <></>
                            }
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