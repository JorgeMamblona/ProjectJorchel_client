import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import authService from "../../services/auth.services"
import { AuthContext } from "../../contexts/auth.context"
import Background from "../Background/back-ground"
import FormError from "../FormError/FormError"

const SignupForm = () => {

    const [formData, setFormData] = useState({

        email: '',
        password: '',
    })

    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    const { authenticateUser } = useContext(AuthContext)

    const handleInputChange = e => {

        const { value, name } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleFormSubmit = e => {

        e.preventDefault()

        authService
            .login(formData)
            .then(({ data }) => {
                localStorage.setItem('authToken', data.authToken)
                authenticateUser()
                navigate('/')
            })
            .catch(err => setErrors(err.response.data.errorMessages))
    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={formData.email} onChange={handleInputChange} name='email' placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={formData.password} onChange={handleInputChange} name='password' placeholder="Password" />
            </Form.Group>

            <Button className="myButton2" type="submit">
                Submit
            </Button>

            {errors.length > 0 && <FormError>{errors.map(elm => <p>{elm}</p>)}</FormError>}

            <Background />
        </Form>

    )
}

export default SignupForm