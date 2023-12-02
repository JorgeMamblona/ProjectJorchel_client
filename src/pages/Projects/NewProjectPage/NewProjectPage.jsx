import NewProjectForm from "../../../components/ProjectComponents/NewProjectForm/NewProjectForm"

import { Container, Row, Col } from "react-bootstrap"
import './NewProjectPage.css'

const NewProjectPage = () => {

    return (

        <div className="new-project-page">
            <Container>
                <Row>
                    <Col >
                        <h1>New Project</h1>
                        <NewProjectForm />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NewProjectPage