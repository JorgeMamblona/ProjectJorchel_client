import { createContext, useContext, useState } from "react";
import projectService from "../services/projects.services";
import { AuthContext } from "./auth.context";

const ProjectsNavContext = createContext()

const ProjectsNavContextWrapper = props => {

    const { loggedUser, logout } = useContext(AuthContext)
    const [projects, setProjects] = useState()

    const loadProjects = () => {

        projectService
            .getOwnedProjects(loggedUser._id)
            .then(({ data }) => setProjects(data))
            .catch(err => console.log(err))
    }

    return (
        <AuthContext.Provider value={{ projects, loadProjects }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { ProjectsNavContext, ProjectsNavContextWrapper }