import { useEffect, useState } from 'react'
import taskService from '../../../services/tasks.services'

import TaskCard from '../../TaskComponents/TaskCard'


import './ToDoState.css'

const ToDoState = ({ project_id }) => {

    const [taskList, setTaskList] = useState()

    const loadTask = project_id => {


        taskService
            .getProjectTasksByState(project_id, 'TODO')
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
            <>
                <div className="task-col to-do text-center">
                    <div className="title">
                        <h2>TO DO</h2>
                    </div>
                    {
                        taskList.map(elm => <TaskCard key={elm._id} task={elm} />)
                    }
                </div>
            </>
    )
}

export default ToDoState