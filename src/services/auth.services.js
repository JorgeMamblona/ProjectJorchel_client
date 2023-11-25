import axios from "axios";
import Signup from "../pages/SignupPage";

class AuthService {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}`


        })

    }

    signup(userData) {
        return this.api.post('/signup', userData)
    }
    // login(userData) {
    //     return this.api.post('/login', userData)
    // }
    // FALTA VERIFY 

}

const authService = new AuthService()
export default authService