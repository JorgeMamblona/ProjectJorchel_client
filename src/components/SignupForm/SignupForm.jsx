import authService from "../../services/auth.services"
import uploadServices from "../../services/upload.services"

import avatar from './../../assets/holaaa.jpeg'

import { useNavigate } from "react-router-dom"
import { useState } from "react"

import Background from "../Background/background"
import { Form, Button } from "react-bootstrap"
import './SignupForm.css'

const SignupForm = () => {

    const navigate = useNavigate()

    const [formData, setformData] = useState({

        email: '',
        password: '',
        username: '',
        avatar: avatar
    })

    //const [isLoading]

    const handleInputChange = e => {

        const { value, name } = e.target

        setformData({ ...formData, [name]: value })
    }

    const handleFormSubmit = e => {

        e.preventDefault()

        authService
            .signup(formData)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }

    const handleFileUpload = e => {

        const fileFormData = new FormData()
        fileFormData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(fileFormData)
            .then(({ data }) => {
                setformData({ ...formData, avatar: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={formData.email} onChange={handleInputChange} name='email' placeholder="Enter email" />

            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" value={formData.username} onChange={handleInputChange} name='username' placeholder="Username" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={formData.password} onChange={handleInputChange} name='password' placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Avatar</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload}></Form.Control>
            </Form.Group>

            <Button className="myButton2" type="submit">
                Submit
            </Button>
            <Background />

        </Form >
    )
}

export default SignupForm