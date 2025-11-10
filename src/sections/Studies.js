import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle'; // Importamos el título de sección
import PastExperienceItem from '../components/PastExperienceItem'; // Importamos el item de timeline
import AnimatedSection from '../components/AnimatedSection'; // <-- 1. Importar aquí

function Studies() {
    const { t } = useTranslation();
    const studies = t('studies.items', { returnObjects: true }) || [];

    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

    return (
        // 1. Usamos la misma etiqueta <section> y clases que Experience.js
        <section id="studies" className="py-16 sm:py-20 bg-background-light dark:bg-background-dark">
            <AnimatedSection>
                <div className="container mx-auto px-6">

                    {/* 2. Usamos el mismo componente SectionTitle */}
                    <SectionTitle title={t('studies.title')} />

                    {/* 3. Usamos el mismo wrapper de motion.div para centrar la timeline */}
                    <motion.div
                        className="max-w-2xl mx-auto space-y-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {Array.isArray(studies) && studies.map((study) => (
                            // 4. Pasamos la prop como 'exp' y usamos el título como key
                            <PastExperienceItem key={study.title} exp={study} />
                        ))}
                    </motion.div>
                </div>
            </AnimatedSection>
        </section>
    );
}

export default Studies;