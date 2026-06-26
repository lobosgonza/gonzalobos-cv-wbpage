import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // <-- 1. Importar useTranslation

// Las variantes de animación siguen igual
const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const AnimatedSection = ({ children }) => {
    // 2. Obtener el idioma actual
    const { i18n } = useTranslation();
    // Usamos split('-') para asegurar que 'es-ES' se trate como 'es'
    const currentLang = i18n.language.split('-')[0];

    return (
        <motion.div
            // 3. Añadir el 'key' basado en el idioma
            // Cuando el idioma cambie (ej. de 'es' a 'en'), 
            // React destruirá el componente antiguo y creará uno nuevo,
            // lo que reiniciará el estado de la animación.
            key={currentLang}

            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;