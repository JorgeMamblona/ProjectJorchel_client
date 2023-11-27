import { Button, Form, InputGroup } from "react-bootstrap"
import userService from "../../services/user.services"
import { useEffect, useState } from "react"
import UserList from "../UserList/UserList"

const UsersListForm = ({ data, handleInputChange, setUsers }) => {

    const [userList, setUserList] = useState([])
    const [selectedUsers, setSelectedUSers] = useState([])
    const loadUsers = e => {
        const { value } = e.target
        // if (e.target.value.length >= 3) {
        findUsers(value)
        //  }

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
        newList.push(user)
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