import { useParams } from 'react-router-dom'
import './ProjectPage.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
const ProjectPage = () => {
    const { project_id } = useParams()

    const [project, setProject] = useState({})

    useEffect(() => {
        axios
            .get(`http://localhost:5005/api/projects/${project_id}`)
            .then(({ data }) => setProject(data))
            .catch(err => console.log(err))
    })
    return (
        <h1>NO ARRIESGO</h1>
    )

}

export default ProjectPage