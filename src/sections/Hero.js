// src/sections/Hero.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/es/content.js';

// Pequeño componente para los iconos de los botones
const ButtonIcon = ({ children }) => <div className="w-5 h-5">{children}</div>;

const Hero = () => {
    const { hero } = content;

    // Variantes para animar el contenedor y sus hijos en secuencia
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2 // Cada hijo se animará con 0.2s de diferencia
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        // 1. Fondo con un gradiente sutil para darle profundidad
        <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background-light via-slate-50 to-slate-200 dark:from-background-dark dark:via-slate-950 dark:to-slate-900 transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-6 text-center">

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* 2. Título principal con efecto de texto en gradiente */}
                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-display text-text-dark dark:text-text-light pb-4"
                        variants={itemVariants}
                    >
                        {hero.name}
                    </motion.h1>

                    <motion.h2
                        className="mt-2 text-xl md:text-2xl font-semibold text-text-dark/80 dark:text-text-light/80"
                        variants={itemVariants}
                    >
                        {hero.title}
                    </motion.h2>

                    <motion.p
                        className="mt-4 text-base md:text-lg max-w-3xl mx-auto text-text-dark/70 dark:text-text-light/70"
                        variants={itemVariants}
                    >
                        {hero.subtitle}
                    </motion.p>

                    {/* 3. Botones con iconos para mayor claridad */}
                    <motion.div
                        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                        variants={itemVariants}
                    >
                        <a
                            href="#caseStudies"
                            className="flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-primary/30 transition-all duration-300 w-full sm:w-auto"
                        >
                            <ButtonIcon><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0A2.25 2.25 0 015.625 7.5h12.75c1.243 0 2.25.992 2.25 2.224v.002z" /></svg></ButtonIcon>
                            {hero.primaryButton}
                        </a>

                        <a
                            href="#contact"
                            className="flex items-center justify-center gap-2 bg-transparent border-2 border-text-dark/50 dark:border-text-light/50 text-text-dark dark:text-text-light hover:bg-text-dark hover:text-background-dark dark:hover:bg-text-light dark:hover:text-background-light font-bold py-3 px-8 rounded-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                        >
                            <ButtonIcon><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg></ButtonIcon>
                            {hero.secondaryButton}
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* 4. Indicador de Scroll Down para invitar a explorar */}
            <motion.a
                href="#about"
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                <motion.div
                    className="w-8 h-8 text-text-dark/50 dark:text-text-light/50"
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut"
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" /></svg>
                </motion.div>
            </motion.a>

        </section>
    );
};

export default Hero;