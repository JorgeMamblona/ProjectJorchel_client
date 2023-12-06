import { AuthContext } from '../../../contexts/auth.context'
import { ProjectsContext } from '../../../contexts/projects.context'

import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { NavDropdown, Container, Accordion, Button } from 'react-bootstrap'

import logo from './../../../assets/logo.png'

import 'bootstrap'
import './NavegationVer.css'

const NavegationVer = () => {

    const { loggedUser, logout } = useContext(AuthContext)
    const { projects, loadProjects } = useContext(ProjectsContext)

    const navigate = useNavigate()

    useEffect(() => {
        loadProjects()
    }, [loggedUser])

    const doLogout = () => {
        logout()
        navigate("/")
    }

    return (
        <div className='custom-nav'>
            <Container>
                <div className="nav-header d-flex mr-2">
                    <img className='logo' src={logo} alt="" />
                    <Link to={'/'} className='navbar-brand'></Link>
                    <img className='avatar' src={loggedUser.avatar} alt="" />
                    <NavDropdown title={loggedUser.username} id="collapsible-nav-dropdown">

                        <Link className='dropdown-item' to={'/my-profile'} >Mi perfil </Link>
                        <NavDropdown.Divider />
                        <span className='dropdown-item' onClick={doLogout}>Log out </span>

                    </NavDropdown>


                </div>
                <hr />

                <div className="my-accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="my-accordion-header accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Projects
                            </button>
                        </h2>

                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body my-accordion-body scrollable-content">
                                <hr />
                                {/* NOT: DESACOPLAR LISTADO DE PROYECTOS */}
                                {!projects ? <><p>loading</p></> : projects.map(e => {
                                    return (
                                        <div key={e._id}>
                                            <Link to={`/project/${e._id}`} className='nav-link' >{e.title}</Link>
                                            <hr />
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>

                </div>
                <Link to='/project/create' className='nav-link'>
                    <Button style={{ width: '100%' }} className='myButton3'>New Project</Button>
                </Link>
                <Link to={'/project/myProjects'} className='my-nav nav-link mt-3'>All Projects</Link>
                <Link to={'/task/myTasks'} className='my-nav nav-link mt-3'>All Tasks</Link>

            </Container >
        </div >
    )
}

export default NavegationVer