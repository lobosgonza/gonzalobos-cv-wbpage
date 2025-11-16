// src/sections/Navbar.js

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';
import ThemeSwitcher from '../components/ThemeSwitcher';

const navLinks = [
    { id: 'about', labelKey: 'navbar.about' },
    { id: 'projects', labelKey: 'navbar.projects' },
    { id: 'caseStudies', labelKey: 'navbar.caseStudies' },
    { id: 'experience', labelKey: 'navbar.experience' },
    { id: 'studies', labelKey: 'navbar.studies' }, // <-- Añadir aquí
    { id: 'skills', labelKey: 'navbar.skills' },
    { id: 'contact', labelKey: 'navbar.contact' },
];

function Navbar() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const handleScrollLink = (e, targetId) => {
        e.preventDefault();
        closeMenu();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* LOGO: Ahora siempre es azul en modo claro y blanco en modo oscuro */}
                <a href="#home" onClick={(e) => handleScrollLink(e, '#home')} className="text-2xl font-bold text-primary dark:text-white transition-colors duration-300">
                    Gonzalo Lobos
                </a>

                {/* LINKS: Ahora siempre son oscuros en modo claro y claros en modo oscuro */}
                <div className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={(e) => handleScrollLink(e, `#${link.id}`)}
                            className="text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-blue-400 transition-colors duration-300"
                        >
                            {t(link.labelKey)}
                        </a>
                    ))}
                </div>

                <div className="flex items-center space-x-2">
                    <ThemeSwitcher />
                    <div className="hidden md:block">
                        <LanguageSwitcher />
                    </div>
                    {/* Botón de Menú Móvil */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="z-50 relative text-slate-700 dark:text-slate-300">
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menú Móvil */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden absolute top-0 left-0 w-full bg-white dark:bg-slate-800 shadow-lg pt-20 pb-8"
                        initial={{ opacity: 0, y: "-50%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-50%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <ul className="flex flex-col items-center space-y-6">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <a href={`#${link.id}`} onClick={(e) => handleScrollLink(e, `#${link.id}`)} className="text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-blue-400 text-xl font-medium">
                                        {t(link.labelKey)}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <LanguageSwitcher />
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;