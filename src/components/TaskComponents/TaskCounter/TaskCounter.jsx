import { useState } from "react"
import taskService from '../../../services/tasks.services'
const TaskCounter = ({ state }) => {

    const [counter, setCounter] = useState(0)

    taskService
        .getOwnedTasks()
        .then(({ data }) => {
            const filtered = data.filter(elm => elm.state === state)
            setCounter(filtered.length)
        })
        .catch(err => console.log(err))
    return (
        !counter
            ?
            <></>
            :
            <span>{counter}</span>

    )
}

export default TaskCounter