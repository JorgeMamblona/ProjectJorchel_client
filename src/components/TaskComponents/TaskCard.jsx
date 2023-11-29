
import { prettyDate } from '../../utils/prettyDate'
import AvatarList from '../AvatarList/AvatarList'

const TaskCard = ({ task }) => {

    return (

        <div className="task" >

            <h3>{task.title}</h3>
            <div className="task-info">
                <p>{prettyDate(task.endDate)}</p>
                <AvatarList participants={task.participants} />
            </div>
        </div>

    )
}

export default TaskCard