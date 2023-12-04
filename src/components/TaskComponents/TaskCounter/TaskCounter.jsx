import { useEffect, useState } from "react"
const TaskCounter = ({ state, taskList, project_id }) => {

    const [counter, setCounter] = useState(0)
    const [tasks, setTasks] = useState(taskList)


    useEffect(() => {
        filterTasks()
    }, [])


    const filterTasks = () => {
        const filtered = tasks.filter(elm => elm.state === state && elm.project === project_id)
        setCounter(filtered.length)
    }

    return (
        !counter
            ?
            <span>0</span>
            :
            <span>{counter}</span>

    )
}

export default TaskCounter