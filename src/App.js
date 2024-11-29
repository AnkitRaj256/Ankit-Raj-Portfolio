import React from 'react';
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
  return (
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
  );
};

export default App;
