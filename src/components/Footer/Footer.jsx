import { useContext } from 'react'
import './Footer.css'
import { AuthContext } from '../../contexts/auth.context'

const Footer = () => {

    const { loggedUser } = useContext(AuthContext)
    return (
        <div className="footer">
            <p>Este es un proyecto de Jorchel :3</p>

            {loggedUser && <p>{loggedUser.username}</p>}
        </div>
    )
}

export default Footer