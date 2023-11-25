import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './NavegationVer.css'
const NavegationVer = () => {
    return (
        <>

            <Nav className="bg-dark sidebar"

            >
                <div className="sidebar-sticky"></div>
                <Nav.Item>
                    <Link to={'#'} className='nav-link'>Sign up</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to={'#'} className='nav-link'>Sign up</Link>
                </Nav.Item>


            </Nav>

        </>
    )
}

export default NavegationVer