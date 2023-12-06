import { ProjectsContext } from '../../../contexts/projects.context'

import ProjectCard from '../../../components/ProjectComponents/ProjectCard'

import { useContext, useEffect, useState } from "react"

import Loading from '../../../components/Loading/Loading'

import './ProjectsPage.css'
import Background from '../../../components/Background/background'

const ListProjectPage = () => {

    const { projects, loadProjects } = useContext(ProjectsContext)

    useEffect(() => {
        loadProjects()
    }, [])

    return (

        <div className="projects-page d-flex justify-content-center">
            <div className="container-card">
                <div>
                    <h1 className='title-myprojects'>My Projects</h1>
                </div>
                {/* TODO: DESACOPLAR PROJECTSLIST */}
                <div className='project-scrollable-content'>
                    {
                        !projects ? <Loading /> : projects.map(elm => <ProjectCard key={elm._id} {...elm} />)
                    }
                </div>
            </div>
            <Background />
        </div>
    )
}

export default ListProjectPage