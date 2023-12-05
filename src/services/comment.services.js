import axios from "axios"

class CommentService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/comments`

        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    create(formData) {
        return this.api.post('/create', formData)
    }

    getParentComments(parent) {
        console.log(parent)
        return this.api.post('/getParentComments', { parent })
    }


}

const commentService = new CommentService()
export default commentService