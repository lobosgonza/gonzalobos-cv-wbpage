import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import CaseStudies from './sections/CaseStudies';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
// Si tuvieras un Navbar y Footer como componentes separados, también irían aquí.

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <main>
        <Hero />
        <About />
        <CaseStudies />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;