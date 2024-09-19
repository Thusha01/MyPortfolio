import React from 'react';
import {Link} from 'react-scroll';
import './Style/NavBar.css'

function NavBar() {
  return (
    <div className="desktopMenu">
        <Link className="desktopMenuItem">ABOUT</Link>
        <Link className="desktopMenuItem">EDUCATION</Link>
        <Link className="desktopMenuItem">PROJECTS</Link>
        <Link className="desktopMenuItem">CONTACT</Link>
    </div>
  )
}

export default NavBar