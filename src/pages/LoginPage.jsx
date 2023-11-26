<<<<<<< Updated upstream
const Login = () => {
    return (
        <h1>Soy el login</h1>
=======
import { Container, Row, Col } from "react-bootstrap"
import LoginForm from "../components/LoginForm/LoginForm"
import './Loginpage.css'

const Login = () => {
    return (

        <Container>
            <Row >
                <Col md={{ offset: 3, span: 6 }} className="login-page">
                    <h1>Log in</h1>
                    <LoginForm />
                </Col>
            </Row>
        </Container>
>>>>>>> Stashed changes
    )
}

export default Login