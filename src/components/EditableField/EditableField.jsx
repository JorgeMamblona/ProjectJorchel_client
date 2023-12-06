import { ProjectsContext } from "../../contexts/projects.context"

import projectService from "../../services/projects.services"

import { Form, Button } from "react-bootstrap"
import { useEffect, useRef, useState, useContext } from "react"

import './EditableField.css'
import taskService from "../../services/tasks.services"

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
        _id: data_id,
        [key]: value
    })

    const handleInputChange = e => {
        const { value } = e.target
        setformData({ _id: data_id, [key]: value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        model === 'project' && projectHandler()
        model === 'task' && taskHandler()

        setEditable(!editable)
    }

    const projectHandler = () => {

        projectService
            .edit(formData)
            .then(() => loadProjects())
            .catch(err => console.log(err))
    }

    const taskHandler = () => {
        taskService
            .edit(formData)
            .then(() => loadProjects())
            .catch(err => console.log(err))
    }

    useEffect(() => {
        setformData({ _id: data_id, [key]: value })
    }, [data_id])

    return (
        <div className="form-edit">
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className='d-flex align-items-center'>
                    {editable
                        ?
                        <Button className="button-icon" id='2' type="submit">
                            <svg className="my-icon2" width="20" height="20" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.17202 10.162L1.70202 6.69202C1.51504 6.50504 1.26145 6.4 0.99702 6.4C0.732594 6.4 0.478998 6.50504 0.292021 6.69202C0.105043 6.879 0 7.13259 0 7.39702C0 7.52795 0.0257889 7.6576 0.0758939 7.77856C0.125999 7.89953 0.199439 8.00944 0.292021 8.10202L4.47202 12.282C4.86202 12.672 5.49202 12.672 5.88202 12.282L16.462 1.70202C16.649 1.51504 16.754 1.26145 16.754 0.997021C16.754 0.732594 16.649 0.478998 16.462 0.292021C16.275 0.105043 16.0214 0 15.757 0C15.4926 0 15.239 0.105043 15.052 0.292021L5.17202 10.162Z" fill="white" />
                            </svg>
                        </Button>
                        :

                        <span className='editButton' id='1' onClick={handleEditable}>
                            <svg className="my-icon" width="20" height="20" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.0625 3.77082L15.2292 7.93749M1.16666 17.8333H5.33332L16.2708 6.89582C16.5444 6.62224 16.7614 6.29744 16.9095 5.93998C17.0576 5.58252 17.1338 5.1994 17.1338 4.81249C17.1338 4.42558 17.0576 4.04246 16.9095 3.685C16.7614 3.32754 16.5444 3.00274 16.2708 2.72916C15.9972 2.45557 15.6724 2.23855 15.315 2.09048C14.9575 1.94242 14.5744 1.86621 14.1875 1.86621C13.8006 1.86621 13.4175 1.94242 13.06 2.09048C12.7025 2.23855 12.3777 2.45557 12.1042 2.72916L1.16666 13.6667V17.8333Z" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>}

                    <Form.Control
                        className={`title_editable_${editable}`}
                        disabled={!editable}
                        value={formData.title}
                        onChange={handleInputChange}
                    />

                </Form.Group>
            </Form >
        </div >
    )
}

export default EditableField