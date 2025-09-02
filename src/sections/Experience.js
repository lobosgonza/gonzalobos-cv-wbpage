// src/sections/Experience.jsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/es/content.js';
import SectionTitle from '../components/SectionTitle';
import PastExperienceItem from '../components/PastExperienceItem';

// La función de cálculo no cambia
function calculateExperience(startDate) {
    const start = new Date(startDate);
    // Usamos la fecha actual que me proporcionaste
    const today = new Date();
    let years = today.getFullYear() - start.getFullYear();
    let months = today.getMonth() - start.getMonth();
    if (months < 0) {
        years--;
        months += 12;
    }
    return { years, months };
}

function Experience() {
    const { experience } = content;
    const [calculatedExp, setCalculatedExp] = useState({ years: 0, months: 0 });

    useEffect(() => {
        // Ahora la fecha de inicio viene del archivo de contenido
        const { years, months } = calculateExperience(experience.startDate);
        setCalculatedExp({ years, months });
    }, [experience.startDate]);

    const sinceText = experience.since
        .replace('{{years}}', calculatedExp.years)
        .replace('{{months}}', calculatedExp.months);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };



    return (
        // Usamos los colores de fondo de nuestro tema
        <section id="experience" className="py-16 sm:py-20 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-6">
                <SectionTitle title={experience.sectionTitle} />

                {/* Sección de la Experiencia Actual (Nespresso) - Diseño Mejorado */}
                <div className="max-w-4xl mx-auto mb-16 p-8 bg-white dark:bg-slate-900 rounded-lg shadow-md">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <h3 className="text-2xl font-bold text-text-dark dark:text-text-light">{experience.company}</h3>
                            <p className="text-lg font-semibold text-primary mt-1">{experience.jobTitle}</p>
                            <p className="text-md text-slate-500 dark:text-slate-400 mt-2">{sinceText}</p>
                        </div>
                        <div className="md:col-span-2">
                            <p className="font-semibold text-text-dark dark:text-text-light mb-3">Responsabilidades Clave:</p>
                            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300">
                                {experience.responsibilities.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Línea divisoria y subtítulo para la experiencia previa */}
                <div className="relative text-center mb-12">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-slate-300 dark:border-slate-700"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-background-light dark:bg-background-dark px-4 text-lg font-medium text-slate-700 dark:text-slate-300">
                            {experience.pastExperienceTitle}
                        </span>
                    </div>
                </div>


                <motion.div
                    className="max-w-2xl mx-auto space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {experience.pastExperiences.map((exp) => (
                        // Esta es la línea correcta que debes tener
                        <PastExperienceItem key={exp.id} exp={exp} />
                    ))}
                </motion.div>
            </div >
        </section >
    );
}

export default Experience;