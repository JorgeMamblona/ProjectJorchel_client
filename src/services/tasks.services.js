import axios from "axios";

class TaskService {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/tasks`
        })
    }

    create(formData) {
        return this.api.post('/create', formData)
    }

    getProjectTasksByState(project_id, state) {
        return this.api.post('/getProjectTasksByState', { project_id, state })
    }
}

const taskService = new TaskService()
export default taskService