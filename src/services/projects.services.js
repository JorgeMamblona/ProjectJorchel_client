import axios from "axios"

class ProjectService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/projects`

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
    getAll() {
        return this.api.get('/getAllProjects')
    }

    getOwnedProjects() {
        return this.api.get('/getOwnedProjects')
    }

    getDetails(project_id) {
        return this.api.get(`/${project_id}`)
    }

}

const projectService = new ProjectService()
export default projectService