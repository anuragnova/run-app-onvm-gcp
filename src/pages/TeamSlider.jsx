import React, { useState, useEffect } from 'react';
import './TeamSlider.css';

const teamMembers = [
  { name: 'Alice Johnson', role: 'Cloud Architect', image: 'https://images.unsplash.com/photo-1581094726787-a136735f018d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Bob Smith', role: 'Developer', image: 'https://images.unsplash.com/photo-1581094726787-a136735f018d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Catherine Lee', role: 'Data Scientist', image: 'https://images.unsplash.com/photo-1581094726787-a136735f018d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const TeamSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  return (
    <section id="team" className="team-slider-section section">
      <div className="slider-container">
        <button className="arrow left-arrow" onClick={goToPrevious}>
          &#8249; {/* Left arrow */}
        </button>
        <div className="slide">
          <div className="slide-content">
            <h3>{teamMembers[currentIndex].name}</h3>
            <p>{teamMembers[currentIndex].role}</p>
          </div>
          <img
            src={teamMembers[currentIndex].image}
            alt={teamMembers[currentIndex].name}
            className="slide-image"
          />
        </div>
        <button className="arrow right-arrow" onClick={goToNext}>
          &#8250; {/* Right arrow */}
        </button>
      </div>
    </section>
  );
};

export default TeamSlider;