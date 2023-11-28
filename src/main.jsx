import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthContextWrapper } from './contexts/auth.context';
import { ProjectsNavContextWrapper } from './contexts/projectsNav.context';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextWrapper>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </AuthContextWrapper>

)
