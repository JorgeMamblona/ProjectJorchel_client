
import './ProjectPage.css'
import ToDoState from '../../components/TaskStates/ToDoState/ToDoState'
import InProgressState from '../../components/TaskStates/InProgressState/InProgressState'
import ReviewState from '../../components/TaskStates/ReviewState/ReviewState'
import DoneState from '../../components/TaskStates/DoneState/DoneState'

import { useParams, Link } from "react-router-dom"

import avatar from './../../assets/holaaa.jpeg'
import { useEffect, useState } from 'react'
import projectService from '../../services/projects.services'
import { Button } from 'react-bootstrap'

const ProjectPage = () => {

    const { project_id } = useParams()

    const [projectData, setProjectData] = useState()

    useEffect(() => {
        loadProjectDetails(project_id)
    }, [project_id])

    const loadProjectDetails = project_id => {
        projectService
            .getDetails(project_id)
            .then(({ data }) => {
                setProjectData(data)
            })
            .catch(err => console.log(err))
    }

    return (

        !projectData
            ?
            <></>
            :
            <div className="project-page">

                <div className="header-info justify-content-between">

                    <h1>Gestion de tareas: {projectData.title}</h1>

                    <Link to={`/task/create/${projectData._id}`}>
                        <Button variant="outline-primary">New Task</Button>
                    </Link>

                    <div className="colaborators">
                        <div className="avatar-2">
                            <img src={avatar} alt="" />
                        </div>
                        <div className="avatar-2">
                            <img src={avatar} alt="" />
                        </div>
                    </div>

                </div>

                <div className="row justify-content-around">
                    <ToDoState project_id={projectData._id} />
                    <InProgressState project_id={projectData._id} />
                    <ReviewState project_id={projectData._id} />
                    <DoneState project_id={projectData._id} />
                </div>
            </div>
    )
}

export default ProjectPage