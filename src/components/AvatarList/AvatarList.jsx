import userService from '../../services/user.services'

import { useEffect, useState } from 'react'

import './AvatarList.css'

const AvatarList = ({ participants }) => {

    const [users, setUsers] = useState(participants)

    return (
        !users
            ?
            <></>
            :
            <div className="contributors">
                {
                    users.map(elm => {
                        return (
                            <div key={Math.random()} className="avatar">
                                <img src={elm.avatar} alt="" className='avatar-image' />
                            </div>
                        )
                    })
                }
            </div>
    )
}

export default AvatarList