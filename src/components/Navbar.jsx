import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar section">
      <div className="navbar-left">
        <img src="src\components\NOVA-final.png" alt="Project Nova Logo" className="navbar-logo" />
        <h1>Project Nova</h1>
      </div>
      <div className="navbar-right">
        <a href="#about">About</a>
        <a href="#future-plans">Future Plans</a>
        <a href="#team">Meet our Team</a>
        <a href="#contact">Get in Touch</a>
      </div>
    </nav>
  );
};

export default Navbar;