import userService from '../../services/user.services'

import { useEffect, useState } from 'react'


const AvatarList = (participants) => {

    const [users, setUsers] = useState()

    const loadUserInfo = participants => {

        userService
            .listUsersById(participants)
            .then(({ data }) => {
                setUsers(data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadUserInfo(participants)
    }, [])

    return (
        !users
            ?
            <></>
            :
            <div className="contributors">
                {
                    users.map(elm => {
                        return (
                            <div key={elm._id} className="avatar">
                                <img src={elm.avatar} alt="" />
                            </div>
                        )
                    })
                }
            </div>
    )
}

export default AvatarList