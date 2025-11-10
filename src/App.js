import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import CaseStudies from './sections/CaseStudies';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Studies from './sections/Studies'; // Asegúrate de que esté importado
import Contact from './sections/Contact';
import Footer from './sections/Footer';

// 1. Importa el nuevo componente wrapper
import AnimatedSection from './components/AnimatedSection';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <About />
        <Projects />
        <CaseStudies />
        <Experience />
        <Studies />
        <Skills />
        <Contact />

      </main>
      <Footer />
    </>
  );
}

export default App;