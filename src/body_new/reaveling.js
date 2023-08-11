import React, { useState } from 'react';
import './men.css'; // Import your CSS file for styling

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false); // To control menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`menu-container ${isOpen ? 'open' : ''}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="toggle-bar"></span>
        <span className="toggle-bar"></span>
        <span className="toggle-bar"></span>
      </div>
      <nav className="menu">
        <ul className="menu-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Education</a></li>
          <li className="submenu">
            <a href="#">Tutorials</a>
            <ul className="submenu-list">
              <li><a href="#">Maths</a></li>
              <li><a href="#">React</a></li>
              <li><a href="#">Python</a></li>
              <li><a href="#">Shell</a></li>
              <li><a href="#">Linux</a></li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#">Videos</a>
            <ul className="submenu-list">
              <li><a href="#">React</a></li>
              <li><a href="#">Python</a></li>
              <li><a href="#">Bah</a></li>
              <li><a href="#">Emacs</a></li>
              <li><a href="#">C</a></li>
              <li><a href="#">Wordpress</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
