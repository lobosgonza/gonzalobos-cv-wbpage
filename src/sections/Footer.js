// src/sections/Footer.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/es/content.js';

function Footer() {
    const { footer } = content;

    // Función para hacer scroll suave hacia el tope de la página
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // ¡La clave para el scroll suave!
        });
    };

    return (
        <motion.footer
            className="bg-slate-900 dark:bg-background-dark text-slate-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-6 py-6">
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">

                    {/* Copyright */}
                    <p className="text-center sm:text-left text-sm">
                        © {new Date().getFullYear()} Gonzalo Lobos. {footer.rights}
                    </p>

                    {/* Botón "Volver al Inicio" */}
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-300"
                    >
                        {footer.button}
                        {/* Icono de flecha hacia arriba */}
                        <span className="transform group-hover:-translate-y-1 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                        </span>
                    </button>

                </div>
            </div>
        </motion.footer>
    );
}

export default Footer;