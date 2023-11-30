import { AuthContext } from '../../contexts/auth.context'

import ProjectCard from '../../components/ProjectComponents/ProjectCard'
import projectService from '../../services/projects.services'

import { useContext, useEffect, useState } from "react"

const ListProjectPage = () => {

    const { loggedUser } = useContext(AuthContext)
    const { _id: owner } = loggedUser
    const [projects, setProjects] = useState()

    useEffect(() => {

        loadProjects(owner)

    }, [])

    const loadProjects = owner => {

        projectService
            .getOwnedProjects(owner)
            .then(({ data }) => setProjects(data))
            .catch(err => console.log(err))
    }

    return (
        <>
            <div>
                <h1>My Projects</h1>
            </div>
            {
                !projects ? <><h1>Loading</h1></> : projects.map(elm => <ProjectCard key={elm._id} project={elm} />)
            }
        </>
    )
}

export default ListProjectPage