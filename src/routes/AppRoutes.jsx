import { Routes, Route } from 'react-router-dom'
import SignupPage from '../pages/SignupPage/SignupPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import NewProjectPage from '../pages/NewProjectPage/NewProjectPage'
import HomePage from '../pages/HomePage/HomePage'


const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/sign-up' element={<SignupPage />}></Route>
            <Route path='/log-in' element={<LoginPage />}></Route>
            <Route path='/project/create' element={<NewProjectPage />}></Route>
        </Routes>
    )
}

export default AppRoutes