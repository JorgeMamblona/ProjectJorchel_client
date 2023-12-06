
import projectService from '../../../services/projects.services'

import ProjectTaskState from '../../../components/ProjectComponents/ProjectTaskState/ProjectTaskState'
import EditableField from '../../../components/EditableField/EditableField'

import { useParams, Link } from "react-router-dom"

import { useEffect, useState } from 'react'

import { Button } from 'react-bootstrap'

import './ProjectDetailsPage.css'
import Background from '../../../components/Background/background'
import CommentsList from '../../../components/CommentsList/CommentsList'




const ProjectPage = () => {

    const { project_id } = useParams()

    const [projectData, setProjectData] = useState()

    const [display, setDisplay] = useState('none')

    useEffect(() => {
        loadProjectDetails()
    }, [project_id])

    const loadProjectDetails = () => {
        projectService
            .getDetails(project_id)
            .then(({ data }) => {
                setProjectData(data)
            })
            .catch(err => console.log(err))
    }

    const handleCommentsWindow = () => {
        setDisplay(display === 'none' ? 'block' : 'none')
    }

    return (

        !projectData
            ?
            <></>
            :
            <div className="project-page">

                <div className="header-info justify-content-between">

                    <EditableField data={'project-title'} value={projectData.title} data_id={projectData._id} />
                    <div className="d-flex">
                        <Link className='link-margin' to={`/task/create/${projectData._id}`}>
                            <Button className="myButton2" >New Task</Button>
                        </Link>

                        <div className="colaborators">
                            {
                                projectData.colaborators.map(elm => <div key={elm._id}><img className='avatar-image' src={elm.avatar} /></div>)
                            }

                        </div>
                    </div>

                </div>

                <div className="row justify-content-around">
                    <ProjectTaskState project_id={projectData._id} state='TODO' />
                    <ProjectTaskState project_id={projectData._id} state='ONGOING' />
                    <ProjectTaskState project_id={projectData._id} state='REVIEW' />
                    <ProjectTaskState project_id={projectData._id} state='DONE' />

                </div>
                <div className="footer-info">
                    <Button className='comments' onClick={handleCommentsWindow}>
                        <svg width="46" height="36" viewBox="0 0 46 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42.4816 28.4625C44.6775 26.2848 45.995 23.5527 45.995 20.5714C45.995 14.1429 39.8864 8.83125 31.9252 7.88304C29.4099 3.25446 23.5008 0 16.6097 0C7.43471 0 0.000537812 5.75357 0.000537812 12.8571C0.000537812 15.8304 1.31809 18.5625 3.51401 20.7482C2.29228 23.2152 0.535543 25.1277 0.503602 25.1598C0.000537826 25.6982 -0.143195 26.4857 0.152256 27.1688C0.439721 27.8518 1.11047 28.2938 1.84511 28.2938C6.11717 28.2938 9.56675 26.6705 11.8425 25.1759C12.5772 25.3446 13.3357 25.4732 14.1103 25.5696C16.6176 30.1821 22.5027 33.4286 29.3859 33.4286C31.0468 33.4286 32.6438 33.2357 34.161 32.8821C36.4368 34.3688 39.8784 36 44.1584 36C44.8931 36 45.5558 35.558 45.8513 34.875C46.1388 34.192 46.003 33.4045 45.4999 32.8661C45.468 32.842 43.7033 30.9295 42.4816 28.4625ZM11.1159 21.0455L9.75041 21.9375C8.6245 22.6687 7.47464 23.2473 6.30881 23.6571C6.52441 23.2795 6.74001 22.8777 6.94762 22.4679L8.18532 19.9687L6.205 18C5.12701 16.9232 3.83341 15.1634 3.83341 12.8571C3.83341 7.97946 9.68653 3.85714 16.6097 3.85714C23.5328 3.85714 29.3859 7.97946 29.3859 12.8571C29.3859 17.7348 23.5328 21.8571 16.6097 21.8571C15.2921 21.8571 13.9746 21.7045 12.6969 21.4071L11.1159 21.0455ZM39.7906 25.7143L37.8182 27.675L39.0559 30.1741C39.2635 30.5839 39.4791 30.9857 39.6947 31.3634C38.5289 30.9536 37.379 30.375 36.2531 29.6437L34.8877 28.7518L33.2986 29.1214C32.021 29.4187 30.7035 29.5714 29.3859 29.5714C25.0739 29.5714 21.2251 27.9562 18.9014 25.5777C26.9904 24.7098 33.2188 19.358 33.2188 12.8571C33.2188 12.5839 33.1868 12.3187 33.1629 12.0536C38.3053 13.2187 42.1621 16.6179 42.1621 20.5714C42.1621 22.8777 40.8686 24.6375 39.7906 25.7143Z" fill="white" />
                        </svg>
                    </Button>
                </div>

                <div className='my-comments' style={{ display: display }}>
                    <CommentsList scope={'Project'} parent={project_id} handleCommentsWindow={handleCommentsWindow} />
                </div>
                <Background />

            </div>
    )
}

export default ProjectPage