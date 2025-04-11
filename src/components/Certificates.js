import React from "react";
import "../CSS/Certificates.css";
import C1 from "../Images/C1.png";
import C2 from "../Images/C2.png";
import C3 from "../Images/C3.png";
import C4 from "../Images/C4.png";
import C5 from "../Images/C5.png";
import C6 from "../Images/C6.png";
import C7 from "../Images/C7.png";
import C8 from "../Images/C8.png";
import C9 from "../Images/C9.png";
import C10 from "../Images/C10.png";
import C11 from "../Images/C11.png";

const certificates = [
  {
    id: 1,
    title: "Cloud Computing",
    image: C1,
    url: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs17/Course/NPTEL24CS17S45290056530403223.pdf",
  },
  {
    id: 2,
    title: "The Complete 2024 Web Development Bootcamp",
    image: C2,
    url: "https://www.udemy.com/certificate/UC-48d4b61b-5b0f-48aa-8925-049b6e0f2380/",
  },
  {
    id: 3,
    title: "AWS Cloud Practitioner Essentials",
    image: C3,
    url: "https://coursera.org/verify/LKQLRSADY2TC ",
  },
  {
    id: 4,
    title: "The Bits and Bytes of Computer Networking",
    image: C4,
    url: "https://www.coursera.org/verify/PSV5BNFWZYZY",
  },
  {
    id: 5,
    title: "Cyber Security Analyst",
    image: C11,
    url: "https://courses.ibmcep.cognitiveclass.ai/certificates/045285fabb0241849f04786374dbc002",
  },
  {
    id: 6,
    title: "Build a Full Website using Wordpress",
    image: C5,
    url: "https://coursera.org/verify/PUDRV4HY4M66",
  },
  {
    id: 7,
    title: "Elements of AI",
    image: C6,
    url: "https://certificates.mooc.fi/validate/eswnhux6yvk",
  },
  {
    id: 8,
    title: "Learning C",
    image: C7,
    url: "https://example.com/certificate3",
  },
  {
    id: 9,
    title: "Critical Thinking and Problem Solving",
    image: C8,
    url: "https://example.com/certificate3",
  },
  {
    id: 10,
    title: "Learning MATLAB",
    image: C9,
    url: "https://example.com/certificate3",
  },
  {
    id: 11,
    title: "MATLAB Onramp",
    image: C10,
    url: "https://example.com/certificate3",
  },

  // Add more certificates as needed
];

const Certificates = () => {
    const totalWidth = certificates.length * 220; // 200px width + 20px margin
    const duration = totalWidth / 100; // Adjust speed dynamically
    const sliderStyle = {
      "--scroll-duration": `${duration}s`, // Use CSS custom property
    };
  
    return (
      <div className="certificates-container">
      <h2>Certificates</h2>
        <div className="certificates-slider" style={sliderStyle}>
          {certificates.concat(certificates).map((certificate, index) => (
            <div
              className="certificate-card"
              key={index}
              onClick={() => window.open(certificate.url, "_blank")}
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="certificate-image"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Certificates;
