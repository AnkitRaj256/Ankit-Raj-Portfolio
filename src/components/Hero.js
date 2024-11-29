// components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import '../CSS/Hero.css';
import me from "../Images/me.jpg";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a passionate Developer & Designer</p>
      </motion.div>

      <motion.div
        className="hero-photo"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <img src={me} alt="Ankit Raj" />
      </motion.div>
    </section>
  );
};


export default Hero;
