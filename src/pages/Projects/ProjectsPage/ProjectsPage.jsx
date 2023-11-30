import { AuthContext } from '../../../contexts/auth.context'

import ProjectCard from '../../../components/ProjectComponents/ProjectCard'
import projectService from '../../../services/projects.services'

import { useContext, useEffect, useState } from "react"

const ListProjectPage = () => {

    const [projects, setProjects] = useState()

    useEffect(() => {

        loadProjects()

    }, [])

    const loadProjects = () => {

        projectService
            .getOwnedProjects()
            .then(({ data }) => setProjects(data))
            .catch(err => console.log(err))
    }

    return (
        <>
            <div>
                <h1>My Projects</h1>
            </div>
            {/* TODO: DESACOPLAR PROJECTSLIST */}
            {
                !projects ? <><h1>Loading</h1></> : projects.map(elm => <ProjectCard key={elm._id} {...elm} />)
            }
        </>
    )
}

export default ListProjectPage