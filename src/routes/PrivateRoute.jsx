import { AuthContext } from "../contexts/auth.context"

import { useContext } from "react"
import Loading from "../components/Loading/Loading"
import { Outlet, Navigate } from "react-router-dom"

const PrivateRoute = () => {

    const { loggedUser, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loading />
    }

    if (!loggedUser) {
        return <Navigate to="/log-in" />
    }

    return <Outlet />
}

export default PrivateRoute