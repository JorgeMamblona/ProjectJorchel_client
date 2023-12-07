import { useContext, useState } from "react"
import { AuthContext } from '../../../contexts/auth.context'

import { formatDate } from "../../../utils/formatDate"

import UsersListForm from "../../UsersListForm/UsersListForm"

import projectService from "../../../services/projects.services"
import uploadServices from "../../../services/upload.services"

import { useNavigate } from "react-router-dom"

import { Col, Form, Row, Button } from "react-bootstrap"

import './NewProjectForm.css'
import FormError from "../../FormError/FormError"

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

    const [errors, setErrors] = useState([])

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
            .catch(err => setErrors(err.response.data.errorMessages))
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
            <div className="row ">
                <div className="col-6 title-form">
                    <Form.Group className="mb-3">
                        <Form.Label>Title *</Form.Label>
                        <Form.Control type="text" value={newFormData.title} name='title' placeholder="Enter Project Title" onChange={handleInputChange}></Form.Control>
                    </Form.Group>
                </div>
                <div className='col-3' >
                    <Form.Group className="mb-3">
                        <Form.Label>State </Form.Label>
                        <Form.Select type="text" value={newFormData.state} name='state' onChange={handleInputChange}>
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
                        <Form.Control type="text" value={newFormData.description} name='description' placeholder="Enter description" onChange={handleInputChange}></Form.Control>
                    </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className='col-6' >
                    <Form.Group className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" onChange={handleFileUpload}></Form.Control>
                    </Form.Group>
                </div>
            </div>



            <div className="row">
                <div className='col-3' >
                    <Form.Group className="mb-3 date-form">
                        <Form.Label>Starting date:</Form.Label>
                        <Form.Control type="date" value={newFormData.startDate} name='startDate' onChange={handleInputChange}></Form.Control>
                    </Form.Group>
                </div>

                <div className='col-3' >
                    <Form.Group className="mb-3">
                        <Form.Label>End date</Form.Label>
                        <Form.Control type="date" value={newFormData.endDate} name='endDate' onChange={handleInputChange}></Form.Control>
                    </Form.Group>
                </div>
            </div>

            <div className="row user-select">
                <div className="col-6">
                    <Form.Label>Participants:</Form.Label>
                    <UsersListForm setUsers={setUsers} />
                </div>
                <div className="selectioned-user col-5">
                    <Form.Label>Participants selected:</Form.Label>
                    {
                        newFormData.colaborators.map(elm => {
                            return <div className='my-user-select' key={elm._id}>

                                <p>{elm.username}</p>
                                {/* <img className='avatar-image' src={elm.avatar} alt="" /> */}

                            </div>
                        })
                    }
                </div>
            </div>


            <Button className="mt-3  myButton2" type="submit">
                Submit
            </Button>

            {errors.length > 0 && <FormError>{errors.map(elm => <p>{elm}</p>)}</FormError>}


        </Form>
    )
}

export default NewProjectForm