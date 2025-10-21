// src/components/ProjectCard.jsx

import React from 'react';
// 1. IMPORTA EL HOOK DE TRADUCCIÓN
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ project }) => {
    // 2. INICIALIZA EL HOOK
    const { t } = useTranslation();

    return (
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            <img src={project.image} alt={`Mockup de la página web del proyecto ${project.title}`} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                        <span key={tag} className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-auto flex justify-end gap-4">

                    {/* --- INICIO DE LA LÓGICA DE HUMOR --- */}
                    {project.liveUrl && (
                        // Si 'liveUrlText' existe en el JSON, muestra el texto de humor (como <span>)
                        project.liveUrlText ? (
                            <span className="text-sm font-semibold text-primary cursor-default">
                                {project.liveUrlText}
                            </span>
                        ) : (
                            // Si no, muestra el link normal con el texto traducido
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline">
                                {t('projects.liveButton')}
                            </a>
                        )
                    )}
                    {/* --- FIN DE LA LÓGICA DE HUMOR --- */}

                    {project.repoUrl && (
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-500 hover:underline">
                            {/* Usa el texto traducido para "Ver Código" */}
                            {t('projects.repoButton')}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;