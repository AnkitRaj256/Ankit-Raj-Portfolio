import React from "react";
import { motion } from "framer-motion";
import "../CSS/Projects.css";
import cart from "../Images/cart.png";
import cw from "../Images/cw.png";
import ih from "../Images/ih.png";
import cg from "../Images/cg.jpg";

const projects = [
  {
    id: 1,
    name: "Local Swift Market",
    description: "An E-commerce website for local vendors.",
    bgImage: cart,
    repo: "https://github.com/AnkitRaj256/Local_Swift_Market", // GitHub link
  },
  {
    id: 2,
    name: "Code Whispers",
    description: "A website for all your coding doubts.",
    bgImage: cw,
    repo: "https://github.com/AnkitRaj256/code-whispers",
  },
  {
    id: 3,
    name: "Instrumental Hub",
    description: "A creative project that keeps your inner musician happy.",
    bgImage: ih,
    repo: "https://github.com/AnkitRaj256/Instrumental_Hub",
  },
  {
    id: 4,
    name: "Code Galaxy",
    description: "A platform to ask, share, and solve all your coding doubts.",
    bgImage: cg,
    repo: "https://github.com/AnkitRaj256/Code-Galaxy",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            <div className="image-container">
              <img
                src={project.bgImage}
                alt={`${project.name} background`}
                className="project-image"
              />
            </div>

            {/* Project details section */}
            <div className="project-details">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>

            {/* Hover overlay that contains the clickable GitHub link */}
            <div className="overlay">
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="view-source"
              >
                View Source Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
