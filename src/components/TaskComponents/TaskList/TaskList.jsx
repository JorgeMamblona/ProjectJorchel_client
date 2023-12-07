import { Link } from 'react-router-dom'
import MyTaskCard from '../MyTaskCard/MyTaskCard'
import './TaskList.css'

const TaskList = ({ taskList, loadMyTasks }) => {

    return (
        <div className="my-tasks">
            <h1>My tasks</h1>
            <div className="task-list">
                <div className='list-scrollable-content'>
                    {taskList.map(elm => <MyTaskCard key={elm._id} {...elm} loadMyTasks={loadMyTasks} />)}
                </div>
            </div>
        </div>
    )
}

export default TaskList