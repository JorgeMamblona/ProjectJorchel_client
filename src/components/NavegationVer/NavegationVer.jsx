import { NavDropdown, Container, Accordion, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import { useContext } from 'react'

import './NavegationVer.css'

const NavegationVer = () => {

    const { loggedUser, logout } = useContext(AuthContext)
    const navigate = useNavigate()

    const doLogout = () => {
        logout()
        navigate("/")

    }
    return (
        <>
            <div data-bs-theme="dark" className='custom-nav'>
                <Container>
                    <Link to={'/'} className='navbar-brand'></Link>
                    <NavDropdown title={loggedUser.username} id="collapsible-nav-dropdown">

                        <Link className='dropdown-item' to={'/my-profile'} >Mi perfil </Link>
                        <NavDropdown.Divider />
                        <span className='dropdown-item' onClick={doLogout}>Log out </span>

                    </NavDropdown>
                    <hr />

                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Proyecto</Accordion.Header>
                            <Accordion.Body>
                                <Link to={'/sign-up'} className='nav-link'>Proyecto </Link>
                                <hr />
                                <Link to={'/project/create'} className='nav-link'><Button variant="dark">New Project</Button></Link>
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                    <Link to={'/'} className='nav-link'>Proyecto </Link>
                    <Link to={'/'} className='nav-link'>Tareas</Link>



                </Container>
            </div>

        </>
    )
}

export default NavegationVer