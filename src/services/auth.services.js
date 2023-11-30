import axios from "axios"
class AuthService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    signup(userData) {
        return this.api.post('/auth/sign-up', userData)
    }

    login(userData) {
        return this.api.post('/auth/log-in', userData)
    }

    verify(authToken) {
        return this.api.get('/auth/verify', {
            headers: { Authorization: `Bearer ${authToken}` }
        })
    }

}

const authService = new AuthService()
export default authService