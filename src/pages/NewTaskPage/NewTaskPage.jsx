import NewTaskForm from "../../components/TaskComponents/NewTaskForm"

import { Container, Row, Col } from "react-bootstrap"

const NewTaskPage = () => {
    return (

        <Container>
            <Row>
                <Col md={{ offset: 3, span: 6 }}>
                    <h1>New Task</h1>
                    <NewTaskForm />
                </Col>
            </Row>
        </Container>
    )
}
export default NewTaskPage