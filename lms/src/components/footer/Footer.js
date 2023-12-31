import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer_container">
          <div className="logoFooter"><p>Library Management System</p></div>
          <div className="social_media">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <p>Library Management System © 2020 All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
