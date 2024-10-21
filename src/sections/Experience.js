import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Importar framer-motion
import { useTranslation } from 'react-i18next'; // Importar react-i18next

import Card from '../components/Card';
import ActivityItem from '../components/ActivityItem';

// Función para calcular la experiencia laboral
function calculateExperience(startDate) {
    const start = new Date(startDate);
    const today = new Date();

    let years = today.getFullYear() - start.getFullYear();
    let months = today.getMonth() - start.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months };
}

function ExperienceSection() {
    const { t } = useTranslation(); // Hook para usar traducciones
    const [experience, setExperience] = useState({ years: 0, months: 0 });

    useEffect(() => {
        const { years, months } = calculateExperience('2021-12-01'); // Fecha de inicio en Nestlé
        setExperience({ years, months });
    }, []);

    return (
        <motion.div
            className="experience-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <h4 className="subtitle">{t('experience.jobTitle')}</h4>
            <p>
                <strong>Nestlé Nespresso SA</strong> · {t('experience.fullTime')}
            </p>
            <p>
                {t('experience.since', {
                    years: experience.years,
                    months: experience.months,
                })}
            </p>
            <p>Santiago, Región Metropolitana de Santiago, Chile · Híbrido</p>
            <ul>
                {t('experience.responsibilities', { returnObjects: true }).map(
                    (item, index) => (
                        <li key={index}>{item}</li>
                    )
                )}
            </ul>
        </motion.div>
    );
}

function Experience() {
    const { t } = useTranslation(); // Hook para traducciones
    const experiences = t('experience.pastExperiences', { returnObjects: true });

    return (
        <>
            <Card id="experiencia" title={t('experience.sectionTitle')}>
                <div className="content">
                    <ExperienceSection />
                    {experiences.map((exp, index) => (
                        <ActivityItem
                            key={index}
                            title={exp.title}
                            place={exp.place}
                            type={exp.type}
                            duration={exp.duration}
                            location={exp.location}
                            responsibilities={exp.responsibilities}
                        />
                    ))}
                </div>
            </Card>
        </>
    );
}

export default Experience;
