import taskService from '../../../services/tasks.services'

import TaskCard from '../../TaskComponents/TaskCard/TaskCard'

import { useEffect, useState } from 'react'

import './ProjectTaskState.css'
import { Link } from 'react-router-dom'

const ProjectTaskState = ({ project_id, state }) => {

    const [taskList, setTaskList] = useState()

    const loadTask = project_id => {

        taskService
            .getProjectTasksByState(project_id, state)
            .then(({ data }) => {
                setTaskList(data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {

        loadTask(project_id)

    }, [project_id])

    return (
        !taskList
            ?
            <></>
            :
            <div className={`task-col task-${state} text-center scrollable-content`}>
                <div className="title">
                    <h2>{state}</h2>
                </div>
                <div className='my-scrollable-content'>
                    {
                        taskList.map(elm => <Link key={elm._id} className={"my-Link"} to={`/task/${elm._id}`}><TaskCard key={elm._id} {...elm} /></Link>)
                    }
                </div>
            </div>
    )
}

export default ProjectTaskState