import { createContext, useState } from "react";
import authService from "../services/auth.services";

const AuthContext = createContext()

const AuthContextWrapper = props => {

    const [loggedUser, setLoggedUser] = useState(null)

    const authenticateUser = () => {

        const token = localStorage.getItem('authToken')

        token && authService
            .verify(token)
            .then(({ data }) => {
                setLoggedUser(data.loggedUser)
            })
            .catch(err => console.log(err))
    }

    const logout = () => {
        localStorage.removeItem('authToken')
        setLoggedUser(null)

    }

    return (
        <AuthContext.Provider value={{ loggedUser, authenticateUser, logout }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextWrapper }