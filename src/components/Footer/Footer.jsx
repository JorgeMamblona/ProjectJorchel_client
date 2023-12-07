import { AuthContext } from '../../contexts/auth.context'

import { useContext } from 'react'

import './Footer.css'

const Footer = () => {

    const { loggedUser } = useContext(AuthContext)

    return (
        <div className="footer">
            <p>Our last project yay :3</p>
        </div>
    )
}

export default Footer