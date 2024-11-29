// components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import '../CSS/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h2>About Me</h2>
        <p>I am currently a Computer Science and Engineering student at VIT Bhopal University and a passionate developer with hands-on experience in building modern, user-friendly websites and applications. Proficient in front-end and back-end technologies like JavaScript, ReactJS, NodeJS, and MongoDB, I focus on delivering seamless and efficient solutions. As a tech enthusiast and problem-solver, I enjoy transforming ideas into functional digital experiences while constantly learning and improving my craft.</p>
      </motion.div>
    </section>
  );
};

export default About;
