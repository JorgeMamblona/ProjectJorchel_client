import EditProjectForm from "../../../components/ProjectComponents/EditProjectForm/EditProjectForm"

import { Container, Row, Col } from "react-bootstrap"

const ProjectEditPage = () => {
    return (
        <Container>
            <Row>
                <Col md={{ offset: 3, span: 6 }}>
                    <h1>Edit project</h1>
                    <EditProjectForm />
                </Col>
            </Row>
        </Container>
    )
}
export default ProjectEditPage