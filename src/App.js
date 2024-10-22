'use client'; // Indica que este es un componente del cliente

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import 'bulma/css/bulma.css';
import './styles/styles.css';

import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from './i18n.js'; // Configuración de i18n


import Navbar from './components/Navbar.js'
import Footer from './components/Footer'
import Home from './sections/Home.js';
import About from './sections/About.js';
import Contact from './sections/Contact.js';
import Studies from './sections/Studies.js';
import Experience from './sections/Experience.js';
import Skills from './sections/Skills.js';



function App() {


  const { i18n } = useTranslation();

  // Cambiar el idioma dinámicamente según la ruta activa
  const updateHtmlLang = (lang) => {
    document.documentElement.lang = lang;
  };


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/en" />} />
        <Route path="/:lang" element={<LanguageWrapper onChangeLang={updateHtmlLang}><MainLayout /></LanguageWrapper>} />
        <Route path="/:lang/*" element={<LanguageWrapper onChangeLang={updateHtmlLang}><MainLayout /></LanguageWrapper>} />
      </Routes>
    </Router>
  );
}



// Wrapper para cambiar el idioma dinámicamente
const LanguageWrapper = ({ children }) => {
  const { lang } = useParams();

  // Cambiar idioma en i18n y en el atributo lang del HTML
  useEffect(() => {
    i18n.changeLanguage(lang); // Cambiar idioma en i18n
    document.documentElement.lang = lang; // Cambiar atributo lang en <html>
  }, [lang]);

  return children;
};







// Componente principal con animaciones y Footer
const MainLayout = () => {


  // Crear un estado para manejar el componente actual
  const [currentComponent, setCurrentComponent] = useState('Home');


  // Función que renderiza los componentes según el estado
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
        return <Home onBtnClick={setCurrentComponent} />;
    }
  };


  return (
    <div>
      {/* <Navbar onBtnClick={setCurrentComponent} /> */}
      <div className="container">
        <motion.div
          className="container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Home onBtnClick={setCurrentComponent} />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentComponent}
            className="container"
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

  )

}


export default App;