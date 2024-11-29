import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaPhoneAlt} from 'react-icons/fa'; // Importing icons from React Icons
import '../CSS/Contacts.css';
import email from "../Images/email.webp";
import leetCodeLogo from '../Images/leetCode-logo.webp';  // Adjust the path based on where you saved the image
import gfgLogo from '../Images/gfg-logo.png'; 
import Resumelogo from "../Images/Resumelogo.jpg";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contacts</h2>
      <p className="subheading">Reach out to me through the following channels:</p>

      <div className="contact-list">
        {/* Contact Number Link */}
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" size={30} />
          <a href="tel:+1234567890">(+91) 95*******1</a>
        </div>

        {/* Email Link */}
        <div className="contact-item">
          <img src= {email} alt="Email Icon" className="contact-icon"/>
          <a href="mailto:rajankit2564@gmail.com">rajankit2564@gmail.com</a>
        </div>

        {/* GitHub Link */}
        <div className="contact-item">
          <FaGithub className="contact-icon" size={30} />
          <a href="https://github.com/AnkitRaj256" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>

        {/* LinkedIn Link */}
        <div className="contact-item">
          <FaLinkedin className="contact-icon" size={30} />
          <a href="https://www.linkedin.com/in/ankit-raj-272943251" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>

        {/* Instagram Link */}
        <div className="contact-item">
          <FaInstagram className="contact-icon" size={30} />
          <a href="https://www.instagram.com/raj_ankit.25/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>

        {/* LeetCode Link */}
        <div className="contact-item">
          <img src={leetCodeLogo} alt="LeetCode Logo" className="platform-logo" />
          <a href="https://leetcode.com/u/rajankit2564/" target="_blank" rel="noopener noreferrer">LeetCode</a>
        </div>

        {/* GFG Profile Link */}
        <div className="contact-item">
          <img src={gfgLogo} alt="GeeksforGeeks Logo" className="platform-logo" />
          <a href="https://www.geeksforgeeks.org/user/rajankit256" target="_blank" rel="noopener noreferrer">GeeksforGeeks</a>
        </div>

        {/* Resume Link */}
        <div className="contact-item">
          <img src= {Resumelogo} alt="Resume Icon" className="contact-icon" />
          <a href="https://drive.google.com/file/d/1wQHHfoXGytkjXwCJV9DV2C8fzusLcmh1/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>

      </div>
      {/* Copyright Info */}
      <div className="footer">
          <p>&copy; 2024 Ankit Raj. All Rights Reserved.</p>
        </div>
    </section>
  );
};

export default Contact;
