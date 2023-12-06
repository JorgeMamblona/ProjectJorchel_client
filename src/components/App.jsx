import { AuthContext } from '../contexts/auth.context'

import Navegation from './Navegation/Navegation'
import AppRoutes from '../routes/AppRoutes'
import Background from './Background/background'

import { useContext } from 'react'

import 'bootstrap'
import './App.css'


function App() {

  const { loggedUser } = useContext(AuthContext)

  return (
    <div className={loggedUser ? 'app-flex' : 'app-block'}>
      <Navegation />
      <AppRoutes />
    </div>
  )
}

export default App
