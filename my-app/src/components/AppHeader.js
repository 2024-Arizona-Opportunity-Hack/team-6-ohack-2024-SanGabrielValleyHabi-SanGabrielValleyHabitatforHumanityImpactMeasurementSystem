import React from 'react';
import './AppHeader.css';
import logo from '../assets/logo.png'; // Ensure this path is correct

const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="logo-container">
        {/* Logo Placeholder */}
        <img src={logo} alt="San Gabriel Volunteer Surveys Logo" className="logo-image" />
      </div>
      <h1>San Gabriel Volunteer Surveys</h1>
    </header>
  );
};

export default AppHeader;
