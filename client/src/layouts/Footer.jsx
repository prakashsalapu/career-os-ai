import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaGraduationCap,
} from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">

          <div className="footer-brand">
            <div className="logo-wrapper">
              <FaGraduationCap className="logo-icon" />
              <h2>careerosn</h2>
            </div>

            <p>
              Empowering careers, inspiring futures.
              <br />
              Your journey to success starts here.
            </p>

            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>PRODUCTS</h3>
              <span className="footer-line"></span>

              <a href="/">Components</a>
              <a href="/">Templates</a>
              <a href="/">Icons</a>
              <a href="/">UI Kits</a>
            </div>

            <div className="footer-column">
              <h3>RESOURCES</h3>
              <span className="footer-line"></span>

              <a href="/">Blog</a>
              <a href="/">Guides</a>
              <a href="/">Help Center</a>
              <a href="/">Webinars</a>
              <a href="/">Events</a>
            </div>

            <div className="footer-column">
              <h3>COMPANY</h3>
              <span className="footer-line"></span>

              <a href="/">About Us</a>
              <a href="/">Our Mission</a>

              <div className="career-row">
                <a href="/">Careers</a>
                <span className="hiring-badge">WE'RE HIRING</span>
              </div>

              <a href="/">Privacy Policy</a>
              <a href="/">Contact Us</a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>© 2025 careerosn. All rights reserved.</p>

          <p>
            Made with <span className="heart">💜</span> for your success.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;