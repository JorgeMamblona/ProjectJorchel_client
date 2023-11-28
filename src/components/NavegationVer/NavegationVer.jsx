import { NavDropdown, Container, Accordion, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import { useContext, useEffect, useState } from 'react'
import logo from './../../assets/logo.png'
import 'bootstrap'

import projectService from '../../services/projects.services'


import './NavegationVer.css'

const NavegationVer = () => {

    const { loggedUser, logout } = useContext(AuthContext)
    const navigate = useNavigate()

    const [projects, setProjects] = useState()

    useEffect(() => {
        loadProjects()
    }, [])

    const loadProjects = () => {

        projectService
            .getOwnedProjects(loggedUser._id)
            .then(({ data }) => setProjects(data))
            .catch(err => console.log(err))
    }

    const doLogout = () => {
        logout()
        navigate("/")

    }
    const headerStyle = {
        backgroundColor: '#12062d', // Establecer el color de fondo del header
        color: 'white', // Color del texto
        borderRadius: '0.25rem', // Opcional: añadir bordes redondeados para el header
        padding: '0.75rem 1rem', // Opcional: ajustar el relleno del header
    };

    return (
        <>
            <div className='custom-nav  '>
                <Container>
                    <Link to={'/'} className='navbar-brand'></Link>
                    <NavDropdown title={loggedUser.username} id="collapsible-nav-dropdown">

                        <Link className='dropdown-item' to={'/my-profile'} >Mi perfil </Link>
                        <NavDropdown.Divider />
                        <span className='dropdown-item' onClick={doLogout}>Log out </span>

                    </NavDropdown>
                    <hr />

                    <Accordion className='my-accordion dark' style={{ backgroundColor: '#12062d' }}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className='my-accordion-button dark' onClick={loadProjects}>Proyecto</Accordion.Header>
                            <Accordion.Body>




                               {!projects ? <><p>loading</p></> : projects.map(e => {
                                    return (
                                        <div key={e._id}>
                                            <Link to={'/sign-up'} className='nav-link'>{e.title}</Link>
                                            <hr />
                                        </div>
                                    )
                                })}


                                <Link to='/project/create' className='nav-link'>
                                    <Button className='myButton'>New Project</Button>
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Link to={'/'} className='nav-link'>Ver proyecto </Link>
                    <Link to={'/'} className='nav-link'>Tareas</Link>


                    <Link to={'/'} className="footer-nav"><img src={logo} alt="" /></Link>




                </Container>





            </div>

        </>
    )
}

export default NavegationVer