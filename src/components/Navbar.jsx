import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar section">
      <div className="navbar-left">
        <img
          src="https://storage.googleapis.com/sample-bucket-for-nova/profile-picture/nova.png"
          alt="Project Nova Logo"
          className="navbar-logo"
        />
        <h1>Project Nova</h1>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </button>
      <div className={`navbar-right ${isMenuOpen ? 'menu-open' : ''}`}>
        <a href="#about">About</a>
        <a href="#future-plans">Future Plans</a>
        <a href="#team">Meet our Team</a>
        <a href="#contact">Get in Touch</a>
      </div>
    </nav>
  );
};

export default Navbar;