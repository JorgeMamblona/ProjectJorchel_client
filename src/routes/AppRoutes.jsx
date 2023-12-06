import SignupPage from '../pages/SignupPage/SignupPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import NewProjectPage from '../pages/Projects/NewProjectPage/NewProjectPage'
import HomePage from '../pages/HomePage/HomePage'
import ProjectPage from '../pages/Projects/ProjectDetailsPage/ProjectDetailsPage'
import NewTaskPage from '../pages/Tasks/NewTaskPage/NewTaskPage'
import ListProjectPage from '../pages/Projects/ProjectsPage/ProjectsPage'
import ProjectEditPage from '../pages/Projects/ProjectEditPage/ProjectEditPage'
import ListTasksPage from '../pages/Tasks/ListTasksPage.jsx/ListTasksPage'

import PrivateRoute from './PrivateRoute'

import { Routes, Route } from 'react-router-dom'
import TaskDetailsPage from '../pages/Tasks/TaskDetailsPage/TaskDetailsPage'

const AppRoutes = () => {

    return (

        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/sign-up' element={<SignupPage />} />
            <Route path='/log-in' element={<LoginPage />} />
            <Route path='/project/:project_id' element={<ProjectPage />} />
            <Route path='/task/:task_id' element={<TaskDetailsPage />} />

            <Route element={<PrivateRoute />}>
                <Route path='/project/myProjects' element={<ListProjectPage />} />
                <Route path='/task/myTasks' element={<ListTasksPage />} />
                <Route path='/task/create/:project_id' element={<NewTaskPage />} />
                <Route path='/project/create' element={<NewProjectPage />} />
                <Route path='/project/:project_id/edit' element={<ProjectEditPage />} />
            </Route>

            <Route path='*' element={<h1>404</h1>} />
        </Routes>
    )
}

export default AppRoutes