import { Container, Row, Col } from "react-bootstrap"
import NewProjectForm from "../../components/ProjectComponents/NewProjectForm/NewProjectForm"
import { useLocation } from "react-router-dom"


const NewProjectPage = () => {

    return (

        <Container>
            <Row>
                <Col md={{ offset: 3, span: 6 }}>
                    <h1>New Project</h1>
                    <NewProjectForm />
                </Col>
            </Row>
        </Container>
    )
}

export default NewProjectPage