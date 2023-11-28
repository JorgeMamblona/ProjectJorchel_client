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
}

export default ProjectPage