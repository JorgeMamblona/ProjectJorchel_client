import { Routes, Route } from 'react-router-dom'
import SignupPage from '../pages/SignupPage/SignupPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import NewProjectPage from '../pages/NewProjectPage/NewProjectPage'
import PrivateRoute from './PrivateRoute'


const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<p>INSETA PAG INDEX AQUI</p>} />
            <Route path='/sign-up' element={<SignupPage />}></Route>
            <Route path='/log-in' element={<LoginPage />}></Route>
            <Route element={<PrivateRoute />}>
                <Route path='/project/create' element={<NewProjectPage />}></Route>
            </Route>
        </Routes>
    )
}

export default AppRoutes