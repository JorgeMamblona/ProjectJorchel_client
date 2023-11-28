
import './ProjectPage.css'
import ToDoState from '../../components/TaskStates/ToDoState/ToDoState'
import InProgressState from '../../components/TaskStates/InProgressState/InProgressState'
import ReviewState from '../../components/TaskStates/ReviewState/ReviewState'
import DoneState from '../../components/TaskStates/DoneState/DoneState'

import avatar from './../../assets/holaaa.jpeg'



const ProjectPage = () => {
    return (
        <div className="project-page">

            <div className="header-info justify-content-between">
                <h1>Gestion de tareas</h1>
                <div className="colaborators">
                    <div className="avatar">
                        <img src={avatar} alt="" />
                    </div>
                    <div className="avatar">
                        <img src={avatar} alt="" />
                    </div>

                </div>
            </div>


            <div className="row justify-content-around">
                <ToDoState />
                <InProgressState />
                <ReviewState />
                <DoneState />


            </div>

        </div>
    )
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