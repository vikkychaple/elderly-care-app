// App.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  // Navigate,
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import HealthTips from './components/HealthTips';
import SocialConnection from './components/SocialConnection';
import EmergencyButton from './components/EmergencyButton';
import MedicationManagement from './components/MedicationManagement';
import EntertainmentSection from './components/EntertainmentSection';
import Footer from './components/Footer';
// import Registration from './components/Registration';
// import Login from './components/Login';
// import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <Router>
      <div  style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.jpg)`,
          backgroundSize: 'cover',
          minHeight: '100vh', // Set to at least the height of the content
          display: 'flex',
          flexDirection: 'column',
        }}>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              Vikky's Elderly Care App
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dashboard">
                    Dashboard
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/health-tips">
                    Health Tips
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/social-connection">
                    Social Connection
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/emergency-button">
                    Emergency Button
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/medication-management">
                    Medication Management
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/entertainment-section">
                    Entertainment Section
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container mt-3">
          <Routes>
          
            
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/health-tips" element={<HealthTips />} />
            <Route path="/social-connection" element={<SocialConnection />} />
            <Route path="/emergency-button" element={<EmergencyButton />}/>
            <Route path="/medication-management" element={<MedicationManagement />}/>
            <Route path="/entertainment-section" element={<EntertainmentSection />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
       
      </div>
      <Footer style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            backgroundColor: '#333',
            color: '#fff',
            padding: '10px',
            textAlign: 'center',
          }} />
    </Router>
  );
}

export default App;
