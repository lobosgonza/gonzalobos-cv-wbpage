// src/sections/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <motion.footer
            // --- ESTAS SON LAS CLASES CORREGIDAS ---
            className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800"
            // --- FIN DE LA CORRECCIÓN ---
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-6 py-6">
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                    <p className="text-center sm:text-left text-sm">
                        © {new Date().getFullYear()} Gonzalo Lobos. {t('footer.rights')}
                    </p>
                    <motion.button
                        onClick={scrollToTop}
                        // --- CLASES CORREGIDAS PARA EL TEXTO DEL BOTÓN ---
                        className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                        // --- FIN DE LA CORRECCIÓN ---
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        {t('footer.button')}
                        <motion.span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                        </motion.span>
                    </motion.button>
                </div>
            </div>
        </motion.footer>
    );
}

export default Footer;