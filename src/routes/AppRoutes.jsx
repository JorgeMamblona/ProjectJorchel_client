import SignupPage from '../pages/SignupPage/SignupPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import NewProjectPage from '../pages/NewProjectPage/NewProjectPage'
import HomePage from '../pages/HomePage/HomePage'
import ProjectPage from '../pages/ProjectPage/ProjectPage'
import NewTaskPage from '../pages/NewTaskPage/NewTaskPage'
import ListProjectPage from '../pages/ListProjectPage/LisProjectPage'

import PrivateRoute from './PrivateRoute'

import { Routes, Route } from 'react-router-dom'

const AppRoutes = () => {

    return (

        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/sign-up' element={<SignupPage />} />
            <Route path='/log-in' element={<LoginPage />} />
            <Route path='/project/:project_id' element={<ProjectPage />} />
            <Route element={<PrivateRoute />}>
                <Route path='/project/myProjects' element={<ListProjectPage />} />
                <Route path='/task/create/:project_id' element={<NewTaskPage />} />
                <Route path='/project/create' element={<NewProjectPage />}></Route>
            </Route>
        </Routes>
    )
}

export default AppRoutes