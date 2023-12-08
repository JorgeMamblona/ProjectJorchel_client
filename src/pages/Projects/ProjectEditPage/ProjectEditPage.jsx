import EditProjectForm from "../../../components/ProjectComponents/EditProjectForm/EditProjectForm"

import { Container, Row, Col } from "react-bootstrap"

import './ProjectEditPage.css'
import Background from "../../../components/Background/back-ground"

const ProjectEditPage = () => {
    return (
        <div className="ProjectEditPage">
            <Container>
                <h1>Edit project</h1>
                <EditProjectForm />

            </Container>
            <Background />
        </div>
    )
}
export default ProjectEditPage