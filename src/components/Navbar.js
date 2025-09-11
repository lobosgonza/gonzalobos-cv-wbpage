import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

const navLinks = [
    { id: 'about', labelKey: 'navbar.about' },
    { id: 'projects', labelKey: 'navbar.projects' },
    { id: 'caseStudies', labelKey: 'navbar.caseStudies' },
    { id: 'experience', labelKey: 'navbar.experience' },
    { id: 'skills', labelKey: 'navbar.skills' },
    { id: 'contact', labelKey: 'navbar.contact' },
];

function Navbar() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isScrolled = scrollPosition > 0;

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const menuVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, y: -50, transition: { duration: 0.2 } },
    };

    const listItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <nav className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo o Nombre */}
                <a href="#hero" className="text-2xl font-bold text-white transition-colors duration-300">
                    Gonzalo Lobos
                </a>

                {/* Navegación para pantallas grandes */}
                <ul className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <motion.li
                            key={link.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a
                                href={`#${link.id}`}
                                className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 text-lg transition-colors duration-300"
                            >
                                {t(link.labelKey)}
                            </a>
                        </motion.li>
                    ))}
                </ul>

                {/* Switchers y Botón de menú para móviles */}
                <div className="flex items-center space-x-4">
                    <LanguageSwitcher />
                    <ThemeSwitcher />
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-slate-700 dark:text-slate-300 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Menú móvil (oculto por defecto, visible al hacer clic) */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-800 shadow-lg pb-4"
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <ul className="flex flex-col items-center space-y-4 pt-4">
                                {navLinks.map((link, index) => (
                                    <motion.li
                                        key={link.id}
                                        variants={listItemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ delay: index * 0.1 }}
                                        onClick={closeMenu}
                                    >
                                        <a
                                            href={`#${link.id}`}
                                            className="text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-blue-400 text-xl font-medium transition-colors duration-300"
                                        >
                                            {t(link.labelKey)}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}

export default Navbar;