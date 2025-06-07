// src/components/CaseStudyCard.jsx

import React from 'react';

const CaseStudyCard = ({ study }) => {
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
                    <h4 className="font-semibold text-slate-700 dark:text-slate-300">Problema:</h4>
                    <p>{study.problem}</p>
                </div>
                <div>
                    <h4 className="font-semibold text-slate-700 dark:text-slate-300">Objetivo:</h4>
                    <p>{study.objective}</p>
                </div>
                <div>
                    <h4 className="font-semibold text-slate-700 dark:text-slate-300">Acciones:</h4>
                    <ul className="list-disc list-inside space-y-1">
                        {study.actions.map((action, index) => (
                            <li key={index}>{action}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Resultados */}
            <div className="mt-auto pt-4">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Resultados Clave:</h4>
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