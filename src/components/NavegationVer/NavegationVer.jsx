import { NavDropdown, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import { useContext } from 'react'





import './NavegationVer.css'
const NavegationVer = () => {


    const { loggedUser } = useContext(AuthContext)
    return (
        <>

            <div data-bs-theme="dark" className='custom-nav'>
                <Container>
                    <Link to={'/'} className='navbar-brand'></Link>
                    <NavDropdown title={loggedUser.username} id="collapsible-nav-dropdown">

                        <Link className='dropdown-item' to={'/my-profile'} >Mi perfil </Link>
                        <NavDropdown.Divider />
                        <Link className='dropdown-item' to={'/log-out'} >Log out </Link>

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