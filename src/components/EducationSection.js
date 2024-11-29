import React, { useState } from "react";
import "../CSS/EducationSection.css";
import TenthMarksheet from "../Images/10thMarksheet.jpg";
import TweMarksheet from "../Images/12thMarksheet.jpg";
import trans from "../Images/SGH.jpeg";

const educationDetails = [
  {
    title: "10th Board",
    institute: "Infant Jesus Academy",
    marks: "90%",
    year: "2020",
    marksheet: TenthMarksheet,
  },
  {
    title: "12th Board",
    institute: "Shivam International School",
    marks: "77%",
    year: "2022",
    marksheet: TweMarksheet,
  },
  {
    title: "Undergraduate",
    institute: "VIT Bhopal University",
    marks: "8.5 CGPA",
    year: "2022-Ongoing",
    marksheet: trans,
  },
];

const EducationSection = () => {
  const [modalData, setModalData] = useState(null);

  const openModal = (marksheet) => {
    setModalData(marksheet);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className="education-section">
      <h1 className="section-title">Education</h1>
      <div className="education-cards">
        {educationDetails.map((edu, index) => (
          <div key={index} className="card">
            <div className="card-front">
              <h2>{edu.title}</h2>
              <p>{edu.institute}</p>
            </div>
            <div className="card-back">
              <p>Marks: {edu.marks}</p>
              <p>Year: {edu.year}</p>
              <button onClick={() => openModal(edu.marksheet)}>View Marksheet</button>
            </div>
          </div>
        ))}
      </div>

      {modalData && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <img src={modalData} alt="Marksheet" />
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationSection;
