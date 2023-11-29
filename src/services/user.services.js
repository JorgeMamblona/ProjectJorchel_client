import axios from "axios";

class UserService {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/users`

        })
    }

    listAllUsers(userToFind) {
        return this.api.post('/listAllUsers', { userToFind })
    }

    listUsersById(participants) {
        return this.api.post('/listUsersById', participants)
    }

}

const userService = new UserService()
export default userService