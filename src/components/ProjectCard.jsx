import React from 'react';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ project }) => {
	const { t } = useTranslation();

	return (
		<div className='bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full'>
			{/* Imagen de cabecera */}
			<img src={project.image} alt={`Mockup de la página web del proyecto ${project.title}`} className='w-full h-48 object-cover' />

			<div className='p-6 flex flex-col flex-grow'>
				{/* Metadata: Categoría y Sector superior */}
				<span className='text-xs font-bold uppercase tracking-wider text-primary dark:text-blue-400 mb-1'>
					{project.category} {project.sector && `• ${project.sector}`}
				</span>

				{/* Título Principal */}
				<h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>{project.title}</h3>

				{/* Etiquetas / Tags de tecnologías */}
				<div className='flex flex-wrap gap-2 mb-4'>
					{project.tags.map((tag) => (
						<span key={tag} className='bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded-full'>
							{tag}
						</span>
					))}
				</div>

				{/* Bloque de Información Estructurada (Igual a Casos de Estudio) */}
				<div className='text-slate-600 dark:text-slate-400 text-sm space-y-4 mb-6 flex-grow'>
					{/* Sección: Descripción */}
					<div>
						<h4 className='font-semibold text-slate-700 dark:text-slate-300'>{t('projects.headings.description', { defaultValue: 'Descripción' })}:</h4>
						{/* Renderizamos el HTML interno para procesar los tags <strong> */}
						<p dangerouslySetInnerHTML={{ __html: project.description }} />
					</div>

					{/* Sección: Resultados Clave (Solo si existen en el JSON) */}
					{project.results && project.results.length > 0 && (
						<div>
							<h4 className='font-semibold text-slate-700 dark:text-slate-300'>{t('caseStudies.headings.results')}:</h4>
							<ul className='list-disc list-inside space-y-1 text-blue-600 dark:text-blue-400 font-semibold'>
								{project.results.map((result, index) => (
									<li key={index}>
										<span className='text-slate-600 dark:text-slate-400 font-normal'>{result}</span>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>

				{/* Botones de acción inferiores alineados al fondo */}
				<div className='mt-auto pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-end gap-4'>
					{project.liveUrl &&
						(project.liveUrlText ? (
							<span className='text-sm font-semibold text-primary cursor-default'>{project.liveUrlText}</span>
						) : (
							<a href={project.liveUrl} target='_blank' rel='noopener noreferrer' className='text-sm font-semibold text-primary hover:underline'>
								{t('projects.liveButton')}
							</a>
						))}

					{project.repoUrl && (
						<a href={project.repoUrl} target='_blank' rel='noopener noreferrer' className='text-sm font-semibold text-slate-500 hover:underline'>
							{t('projects.repoButton')}
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
