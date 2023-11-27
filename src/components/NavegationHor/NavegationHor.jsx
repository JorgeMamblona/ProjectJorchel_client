import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavegationHor.css'

const NavegationHor = () => {

    return (
        <>
            <Navbar className='custom-nav-hor' bg="dark" data-bs-theme="dark">
                <Container>
                    <Link to={'/'} className='navbar-brand'>Jorchel</Link>
                    <Nav className="me-auto">
                        <Link to={'/log-in'} className='nav-link'>Login</Link>
                        <Link to={'/sign-up'} className='nav-link'>Sign up</Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />


        </>
    )
}
export default NavegationHor