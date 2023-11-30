import { AuthContext } from '../../contexts/auth.context'

import NavegationHor from './NavegationHor/NavegationHor'
import NavegationVer from './NavegationVer/NavegationVer'

import { useContext } from 'react'

const Navegation = () => {

    const { loggedUser } = useContext(AuthContext)

    return loggedUser ? <NavegationVer /> : <NavegationHor />


}

export default Navegation