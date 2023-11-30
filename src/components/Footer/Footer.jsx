import { AuthContext } from '../../contexts/auth.context'

import { useContext } from 'react'

import './Footer.css'

const Footer = () => {

    const { loggedUser } = useContext(AuthContext)

    return (
        <div className="footer">
            <p>Este es un proyecto de Jorchel :3</p>
        </div>
    )
}

export default Footer