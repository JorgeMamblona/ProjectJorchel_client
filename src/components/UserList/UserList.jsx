import { useState } from "react"
import { Button } from "react-bootstrap"

const UserList = ({ userList, addUser }) => {

    const [users, setUsers] = useState(userList)

    return (
        <>
            {
                userList.map(elm => {
                    return (
                        <Button key={elm._id} className="mb-1 sm" style={{ width: '100%' }} onClick={() => addUser({ _id: elm._id, username: elm.username })}>{elm.username}</Button>
                    )
                }).slice(0, 3)
            }
        </>
    )
}

export default UserList