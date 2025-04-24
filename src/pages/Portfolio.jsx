import React from 'react';
import './Portfolio.css';

const projects = [
  { id: 1, name: 'Project One', description: 'Description of project one.', link: '#' },
  { id: 2, name: 'Project Two', description: 'Description of project two.', link: '#' },
  { id: 3, name: 'Project Three', description: 'Description of project three.', link: '#' },
];

const Portfolio = () => {
  return (
    <div className="portfolio section">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;