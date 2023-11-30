import userService from '../../services/user.services'

import { useEffect, useState } from 'react'


const AvatarListColaborators = (colaborators) => {

    const [users, setUsers] = useState()

    const loadUserInfo = colaborators => {

        userService
            .listUsersById(colaborators)
            .then(({ data }) => {
                setUsers(data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadUserInfo(colaborators)
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

export default AvatarListColaborators