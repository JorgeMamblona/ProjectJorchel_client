import { Container, Row, Col } from "react-bootstrap"
import SignupForm from "../../components/SignupForm/SignupForm"

import './SignupPage.css'

const SignupPage = () => {
    return (
        <div className="signup-page">
            <Container className='signup-page'>
                <Row >
                    <Col md={{ offset: 3, span: 6 }}>
                        <h1>Sign Up</h1>
                        <SignupForm />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SignupPage