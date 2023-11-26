import { Container, Row, Col } from "react-bootstrap"
import SignupForm from "../components/SignupForm/SignupForm"

import './SignupPage.css'

const Signup = () => {
    return (

        <Container>
            <Row>
<<<<<<< Updated upstream:src/pages/SignuPage.jsx
                <Col md={{ offset: 3, span: 6 }}>
                    <h1>Resgistro</h1>
=======
                <Col className="signup-page" md={{ offset: 3, span: 6 }}>
                    <h1>Registro</h1>
>>>>>>> Stashed changes:src/pages/SignupPage.jsx
                    <SignupForm />
                </Col>
            </Row>
        </Container>
    )
}

export default Signup