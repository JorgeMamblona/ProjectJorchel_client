import { useState } from "react"
import { Button } from "react-bootstrap"
import './UserList.css'

const UserList = ({ userList, addUser }) => {

    const [users, setUsers] = useState(userList)


    return (
        <>
            {
                userList.map(elm => {
                    return (
                        <Button key={elm._id} className="button-user-list myButton5-outline mb-1 mr-1 sm d-flex" style={{ width: '100%' }} onClick={() => addUser({ _id: elm._id, username: elm.username, avatar: elm.avatar })}>
                            <p>{elm.username}</p>
                            <img className="avatar-image" src={elm.avatar} alt="" />
                        </Button>
                    )
                }).slice(0, 3)
            }
        </>
    )
}

export default UserList