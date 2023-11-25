import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import authService from "../../services/auth.services"

const SignupForm = () => {

    const [signupData, setSignupData] = useState({
        email: '',
        password: '',
        username: '',
        // image: ''


    })


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
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={signupData.password} onChange={handleInputChange} name='password' placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Username</Form.Label>
                <Form.Control type="password" value={signupData.username} onChange={handleInputChange} name='username' placeholder="Username" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default SignupForm