import NavegationHor from './NavegationHor/NavegationHor'
import Footer from './Footer/Footer'
import AppRoutes from '../routes/AppRoutes'
import NavegationVer from './NavegationVer/NavegationVer'


import './App.css'

function App() {


  return (
    <>
      <div className='App'>

        <NavegationHor />
        <AppRoutes />
        <Footer />

      </div>


    </>
  )
}

export default App
