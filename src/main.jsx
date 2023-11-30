import { AuthContextWrapper } from './contexts/auth.context'

import App from './components/App'

import ReactDOM from 'react-dom/client'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <AuthContextWrapper>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </AuthContextWrapper>

)
