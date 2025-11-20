import React from "react";
import "../CSS/Footer.css"; // Create this CSS file

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding */}
        <div className="footer-section">
          <h3 className="footer-logo">EduPulse</h3>
          <p className="footer-description">
            Smart Learning for Engineers. Explore. Learn. Grow with us.
          </p>
        </div>

        {/* Useful Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@edupulse.com</p>
          <p>Phone: +91-9876543210</p>
          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 EduPulse. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
