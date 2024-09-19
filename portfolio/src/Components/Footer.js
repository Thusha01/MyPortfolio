import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import './Style/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="copyright">
        <p> Created by THUSHARAGA V. &copy; 2024 All rights reserved</p> {/* Added the copyright symbol */}
      </div>
      <div className="icons">
        <a href="https://github.com/thusharagav" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/vallipuranathan-thusharaga-4656a3247/" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaLinkedin />
        </a>
        <a href="https://web.facebook.com/vallipuranathan.thusha" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/vallipuranathanthusha/" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaInstagram />
        </a>
        
      </div>
    </div>
  );
}

export default Footer;
