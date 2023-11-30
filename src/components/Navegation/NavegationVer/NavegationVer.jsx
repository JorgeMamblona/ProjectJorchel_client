import { AuthContext } from '../../../contexts/auth.context'

import projectService from '../../../services/projects.services'

import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { NavDropdown, Container, Accordion, Button } from 'react-bootstrap'

import logo from './../../../assets/logo.png'

import 'bootstrap'
import './NavegationVer.css'

const NavegationVer = () => {

    const { loggedUser, logout } = useContext(AuthContext)
    const navigate = useNavigate()

    const [projects, setProjects] = useState()

    useEffect(() => {
        loadProjects()
    }, [loggedUser])

    const loadProjects = () => {

        projectService
            .getOwnedProjects()
            .then(({ data }) => setProjects(data))
            .catch(err => console.log(err))
    }

    const doLogout = () => {
        logout()
        navigate("/")

    }

    return (
        <div className='custom-nav'>
            <Container>
                <Link to={'/'} className='navbar-brand'></Link>
                <NavDropdown title={loggedUser.username} id="collapsible-nav-dropdown">

                    <Link className='dropdown-item' to={'/my-profile'} >Mi perfil </Link>
                    <NavDropdown.Divider />
                    <span className='dropdown-item' onClick={doLogout}>Log out </span>

                </NavDropdown>
                <hr />

                <div className="my-accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="my-accordion-header accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Projects
                            </button>
                        </h2>
                        <hr />
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                {/* NOT: DESACOPLAR LISTADO DE PROYECTOS */}
                                {!projects ? <><p>loading</p></> : projects.map(e => {
                                    return (
                                        <div key={e._id}>
                                            <Link to={`/project/${e._id}`} className='nav-link'>{e.title}</Link>
                                            <hr />
                                        </div>
                                    )
                                })}
                                <Link to='/project/create' className='nav-link'>
                                    <Button className='myButton'>New Project</Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
                <Link to={'/project/myProjects'} className='nav-link mt-3'><Button className='myButton'>My Projects</Button></Link>
                <Link to={'/'} className='nav-link'>Tareas</Link>
                <Link to={'/'} className="footer-nav"><img src={logo} alt="" /></Link>
            </Container >
        </div >
    )
}

export default NavegationVer