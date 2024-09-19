import React, { useState, useEffect } from 'react';
import { FaRegHandPaper } from 'react-icons/fa'; // Importing the new bye icon
import './Style/About.css';

function About() {
  const roles = ["IT Undergraduate", "Full-Stack Developer", "Programmer"];
  const [currentRole, setCurrentRole] = useState(0);

  // Cycle through the roles every 3 seconds
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 3000); // 3 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(roleInterval);
  }, [roles.length]);

  return (
    <div className="introContent">
      <span className="hello">
        Hello <FaRegHandPaper className="byeIcon" />, {/* Applying class to change color */}
      </span><br />
      <span className="introtext">
        I'm <span className="introName">Thusharaga Vallipuranathan</span> <br />
        <span className="role">{roles[currentRole]}</span>
      </span>
      <p className="introPara"> 
        I am an IT enthusiast driven by a passion for technology and innovation, 
        constantly exploring new horizons in software development to create impactful solutions.
      </p>
    </div>
  );
}

export default About;
