import React, { useState, useEffect } from 'react';
import './CSS/Background.css';
import './CSS/Theme.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ContactForm from './components/ContactMeForm';

const App = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollBtn(window.pageYOffset > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="animated-bg">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
        <div className="blob blob4"></div>
      </div>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <EducationSection />
        <SkillsSection />
        <Certificates />
        <ContactForm />
        <Contact />
      </div>

      {showScrollBtn && (
        <button id="scrollTopBtn" title="Go to top" onClick={scrollToTop}>⬆</button>
      )}
    </>
  );
};

export default App;
