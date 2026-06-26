// src/components/CaseStudyCard.jsx

// 1. IMPORTA EL HOOK DE TRADUCCIÓN
import React from 'react';
import { useTranslation } from 'react-i18next';

const CaseStudyCard = ({ study }) => {
    // 2. INICIALIZA EL HOOK
    const { t } = useTranslation();

    return (
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300">
            {/* Título */}
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{study.title}</h3>

            {/* Etiquetas */}
            <div className="flex flex-wrap gap-2 mb-4">
                {study.tags.map((tag) => (
                    <span key={tag} className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>

            {/* Contenido del caso */}
            <div className="text-slate-600 dark:text-slate-400 text-sm space-y-4">
                <div>
                    {/* 3. REEMPLAZA "Problema" */}
                    <h4 className="font-semibold text-slate-700 dark:text-slate-300">{t('caseStudies.headings.problem')}:</h4>
                    <p>{study.problem}</p>
                </div>
                <div>
                    {/* 4. REEMPLAZA "Objetivo" */}
                    <h4 className="font-semibold text-slate-700 dark:text-slate-300">{t('caseStudies.headings.objective')}:</h4>
                    <p>{study.objective}</p>
                </div>
                <div>
                    {/* 5. REEMPLAZA "Acciones" */}
                    <h4 className="font-semibold text-slate-700 dark:text-slate-300">{t('caseStudies.headings.actions')}:</h4>
                    <ul className="list-disc list-inside space-y-1">
                        {study.actions.map((action, index) => (
                            <li key={index}>{action}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Resultados */}
            <div className="mt-auto pt-4">
                {/* 6. REEMPLAZA "Resultados Clave" */}
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">{t('caseStudies.headings.results')}:</h4>
                <ul className="list-disc list-inside space-y-1 text-blue-600 dark:text-blue-400 font-semibold">
                    {study.results.map((result, index) => (
                        <li key={index}><span>{result}</span></li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CaseStudyCard;