import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import authService from "../../services/auth.services"
import './SignupForm.css'

const SignupForm = () => {

    const [signupData, setSignupData] = useState({
        email: '',
        password: '',
        username: '',
        // image: ''


    })

    // const customButtonStyle = {
    //     border: '3px solid #F72485',
    //     backgroundColor: 'transparent',
    //     color: '#F72485',
    //     transition: 'all 0.3s ease',
    // };


    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }
    const handleFormSubmit = e => {
        e.preventDefault()

        authService
            .signup(signupData)
            .then(createdUser => console.log(createdUser))
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={signupData.email} onChange={handleInputChange} name='email' placeholder="Enter email" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={signupData.password} onChange={handleInputChange} name='password' placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Username</Form.Label>
                <Form.Control type="password" value={signupData.username} onChange={handleInputChange} name='username' placeholder="Username" />
            </Form.Group>

            <Button className="myButton2" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default SignupForm