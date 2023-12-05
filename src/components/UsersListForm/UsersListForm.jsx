import userService from "../../services/user.services"

import UserList from "../UserList/UserList"

import { useEffect, useState } from "react"
import { Form } from "react-bootstrap"

const UsersListForm = ({ setUsers }) => {

    const [userList, setUserList] = useState([])
    const [selectedUsers, setSelectedUSers] = useState([])

    const loadUsers = e => {

        const { value } = e.target

        if (value) {
            findUsers(value)
        } else {
            setUserList([])
        }
    }

    const findUsers = value => {

        userService
            .listAllUsers(value)
            .then(({ data }) => {
                setUserList(data)
            })
            .catch(err => console.log(err))
    }

    const addUser = user => {

        const newList = [...selectedUsers]
        if (!newList.includes(user)) newList.push(user)
        setSelectedUSers(newList)
    }

    useEffect(() => {

        setUsers(selectedUsers)

    }, [userList, selectedUsers])

    return (
        <>
            <Form.Group className="mb-3">
                <Form.Control placeholder="Username" onChange={loadUsers} />
            </Form.Group>
            <UserList userList={userList} addUser={addUser} />

        </>
    )
}

export default UsersListForm