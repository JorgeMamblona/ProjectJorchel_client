import authService from "../services/auth.services"
import { createContext, useState } from "react"

const AuthContext = createContext()

const AuthContextWrapper = props => {

    const [loggedUser, setLoggedUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const authenticateUser = () => {

        const token = localStorage.getItem('authToken')

        token && authService
            .verify(token)
            .then(({ data }) => {
                setLoggedUser(data.loggedUser)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)

            })
    }

    const logout = () => {

        localStorage.removeItem('authToken')
        setLoggedUser(null)
        setIsLoading(false)
    }

    return (

        <AuthContext.Provider value={{ loggedUser, authenticateUser, logout, isLoading }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextWrapper }