// components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import '../CSS/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h2>About Me</h2>
        <p>
          Hello! I'm <strong>Ankit Raj</strong>, a curious and passionate Computer Science student at VIT Bhopal University.
          My journey in tech began with a fascination for how things work on the web, and it quickly turned into a mission to
          build meaningful, user-centric digital products.
          <br /><br />
          I specialize in building modern web applications with technologies like <strong>HTML5</strong>, <strong>CSS3</strong>,
          <strong> JavaScript</strong>, <strong>ReactJS</strong>, <strong>NodeJS</strong>, and <strong>MongoDB</strong>.
          I’ve also worked with ExpressJS, Git, and RESTful APIs to create full-stack applications that solve real-world problems.
          <br /><br />
          Whether it’s developing a sleek front-end UI or wiring up the back-end logic, I love turning complex problems into clean, efficient code.
          I have built e-commerce platforms, coding communities, music websites and more—each project teaching me something new and pushing me to think deeper.
          <br /><br />
          I believe that learning never stops. I constantly explore new frameworks, refine my understanding of design principles,
          and improve performance and accessibility. My ultimate goal? To create technology that inspires, empowers, and just works.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
