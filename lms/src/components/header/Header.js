import React from 'react';
import './Header.css'; 

class Header extends React.Component {
  state = {
    menuToggle: false,
  };

  render() {
    return (
      <div>
        {/* Your HTML code goes here */}
        <nav id="navbar" className="">
          <div className="nav-wrapper">
            {/* Navbar Logo */}
            <div className="logo">
              {/* Logo Placeholder for Illustration */}
              <a href="/">Library Management System</a>
            </div>

            {/* Navbar Links */}
            <ul id="menu">
              <li><a href="/">Home</a></li>
              <li><a href="/book">Services</a></li>
              <li><a href="/book">Favorite</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>
        </nav>

        {/* Menu Icon */}
        <div className="menuIcon">
          <span className="icon icon-bars"></span>
          <span className="icon icon-bars overlay"></span>
        </div>

        <div className="overlay-menu">
          <ul id="menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
