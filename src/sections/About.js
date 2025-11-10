import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import profileImage from '../assets/images/Gonzalo-lobos-Home-400x400.jpg';

import AnimatedSection from '../components/AnimatedSection'; // <-- 1. Importar aquí

function About() {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-16 sm:py-20 bg-background-light dark:bg-background-dark">
            <AnimatedSection>
                <div className="container mx-auto px-6">
                    <SectionTitle title={t('about.title')} />

                    {/* Este es el 'div' original, sin 'motion' */}
                    <div
                        className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12"
                    >
                        {/* Contenedor de la Imagen */}
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img
                                src={profileImage}
                                alt={t('about.imageAlt')}
                                className="rounded-lg shadow-lg w-full h-auto object-cover"
                            />
                        </div>
                        {/* Contenedor del Texto */}
                        <div className="w-full md:w-2/3">
                            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6" dangerouslySetInnerHTML={{ __html: t('about.introduction') }} />
                            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6" dangerouslySetInnerHTML={{ __html: t('about.skills') }} />
                            <p className="text-lg font-medium text-text-dark dark:text-text-light">{t('about.callToAction')}</p>
                        </div>
                    </div>
                </div></AnimatedSection>
        </section>
    );
}

export default About;