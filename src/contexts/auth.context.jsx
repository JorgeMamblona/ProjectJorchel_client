import { createContext, useState } from "react";
import authService from "../services/auth.services";

const AuthContext = createContext()

const AuthContextWrapper = props => {

    const [loggedUser, setLoggerUser] = useState(null)

    const authenticateUser = () => {

        const token = localStorage.getItem('authToken')

        token && authService
            .verify(token)
            .then(({ data }) => {
                setLoggerUser(data.loggedUser)
            })
            .catch(err => console.log(err))
    }

    return (
        <AuthContext.Provider value={{ loggedUser, authenticateUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextWrapper }