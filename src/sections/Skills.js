// src/sections/Skills.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/es/content.js';
import SectionTitle from '../components/SectionTitle';
import SkillBadge from '../components/SkillBadge';

// Un pequeño componente de icono para los títulos de las columnas
const SkillColumnIcon = ({ children }) => (
    <div className="mx-auto mb-4 bg-primary/10 dark:bg-primary/20 text-primary w-12 h-12 rounded-full flex items-center justify-center">
        {children}
    </div>
);

function Skills() {
    const { skills } = content;
    // 1. AHORA EXTRAEMOS LAS NUEVAS CATEGORÍAS: strategy, technical, tools
    const { strategy, technical, tools } = skills.items;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    return (
        <section id="skills" className="py-16 sm:py-20 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-6">
                <SectionTitle title={skills.title} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

                    {/* Columna 1: Estrategia y Negocio */}
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md">
                        <SkillColumnIcon>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </SkillColumnIcon>
                        <h3 className="text-xl font-bold text-center text-text-dark dark:text-text-light mb-4">Estrategia y Negocio</h3>
                        <div className="space-y-4">
                            {/* 2. AHORA HACEMOS .map() SOBRE 'strategy' */}
                            {strategy.map(skill => (
                                <div key={skill.title}>
                                    <h4 className="font-semibold text-primary">{skill.title}</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">{skill.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Columna 2: Habilidades Técnicas */}
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md">
                        <SkillColumnIcon>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                        </SkillColumnIcon>
                        <h3 className="text-xl font-bold text-center text-text-dark dark:text-text-light mb-4">Habilidades Técnicas</h3>
                        <motion.div className="flex flex-wrap justify-center gap-2" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            {/* 3. AHORA HACEMOS .map() SOBRE 'technical' */}
                            {technical.map(skill => <SkillBadge key={skill} name={skill} />)}
                        </motion.div>
                    </div>

                    {/* Columna 3: Herramientas y Plataformas */}
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md">
                        <SkillColumnIcon>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17.375c-4.418 0-8-1.119-8-2.5.0-1.381 3.582-2.5 8-2.5 4.418 0 8 1.119 8 2.5.0 1.381-3.582 2.5-8 2.5zM9.75 12.125c-4.418 0-8-1.119-8-2.5.0-1.381 3.582-2.5 8-2.5 4.418 0 8 1.119 8 2.5.0 1.381-3.582 2.5-8 2.5zM9.75 6.875c-4.418 0-8-1.119-8-2.5C1.75 3.0, 5.332 1.881, 9.75 1.881c4.418 0 8 1.119 8 2.5.0 1.381-3.582 2.5-8 2.5z" /></svg>
                        </SkillColumnIcon>
                        <h3 className="text-xl font-bold text-center text-text-dark dark:text-text-light mb-4">Herramientas y Plataformas</h3>
                        <motion.div className="flex flex-wrap justify-center gap-2" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            {/* 4. AHORA HACEMOS .map() SOBRE 'tools' */}
                            {tools.map(skill => <SkillBadge key={skill} name={skill} />)}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;