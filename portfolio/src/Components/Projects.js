import React from 'react'
import project1 from '../Assets/project1.png'
import project2 from '../Assets/project2.png'
import project3 from '../Assets/project3.jpg'
import { FaReact } from 'react-icons/fa'; // React icon
import { SiMicrosoftsqlserver, SiDotnet, SiBootstrap, SiArduino } from 'react-icons/si'; // Icons
import './Style/Projects.css'

function Projects() {
  return (
    <div className="project">
      <h1>My projects</h1>
      <div className="projectContent">
        <div className="pro">
          <img src={project1} alt="Project Management System" />
          <h5>2nd Year Group Project</h5>
          <h3>PROXIMA - Project Management System</h3>
          <p>A comprehensive web application that efficiently manages users and projects within a company while providing seamless interaction with clients.</p>
          <div className="tech-icons">
            <SiDotnet title="ASP.NET" className="icon" />
            <SiMicrosoftsqlserver title="MS SQL" className="icon" />
            <FaReact title="React" className="icon" />
          </div>
          <a href="https://github.com/Thusha01?tab=repositories" className="github-btn" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>

        <div className="pro">
          <img src={project2} alt="Portfolio" />
          <h5>Frontend Development</h5>
          <h3>This Portfolio Website</h3>
          <p>I built this website using React.js and Bootstrap.</p>
          <div className="tech-icons">
            <SiBootstrap title="Bootstrap" className="icon" />
            <FaReact title="React" className="icon" />
          </div>
          <a href="https://github.com/Thusha01/MyPortfolio" className="github-btn" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>

        <div className="pro">
          <img src={project3} alt="Automatic Popcorn Maker" />
          <h5>1st Year Hardware Project</h5>
          <h3>Customized Popcorn Maker</h3>
          <p>We developed a customized Arduino-based popcorn maker that reduces manpower, enhances product efficiency, and increases customer satisfaction.</p>
          <div className="tech-icons">
            <SiArduino title="Arduino" className="icon" />
          </div>
          <a href="https://github.com/your-profile/popcorn-maker" className="github-btn" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
