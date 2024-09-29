import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';  // Importing icons
import './Style/NavBar.css';

function NavBar() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
    setLastScrollY(window.scrollY);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle hamburger menu
  };

  // Close menu if clicked outside (optional)
  const handleClickOutside = (event) => {
    if (menuOpen && !event.target.closest('.menuItems') && !event.target.closest('.hamburger')) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [lastScrollY, menuOpen]);

  return (
    <div className={`navContainer ${showNav ? 'visible' : 'hidden'}`}>
      <div className="hamburger" onClick={toggleMenu}>
        {/* If menu is open, show close icon, else show hamburger icon */}
        {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      <div className={`menuItems ${menuOpen ? 'open' : ''}`}>
        <Link className="navItem" to="home" smooth={true} onClick={toggleMenu}>Home</Link>
        {/* <Link className="navItem" to="about" smooth={true} onClick={toggleMenu}>ABOUT</Link> */}
        <Link className="navItem" to="education" smooth={true} onClick={toggleMenu}>EDUCATION</Link>
        <Link className="navItem" to="projects" smooth={true} onClick={toggleMenu}>PROJECTS</Link>
        <Link className="navItem" to="contact" smooth={true} onClick={toggleMenu}>CONTACT</Link>
      </div>
    </div>
  );
}

export default NavBar;
