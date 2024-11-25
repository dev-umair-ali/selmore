import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa";
import mainlogo from "../images/new logo selmore 2 1.png";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <footer className="footer-container-selmore">
      <div className="footer-content-selmore">
        <div className="footer-logo-selmore">
          <img src={mainlogo} alt="Selmore Logo" />
        </div>

        <div className="footer-links-selmore">
          <h4 className="footer-heading-selmore">Navigate with Ease</h4>
          <ul className="footer-list-selmore">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-contact-selmore">
          <h4 className="footer-heading-selmore">CONTACT US</h4>
          <ul className="footer-list-selmore">
            <li>
              <MdEmail className="contact-icon" /> info@selmore.com
            </li>
            <li>
              <MdPhone className="contact-icon" /> +92 (234) 567-890
            </li>
            <li>
              <MdLocationOn className="contact-icon" />
              Sunset Tower, Phase-2,
              DHA, Karachi
            </li>
          </ul>
        </div>

        <div className="footer-subscribe-selmore">
          <h4 className="footer-heading-selmore">Get in Touch</h4>
          <div className="subscribe-input-selmore">
            <span className="email-icon-selmore">
              <MdEmail />
            </span>
            <input type="email" placeholder="Email" />
            <button>
              <FaLocationArrow />
            </button>
          </div>
          <div className="social-icons-selmore">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>
      <div className="footer-copyright-selmore">
        © {new Date().getFullYear()} Selmore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
