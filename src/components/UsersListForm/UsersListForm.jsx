import { Form } from "react-bootstrap"

const UsersListForm = ({ data, handleInputChange }) => {

    return (
        <Form.Group className="mb-3">
            <Form.Label>Colaborators</Form.Label>
            <Form.Control type="text" value={data.title} name='title' placeholder="Enter description" onChange={handleInputChange}></Form.Control>
        </Form.Group>

    )
}

export default UsersListForm