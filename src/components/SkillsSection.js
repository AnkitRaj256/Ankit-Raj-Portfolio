import React from "react";
import "../CSS/SkillsSection.css";

const skills = [
  // Frontend Skills
  { name: "HTML", level: "90%" },
  { name: "CSS", level: "85%" },
  { name: "JavaScript", level: "85%" },
  { name: "React.js", level: "80%" },
  { name: "Bootstrap", level: "80%" },
  { name: "jQuery", level: "70%" },

  // Backend Skills
  { name: "Node.js", level: "75%" },
  { name: "Express.js", level: "70%" },

  // Database Skills
  { name: "MySQL", level: "85%" },
  { name: "MongoDB", level: "80%" },

  // Programming Languages
  { name: "Python", level: "90%" },
  { name: "C", level: "85%" },
  { name: "C++", level: "80%" },
  { name: "Java", level: "75%" },

  // Tools and Platforms
  { name: "Git", level: "80%" },
  { name: "WordPress", level: "85%" },
  { name: "MATLAB", level: "70%" },

  // Soft Skills
  { name: "Critical Thinking", level: "90%" },
  { name: "Problem Solving", level: "85%" },
  { name: "Team Leadership", level: "80%" },
];


const SkillsSection = () => {
  return (
    <div className="skills-section">
      <h1 className="section-title">My Skills</h1>

      {/* Skills Cards */}
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h2>{skill.name}</h2>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: skill.level }}
                title={skill.level}
              ></div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default SkillsSection;
