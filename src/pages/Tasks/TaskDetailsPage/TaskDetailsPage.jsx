import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import taskService from "../../../services/tasks.services"

const TaskDetailsPage = () => {

    const { task_id } = useParams()

    const [task, setTask] = useState()

    const loadTask = () => {

        taskService
            .tasksDetails(task_id)
            .then(({ data }) => setTask(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadTask()
    }, [])

    return (
        !task
            ?
            <></>
            :
            <h1>{task._id}</h1>
    )
}

export default TaskDetailsPage