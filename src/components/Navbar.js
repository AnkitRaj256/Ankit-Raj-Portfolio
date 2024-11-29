// components/Navbar.js
import React from 'react';
import '../CSS/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Ankit Raj</h1>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
