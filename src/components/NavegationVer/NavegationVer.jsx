import { NavDropdown, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import { useContext } from 'react'





import './NavegationVer.css'
const NavegationVer = () => {


    const { loggedUser } = useContext(AuthContext)
    return (
        <>

<<<<<<< Updated upstream
            <Nav className="col-md-12 d-none d-md-block bg-dark sidebar"

            >
                <div className="sidebar-sticky"></div>
                <Nav.Item>
                    <Link to={'#'} className='nav-link'>Sign up</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to={'#'} className='nav-link'>Sign up</Link>
                </Nav.Item>
=======
            <div data-bs-theme="dark" className='custom-nav'>
                <Container>
                    <Link to={'/'} className='navbar-brand'></Link>
                    <NavDropdown title={loggedUser.username} id="collapsible-nav-dropdown">

                        <Link className='dropdown-item' to={'/my-profile'} >Mi perfil </Link>
                        <NavDropdown.Divider />
                        <Link className='dropdown-item' to={'/log-out'} >Log out </Link>

                    </NavDropdown>
                    <hr />

                    <Link to={'/'} className='nav-link'>Proyecto </Link>
                    <Link to={'/'} className='nav-link'>Tareas</Link>
>>>>>>> Stashed changes



                </Container>
            </div>

        </>
    )
}

export default NavegationVer