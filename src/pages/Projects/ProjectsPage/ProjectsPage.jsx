import { AuthContext } from '../../../contexts/auth.context'

import ProjectCard from '../../../components/ProjectComponents/ProjectCard'
import projectService from '../../../services/projects.services'

import { useContext, useEffect, useState } from "react"

import './ProjectsPage.css'

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

        <div className="projects-page d-flex justify-content-center">
            <div className="container-card">
                <div>
                    <h1 className='title-myprojects'>My Projects</h1>
                </div>
                {/* TODO: DESACOPLAR PROJECTSLIST */}
                <div className='scrollable-content'>
                    {
                        !projects ? <><h1>Loading</h1></> : projects.map(elm => <ProjectCard key={elm._id} {...elm} loadProjects={loadProjects} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default ListProjectPage