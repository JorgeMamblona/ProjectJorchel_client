import { Container, Row, Col } from "react-bootstrap"
import SignupForm from "../../components/SignupForm/SignupForm"

import './SignupPage.css'

const SignupPage = () => {
    return (

        <Container>
            <Row>
                <Col md={{ offset: 3, span: 6 }}>
                    <h1>Resgistro</h1>
                    <SignupForm />
                </Col>
            </Row>
        </Container>
    )
}

export default SignupPage