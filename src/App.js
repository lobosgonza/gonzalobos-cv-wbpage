import React from 'react';
import Navbar from './sections/Navbar'; // Importa la nueva Navbar
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import CaseStudies from './sections/CaseStudies';
import Experience from './sections/Experience';
import Studies from './sections/Studies'; // <-- 1. Importar
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

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
        <Skills />
        <Studies /> {/* <-- 2. Añadir aquí */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;