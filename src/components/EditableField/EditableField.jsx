import projectService from "../../services/projects.services"

import { Form, Button } from "react-bootstrap"
import { useEffect, useRef, useState } from "react"

const EditableField = ({ value, data, data_id }) => {

    const ref = useRef(null)
    const [editable, setEditable] = useState(false)

    const handleEditable = () => {
        setEditable(!editable)
        ref.current.focus()
    }

    const handleData = i => {
        const arr = data.split('-')
        return arr[i]
    }

    const model = handleData(0)
    const key = handleData(1)

    const [formData, setformData] = useState({
        project_id: data_id,
        [key]: value
    })

    const handleInputChange = e => {
        const { value } = e.target
        setformData({ project_id: data_id, [key]: value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        if (model === 'project') {
            projectHandler()
        }




        setEditable(!editable)
    }

    const projectHandler = () => {

        projectService
            .edit(formData)
            .then()
            .catch(err => console.log(err))
    }


    useEffect(() => {

    }, [editable])
    return (

        <Form onSubmit={handleFormSubmit}>
            <Form.Group className='d-flex'>
                <Form.Control
                    ref={ref}
                    className={`title_editable_${editable}`}
                    disabled={!editable}
                    defaultValue={value}
                    onChange={handleInputChange}
                />
                {editable ? <Button id='2' type="submit">Save</Button> : <span className='btn btn-primary' id='1' onClick={handleEditable}>Edit</span>}
            </Form.Group>
        </Form>
    )
}

export default EditableField