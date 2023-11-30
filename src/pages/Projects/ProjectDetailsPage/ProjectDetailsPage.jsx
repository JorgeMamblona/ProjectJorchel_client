import projectService from '../../../services/projects.services'

import ProjectTaskState from '../../../components/ProjectComponents/ProjectTaskState/ProjectTaskState'
import EditableField from '../../../components/EditableField/EditableField'

import { useParams, Link } from "react-router-dom"

import avatar from './../../../assets/holaaa.jpeg'

import { useEffect, useState } from 'react'

import { Button } from 'react-bootstrap'

import './ProjectDetailsPage.css'




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

                    <EditableField data={'project-title'} value={projectData.title} data_id={projectData._id} />

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
                    <ProjectTaskState project_id={projectData._id} state='TODO' />
                    <ProjectTaskState project_id={projectData._id} state='ONGOING' />
                    <ProjectTaskState project_id={projectData._id} state='REVIEW' />
                    <ProjectTaskState project_id={projectData._id} state='DONE' />

                </div>
            </div>
    )
}

export default ProjectPage