
import { prettyDate } from '../../../utils/prettyDate'
import AvatarList from '../../AvatarList/AvatarList'

import './TaskCard.css'

const TaskCard = ({ title, endDate, state, participants }) => {

    return (

        <div className={`task-project-${state}`} >

            <h3>{title}</h3>
            <div className="task-info">
                <p>{prettyDate(endDate)}</p>
                <AvatarList participants={participants} />
            </div>
        </div>

    )
}

export default TaskCard