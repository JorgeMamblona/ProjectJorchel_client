import axios from "axios"
class TaskService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/tasks`
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

    getProjectTasksByState(project_id, state) {
        return this.api.post('/getProjectTasksByState', { project_id, state })
    }

    getOwnedTasks() {
        return this.api.get('/getOwnedTasks')
    }
    delete(task_id) {
        return this.api.delete(`/${task_id}/delete`)
    }
}

const taskService = new TaskService()
export default taskService