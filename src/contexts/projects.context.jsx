import { createContext, useContext, useState } from "react";
import projectService from "../services/projects.services";
import { AuthContext } from "./auth.context";

const ProjectsContext = createContext()

const ProjectsContextWrapper = props => {

    const { loggedUser } = useContext(AuthContext)
    const [projects, setProjects] = useState()

    const loadProjects = () => {

        projectService
            .getOwnedProjects()
            .then(({ data }) => setProjects(data))
            .catch(err => console.log(err))
    }

    return (
        <ProjectsContext.Provider value={{ projects, loadProjects }}>
            {props.children}
        </ProjectsContext.Provider>
    )
}

export { ProjectsContext, ProjectsContextWrapper }