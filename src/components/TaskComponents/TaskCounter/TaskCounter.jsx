import { useEffect, useState } from "react"
import taskService from "../../../services/tasks.services"
const TaskCounter = ({ state, project_id, taskList }) => {
    const [counter, setCounter] = useState(0)
    const [tasks, setTasks] = useState(taskList)

    useEffect(() => {

        console.log(tasks)
    }, [tasks])


    // const loadTasks = () => {
    //     taskService
    //         .getMyTasks(project_id, state)
    //         .then(({ data }) => {
    //             setTasks(data)
    //         })
    //         .catch()
    // }

    const filterTasks = () => {
        const filtered = tasks.filter(elm => elm.state === state && elm.project === project_id)
        setCounter(filtered.length)
        console.log(filtered)


    }

    return (
        !tasks
            ?
            <span>0</span>
            :
            <span>{counter}</span>

    )
}

export default TaskCounter