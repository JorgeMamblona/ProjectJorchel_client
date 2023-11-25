import { Routes, Route } from 'react-router-dom'
import Signup from '../pages/SignupPage'
import Login from '../pages/LoginPage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<p>INSETA PAG INDEX AQUI</p>} />
            <Route path='/sign-up' element={<Signup />}></Route>
            <Route path='/log-in' element={<Login />}></Route>
        </Routes>
    )
}

export default AppRoutes