import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, BrowserRouter, useLocation, useNavigate } from 'react-router-dom';
import Features from './components/Features';
import Versions from './components/Versions';
import './App.css';

const NavigationTabs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const activeStyle = {
      padding: '10px 24px',
      background: '#16a34a',
      color: 'white',
      borderRadius: '8px',
      textDecoration: 'none',
      fontWeight: '600',
      boxShadow: '0 4px 6px -1px rgba(22, 163, 74, 0.5)'
  };
  const inactiveStyle = {
      padding: '10px 24px',
      background: 'white',
      color: '#64748b',
      borderRadius: '8px',
      textDecoration: 'none',
      fontWeight: '600',
      border: '1px solid #e2e8f0',
      transition: 'all 0.2s'
  };

  return (
    <nav style={{display: 'flex', gap: '15px', justifyContent: 'center', marginBottom: '30px'}}>
      <Link to="/versions" style={location.pathname === '/versions' || location.pathname === '/' ? activeStyle : inactiveStyle}>
        Versions
      </Link>
      <Link to="/features" style={location.pathname === '/features' ? activeStyle : inactiveStyle}>
        Features
      </Link>
    </nav>
  );
};

function App() {
  const isAngularShell = window.location.pathname.startsWith('/reactmfe');
  const basename = isAngularShell ? '/reactmfe' : '/';

  return (
    <div className="app-container">
      <div style={{width: '100%', padding: '20px'}}>
        <BrowserRouter basename={basename}>
          <NavigationTabs />
          <Routes>
            <Route path="/" element={<Versions />} />
            <Route path="/versions" element={<Versions />} />
            <Route path="/features" element={<Features />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
