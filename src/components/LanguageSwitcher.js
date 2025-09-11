// src/components/LanguageSwitcher.js

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    // Se asegura de que 'es-ES' o 'en-US' se traten como 'es' o 'en'
    const currentLang = i18n.language.split('-')[0];

    const toggleLanguage = () => {
        const newLang = currentLang === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    return (
        <motion.button
            onClick={toggleLanguage}
            className="bg-primary/10 text-primary font-semibold py-2 px-4 rounded-lg text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {currentLang === 'es' ? 'English' : 'Español'}
        </motion.button>
    );
};

export default LanguageSwitcher;