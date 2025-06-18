import React from 'react';
import { FaGithub, FaLinkedin,} from 'react-icons/fa'; // Replaced FaPhoneAlt with FaMapMarkerAlt
import '../CSS/Contacts.css';
import email from "../Images/email.webp";
import leetCodeLogo from '../Images/leetCode-logo.webp';  
import gfgLogo from '../Images/gfg-logo.png'; 
import Resumelogo from "../Images/Resumelogo.jpg";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Let’s Connect</h2>
      <p className="subheading">Reach out to me through the following channels:</p>

      <div className="contact-list">
        {/* Email Link */}
        <div className="contact-item">
          <img src={email} alt="Email Icon" className="contact-icon" />
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
          <img src={Resumelogo} alt="Resume Icon" className="contact-icon" />
          <a href="https://drive.google.com/file/d/1HaEfmA-VKgPp9FiFE2Nc7UIJyQJD_a32/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>

      </div>

      {/* Footer */}
      <div className="footer">
        <p>&copy; 2025 Ankit Raj. All Rights Reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
