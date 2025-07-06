import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h3>PMSSS</h3>
          <p>Empowering students with opportunities for a brighter future.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#vision">About Us</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Info</h4>
          <p>Email: support@pmsss.com</p>
          <p>Phone: +91 123-456-7890</p>
          <p>Address: AICTE Building, New Delhi, India</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 PMSSS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
