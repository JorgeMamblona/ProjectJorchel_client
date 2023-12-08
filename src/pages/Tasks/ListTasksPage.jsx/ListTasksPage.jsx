import taskService from '../../../services/tasks.services'

import TaskList from '../../../components/TaskComponents/TaskList/TaskList'

import { useEffect, useState } from "react"

import './ListTasksPage.css'
import Background from '../../../components/Background/back-ground'
import Loading from '../../../components/Loading/Loading'



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
            <><Loading /></>
            :
            <div className='list-tasks-page '>
                <TaskList taskList={taskList} loadMyTasks={loadMyTasks} />
                <Background />
            </div>
    )
}

export default ListTasksPage