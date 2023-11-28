import axios from "axios";

class ProjectService {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/projects`

        })

    }

    create(formData) {
        return this.api.post('/create', formData)
    }
    getAll() {
        return this.api.get('/getAllProjects')
    }



}

const projectService = new ProjectService()
export default projectService