'use client'; // Indica que este es un componente del cliente

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'; // Importar framer-motion
import 'bulma/css/bulma.css';
import './styles/styles.css';
import Navbar from './components/Navbar.js'
import Footer from './components/Footer'
import Home from './sections/Home.js';
import About from './sections/About.js';
import Contact from './sections/Contact.js';
import Studies from './sections/Studies.js';
import Experience from './sections/Experience.js';
import Skills from './sections/Skills.js';



function App() {

  // Crear un estado para manejar el componente actual
  const [currentComponent, setCurrentComponent] = useState('Home');

  // Definir una función para cambiar el componente
  const renderComponent = () => {
    switch (currentComponent) {
      case 'Home':
        return <About onBtnClick={setCurrentComponent} />;
      case 'About':
        return <About onBtnClick={setCurrentComponent} />;
      case 'Experience':
        return <Experience onBtnClick={setCurrentComponent} />;
      case 'Studies':
        return <Studies onBtnClick={setCurrentComponent} />;
      case 'Skills':
        return <Skills onBtnClick={setCurrentComponent} />;
      case 'Contact':
        return <Contact onBtnClick={setCurrentComponent} />;
      default:
        return <About onBtnClick={setCurrentComponent} />;
    }
  };



  return (
    <div>
      {/* Navbar recibe setCurrentComponent como prop */}
      {/* <Navbar onBtnClick={setCurrentComponent} /> */}
      <div className='container'>

        <motion.div
          className='container'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Home onBtnClick={setCurrentComponent} />
        </motion.div>
        {/* Contenedor con AnimatePresence para animaciones al desmontar */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentComponent} // Se asegura de que cada componente tenga una animación independiente
            className='container'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderComponent()}
          </motion.div>
        </AnimatePresence>
      </div>
      <Footer />

    </div>
  );
}

export default App;
