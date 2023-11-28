import { Container, Row, Col } from "react-bootstrap"
import LoginForm from "../../components/LoginForm/LoginForm"
import './Loginpage.css'

const LoginPage = () => {
    return (

        <Container className="login-page">
            <Row>
                <Col md={{ offset: 3, span: 6 }}>
                    <h1>Log in</h1>
                    <LoginForm />
                </Col >
            </Row >
        </Container >
    )
}

export default LoginPage
