import React, { useState, useEffect } from 'react';
import './TeamSlider.css';

const teamMembers = [
  { name: 'Himanshu Tiwary', role: 'Cloud Network Engineer', image: "https://storage.googleapis.com/sample-bucket-for-nova/profile-picture/himanshu.jpg", 
    description : `Himanshu architects and deploys the essential networking foundation in the cloud, ensuring seamless connectivity for all services. 
    He establishes secure network pathways and implements controls to protect cloud resources. His work guarantees high availability and optimal performance of the cloud environment. 
    By automating network configurations, he streamlines deployments and reduces manual effort. Ultimately, Himanshu contributes a stable, secure, and efficient network infrastructure for the organization's cloud presence.` },
  {name: 'Lavanya Lanka', role: 'Cloud Database Engineer', image: 'https://storage.googleapis.com/sample-bucket-for-nova/profile-picture/lavanya.jpg',
    description : `Lavanya designs and manages the critical data storage and retrieval systems in the cloud, ensuring data integrity and accessibility. 
    She selects and optimizes database technologies to meet application needs and performance goals. Her focus on security and high availability safeguards valuable data assets.
     Through performance tuning and efficient database management, she enables applications to operate smoothly and reliably. Lavanya contributes a robust and performant data layer that powers cloud applications.`
   },
  { name: 'Anurag Kumar', role: 'Cloud DevOps Engineer', image: 'https://storage.googleapis.com/sample-bucket-for-nova/profile-picture/anurag.jpg',
    description : `Anurag automates and streamlines the software delivery process in the cloud, from development to deployment. 
    He builds and maintains CI/CD pipelines for rapid and reliable application releases. By implementing Infrastructure-as-Code,
     he ensures consistent and scalable cloud environments. His work in monitoring and automation enhances system stability and operational efficiency. 
     Anurag contributes to faster delivery cycles, improved reliability, and efficient cloud operations.`
   },
  { name: 'Dhiraj Kumar Prince', role: 'Cloud Storage Engineer', image: '',
    description : `Dhiraj architects and manages the cloud storage infrastructure, ensuring data is securely stored, 
    highly available, and cost-effectively managed. He implements data protection strategies, including backups and disaster recovery. 
    His expertise in selecting and configuring storage services optimizes performance and scalability for various data needs. 
    By managing data lifecycles and implementing automation, he contributes to efficient and reliable data storage solutions in the cloud.`
   },
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
            <span>{teamMembers[currentIndex].description}</span>
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