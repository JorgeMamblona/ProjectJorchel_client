import taskService from '../../../services/tasks.services'

import TaskList from '../../../components/TaskComponents/TaskList/TaskList'

import { useEffect, useState } from "react"

import './ListTasksPage.css'

const ListTasksPage = () => {

    const [taskList, setTaskList] = useState()

    useEffect(() => {
        loadMyTasks()
    }, [])

    const loadMyTasks = () => {

        taskService
            .getMyTasks()
            .then(({ data }) => {
                setTaskList(data)
            })
            .catch(err => console.log(err))
    }

    return (
        !taskList
            ?
            <></>
            :
            <div className='list-tasks-page '>
                <TaskList taskList={taskList} loadMyTasks={loadMyTasks} />
            </div>
    )
}

export default ListTasksPage