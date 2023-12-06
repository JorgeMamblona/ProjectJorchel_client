import NewTaskForm from "../../../components/TaskComponents/NewTaskForm/NewTaskForm"

import { Container, Row, Col } from "react-bootstrap"

import './NewTaskPage.css'

import Background from "../../../components/Background/background"

const NewTaskPage = () => {
    return (
        <div className="new-task-page">
            <Container>
                <Row>
                    <Col>
                        <h1>New Task</h1>
                        <NewTaskForm />
                    </Col>
                </Row>
            </Container>

            <Background />

        </div>
    )
}
export default NewTaskPage