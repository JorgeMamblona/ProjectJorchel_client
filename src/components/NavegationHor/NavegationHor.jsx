import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavegationHor = () => {

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
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