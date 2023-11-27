import NavegationHor from './NavegationHor/NavegationHor'
import Footer from './Footer/Footer'
import AppRoutes from '../routes/AppRoutes'
import NavegationVer from './NavegationVer/NavegationVer'
import 'bootstrap'

import { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/auth.context'

import './App.css'

function App() {

  const { loggedUser, authenticateUser } = useContext(AuthContext)

  useEffect(() => {
    authenticateUser()
  }, [])

  return (
    <>
      <div className={loggedUser ? 'app-flex' : 'app-block'}>

        {loggedUser ? <NavegationVer /> : <NavegationHor />}
        <AppRoutes />
        <Footer />

      </div>


    </>
  )
}

export default App
