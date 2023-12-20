// Footer.js

import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div>
      {/* Your provided HTML code goes here */}
      <footer>
        <div className="footer_container">
          <div className="logoFooter"><p>DRAGON NETWORK</p></div>
          <div className="social_media">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <p>Dragon Network © 2020 All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
