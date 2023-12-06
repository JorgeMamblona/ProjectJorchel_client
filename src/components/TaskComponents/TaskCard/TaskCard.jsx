
import { useContext, useEffect, useState } from 'react'
import { prettyDate } from '../../../utils/prettyDate'
import AvatarList from '../../AvatarList/AvatarList'
import { AuthContext } from '../../../contexts/auth.context'
import './TaskCard.css'

const TaskCard = ({ title, endDate, state, participants }) => {

    const { loggedUser } = useContext(AuthContext)
    const [included, setIncluded] = useState(false)

    const checkIncluded = () => {
        participants.forEach(elm => {
            if (elm._id === loggedUser._id) setIncluded(true)
        })
    }

    useEffect(() => { checkIncluded() }, [])

    return (

        <div className={`task-project-${state} included-${state}-${included}`} >

            <h3>{title}</h3>
            <div className="task-info">
                <p>{prettyDate(endDate)}</p>
                <AvatarList participants={participants} />
            </div>
        </div>
    )
}

export default TaskCard