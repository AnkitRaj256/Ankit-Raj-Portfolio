import React, { useState } from "react";
import "../CSS/Projects.css";
import cart from "../Images/cart.png";
import cw from "../Images/cw.png";
import ih from "../Images/ih.png";
import cg from "../Images/cg.jpg";
import rr from "../Images/rr.png";
import SC from "../Images/SC.png";
import LNS from "../Images/LNS.png";
import WA from "../Images/WA.png";

const projects = [
  {
    id: 1,
    name: "Local Swift Market",
    description: "An E-commerce website for local vendors.",
    category: "Web Development",
    bgImage: cart,
    repo: "https://github.com/AnkitRaj256/Local_Swift_Market",
  },
  {
    id: 2,
    name: "Code Whispers",
    description: "A website for all your coding doubts.",
    category: "Web Development",
    bgImage: cw,
    repo: "https://github.com/AnkitRaj256/code-whispers",
  },
  {
    id: 3,
    name: "Instrumental Hub",
    description: "A creative project that keeps your inner musician happy.",
    category: "Minimal Applications",
    bgImage: ih,
    repo: "https://github.com/AnkitRaj256/Instrumental_Hub",
  },
  {
    id: 4,
    name: "Code Galaxy",
    description: "A platform to ask, share, and solve all your coding doubts.",
    category: "Web Development",
    bgImage: cg,
    repo: "https://github.com/AnkitRaj256/Code-Galaxy",
  },
  {
    id: 5,
    name: "RestoReserve",
    description: "A smart platform to book, manage, and enjoy seamless restaurant reservations.",
    category: "Web Development",
    bgImage: rr,
    repo: "https://github.com/AnkitRaj256/Restaurant-Reservation-System",
  },
  {
    id: 6,
    name: "Sales Chatbot",
    description: "A platform to engage, convert, and grow your sales conversations.",
    category: "Python Development",
    bgImage: SC,
    repo: "https://github.com/AnkitRaj256/Sales-Chatbot",
  },
  {
    id: 7,
    name: "LAN Network Scanner",
    description: "Scan connected devices, discover open ports, and identify operating systems on your LAN.",
    category: "Python Development",
    bgImage: LNS,
    repo: "https://github.com/AnkitRaj256/Network-Scanner",
  },
  {
    id: 8,
    name: "Weather App",
    description: "Check real-time weather, forecasts, and conditions instantly.",
    category: "Minimal Applications",
    bgImage: WA,
    repo: "https://github.com/AnkitRaj256/Weather-App",
  },

];

const categories = ["All", "Web Development", "Minimal Applications", "Python Development"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-tab ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="image-container">
              <img src={project.bgImage} alt={project.name} className="project-image" />
            </div>

            <div className="project-details">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>

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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
