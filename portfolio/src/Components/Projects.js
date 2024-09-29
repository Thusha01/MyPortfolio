import React, { useState, useEffect } from 'react';
import project1 from '../Assets/project1.png';
import project2 from '../Assets/project2.png';
import project3 from '../Assets/project3.jpg';
import { FaReact } from 'react-icons/fa';
import { SiMicrosoftsqlserver, SiDotnet, SiBootstrap, SiArduino } from 'react-icons/si';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import './Style/Projects.css';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // New state for hover detection

  const projects = [
    {
      img: project1,
      alt: 'Project Management System',
      title: 'PROXIMA - Project Management System',
      description: 'A comprehensive web application that efficiently manages users and projects within a company while providing seamless interaction with clients.',
      tech: [<SiDotnet title="ASP.NET" className="icon" />, <SiMicrosoftsqlserver title="MS SQL" className="icon" />, <FaReact title="React" className="icon" />],
      link: 'https://github.com/Thusha01?tab=repositories',
      tag: '2nd Year Group Project'
    },
    {
      img: project2,
      alt: 'Portfolio',
      title: 'This Portfolio Website',
      description: 'I built this website using React.js and Bootstrap.',
      tech: [<SiBootstrap title="Bootstrap" className="icon" />, <FaReact title="React" className="icon" />],
      link: 'https://github.com/Thusha01/MyPortfolio',
      tag: 'Frontend Development'
    },
    {
      img: project3,
      alt: 'Automatic Popcorn Maker',
      title: 'Customized Popcorn Maker',
      description: 'We developed a customized Arduino-based popcorn maker that reduces manpower, enhances product efficiency, and increases customer satisfaction.',
      tech: [<SiArduino title="Arduino" className="icon" />],
      link: 'https://github.com/your-profile/popcorn-maker',
      tag: '1st Year Hardware Project'
    }
  ];

  // Function to handle going to the next project
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  // Function to handle going to the previous project
  const handleBack = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  // Automatically change projects every 5 seconds if not hovered
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) { // Only change if not hovered
        handleNext();
      }
    }, 3000); // Change project every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [isHovered]); // Re-run effect if isHovered changes

  return (
    <div className="project">
      <h1>My Projects</h1>
      <div className="projectContent">
        <div
          className="pro"
          onMouseEnter={() => setIsHovered(true)} // Set isHovered to true when mouse enters
          onMouseLeave={() => setIsHovered(false)} // Set isHovered to false when mouse leaves
        >
          <img src={projects[currentIndex].img} alt={projects[currentIndex].alt} />
          <h5>{projects[currentIndex].tag}</h5>
          <h3>{projects[currentIndex].title}</h3>
          <p>{projects[currentIndex].description}</p>
          <div className="tech-icons">
            {projects[currentIndex].tech.map((icon, index) => (
              <span key={index}>{icon}</span>
            ))}
          </div>
          <a href={projects[currentIndex].link} className="github-btn" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      </div>
      <div className="navigation-icons">
        <FaArrowLeft className="nav-icon" onClick={handleBack} />
        <FaArrowRight className="nav-icon" onClick={handleNext} />
      </div>
    </div>
  );
}

export default Projects;
