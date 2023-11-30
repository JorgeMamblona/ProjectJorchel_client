import taskService from '../../../services/tasks.services'

import TaskCard from '../../TaskComponents/TaskCard'

import { useEffect, useState } from 'react'

import './State.css'

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
            <div className={`task-col to-do task-${state} text-center`}>
                <div className="title">
                    <h2>{state}</h2>
                </div>
                {
                    taskList.map(elm => <TaskCard key={elm._id} {...elm} />)
                }
            </div>
    )
}

export default ProjectTaskState