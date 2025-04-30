import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section section">
      <div className="about-image-container">
        <img
          src="https://storage.googleapis.com/sample-bucket-for-nova/website-images/about_bg.jpg"
          alt="About Background"
          className="about-image"
        />
      </div>
      <div className="about-content">
        <h2>
          About Project <span style={{ fontWeight: 'bolder' }}>NOVA</span>
        </h2>
        <p>
          Project Nova: Igniting Transformation through Google Cloud is an initiative to explore and implement Google Cloud Platform (GCP) services.
          We aim to build innovative applications based on various architectures and models while learning and mastering GCP tools.
        </p>
      </div>
    </section>
  );
};

export default About;