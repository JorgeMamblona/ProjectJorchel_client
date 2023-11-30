import { Link } from 'react-router-dom'

import logo from './../../../assets/logo.png'

import { Container, Nav, Navbar } from 'react-bootstrap'
import './NavegationHor.css'

const NavegationHor = () => {

    return (
        <>
            <Navbar className='custom-nav-hor border-bottom border-light' data-bs-theme="dark">
                <Container>
                    <Link to={'/'} className='navbar-brand'>
                        <img src={logo} alt="" />
                    </Link>
                    <div className='d-flex'>
                        <Nav className="me-auto">
                            <Link to={'/log-in'} className='my-nav-link nav-link'>Login</Link>
                            <Link to={'/sign-up'} className=' my-nav-link nav-link'>Sign up</Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default NavegationHor