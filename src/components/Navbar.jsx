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
          src="https://storage.googleapis.com/sample-bucket-for-nova/website-images/nova.png"
          alt="Project Nova Logo"
          className="navbar-logo"
        />
        <div className="navbar-title">
          <h1>NOVA</h1>
          <p>
            Igniting Transformation through{' '}
            <span className="google-colored">
              <span>G</span>
              <span>o</span>
              <span>o</span>
              <span>g</span>
              <span>l</span>
              <span>e</span>
            </span>{' '}
            Cloud
          </p>
        </div>
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