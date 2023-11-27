import { NavDropdown, Container } from 'react-bootstrap'
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
                    <h1>Holaa</h1>

                    <Link to={'/'} className='nav-link'>Proyecto </Link>
                    <Link to={'/'} className='nav-link'>Tareas</Link>



                </Container>
            </div>

        </>
    )
}

export default NavegationVer