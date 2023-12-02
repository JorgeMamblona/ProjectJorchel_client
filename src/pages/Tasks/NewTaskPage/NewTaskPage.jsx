import NewTaskForm from "../../../components/TaskComponents/NewTaskForm/NewTaskForm"

import { Container, Row, Col } from "react-bootstrap"

import './NewTaskPage'

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
        </div>
    )
}
export default NewTaskPage