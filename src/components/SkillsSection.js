import React from "react";
import "../CSS/SkillsSection.css";
import {
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs,
  FaGitAlt, FaWordpress, FaBootstrap, FaTools,
} from "react-icons/fa";
import {
  SiTailwindcss, SiVercel, SiMysql, SiMongodb,
  SiReact, SiJquery, SiExpress, SiCplusplus, SiC,
  SiVisualstudiocode, SiGithubpages, SiPandas, SiNumpy,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Programming and Markup Languages",
    skills: [
      { name: "C++", icon: <SiCplusplus /> },
      { name: "C", icon: <SiC /> },
      { name: "Java", icon: <FaJava /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Python", icon: <FaPython /> },
    ],
  },
  {
    title: "Frameworks and Libraries",
    skills: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "jQuery", icon: <SiJquery /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Pandas", icon: <SiPandas /> },
    ],
  },
  {
    title: "Databases and Cloud Hosting",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "GitHub Pages", icon: <SiGithubpages /> },
      { name: "Vercel", icon: <SiVercel /> },
    ],
  },
  {
    title: "Software and Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "WordPress", icon: <FaWordpress /> },
      { name: "MATLAB", icon: <FaTools /> },
      { name: "VS Code", icon: <SiVisualstudiocode /> },
    ],
  },
];

const SkillsSection = () => {
  return (
    <div className="skills-section">
      <h1 className="section-title">My Skills</h1>
      {skillGroups.map((group, index) => (
        <div key={index}>
          <h2 className="group-title">{group.title}</h2>
          <div className="skills-container">
            {group.skills.map((skill, idx) => (
              <div className="skill-badge" key={idx}>
                <span className="icon">{skill.icon}</span>
                <span className="label">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
