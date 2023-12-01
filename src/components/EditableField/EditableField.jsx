import { ProjectsContext } from "../../contexts/projects.context"

import projectService from "../../services/projects.services"

import { Form, Button } from "react-bootstrap"
import { useEffect, useRef, useState, useContext } from "react"

const EditableField = ({ value, data, data_id }) => {

    const { loadProjects } = useContext(ProjectsContext)

    const [editable, setEditable] = useState(false)

    const handleEditable = () => {
        setEditable(!editable)
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
        console.log(e)
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
            .then(() => loadProjects())
            .catch(err => console.log(err))
    }

    useEffect(() => {
        setformData({ project_id: data_id, [key]: value })
    }, [data_id])
    return (

        <Form onSubmit={handleFormSubmit}>
            <Form.Group className='d-flex'>
                <Form.Control
                    className={`title_editable_${editable}`}
                    disabled={!editable}
                    value={formData.title}
                    onChange={handleInputChange}
                />
                {editable ? <Button id='2' type="submit">Save</Button> : <span className='btn btn-primary' id='1' onClick={handleEditable}>Edit</span>}
            </Form.Group>
        </Form>
    )
}

export default EditableField