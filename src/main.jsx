import { AuthContextWrapper } from './contexts/auth.context'

import App from './components/App'

import ReactDOM from 'react-dom/client'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import { ProjectsContextWrapper } from './contexts/projects.context'

ReactDOM.createRoot(document.getElementById('root')).render(

  <AuthContextWrapper>
    <ProjectsContextWrapper>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </ProjectsContextWrapper>
  </AuthContextWrapper>

)
