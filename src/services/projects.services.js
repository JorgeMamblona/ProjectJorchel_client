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

    getOwnedProjects(owner) {
        return this.api.post('/getOwnedProjects', { owner })
    }



}

const projectService = new ProjectService()
export default projectService