import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar section">
      <div className="navbar-left">
        <h1>Project Nova</h1>
      </div>
      <div className="navbar-right">
        <a href="#about">Home</a>
        <a href="#architecture">Architecture</a>
        <a href="#recent-works">Recent Works</a>
        <a href="#contact">Get in Touch</a>
      </div>
    </nav>
  );
};

export default Navbar;