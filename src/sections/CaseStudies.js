// src/sections/CaseStudies.jsx

import React from 'react';
import { content } from '../data/es/content';
import CaseStudyCard from '../components/CaseStudyCard'; // Importamos la tarjeta

const CaseStudies = () => {
    const { caseStudies } = content;

    return (
        <section id="caseStudies" className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950">
            <div className="container mx-auto px-6">

                {/* Título de la Sección */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                        Casos de Estudio
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                        Una selección de mis logros y proyectos más recientes.
                    </p>
                </div>

                {/* Grid para las tarjetas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study) => (
                        <CaseStudyCard key={study.id} study={study} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CaseStudies;