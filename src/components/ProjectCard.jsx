// src/components/ProjectCard.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ project }) => {
	const { t } = useTranslation();

	return (
		/* bg-[#ffffff] evita que se active la regla global .bg-white:hover de index.css */
		<div className='bg-[#ffffff] rounded-none border border-stone-200 flex flex-col md:flex-row overflow-hidden text-left'>
			{/* IZQUIERDA (38% en desktop): Marco técnico que respeta el formato apaisado sin recortar */}
			{project.image && (
				<div className='w-full md:w-2/5 lg:w-[38%] bg-stone-100 flex-shrink-0 flex items-center justify-center p-4 md:p-5 border-b md:border-b-0 md:border-r border-stone-200'>
					<img
						src={project.image}
						alt={`${project.title} — ${project.category}`}
						width={1920}
						height={1080}
						loading='lazy'
						decoding='async'
						className='w-full h-auto max-h-64 md:max-h-none aspect-[16/10] object-contain border border-stone-200/80 bg-white'
					/>
				</div>
			)}
			{/* DERECHA (62% en desktop): Zona de texto amplia para distribución horizontal */}
			<div className='p-5 md:p-7 flex flex-col flex-grow justify-between md:w-3/5 lg:w-[62%]'>
				<div>
					{/* Cabecera compacta */}
					<div className='mb-3'>
						<span className='text-[10px] font-black uppercase tracking-widest text-primary mb-1 block'>
							{project.category} {project.sector && `— ${project.sector}`}
						</span>
						<h3 className='text-xl md:text-2xl font-black text-structural uppercase tracking-tighter leading-tight'>{project.title}</h3>
					</div>

					{/* Badges en línea horizontal */}
					{Array.isArray(project.tags) && project.tags.length > 0 && (
						<div className='flex flex-wrap gap-1.5 mb-4'>
							{project.tags.map((tag) => (
								<span key={tag} className='bg-stone-100 text-stone-700 font-bold px-2 py-0.5 text-[10px] uppercase tracking-wide rounded-none'>
									{tag}
								</span>
							))}
						</div>
					)}

					{/* Descripción distribuida a lo ancho */}
					<div className='text-stone-600 text-xs space-y-1.5 mb-4 leading-relaxed'>
						<h4 className='font-black text-stone-800 uppercase tracking-wider text-[10px]'>{t('projects.headings.description')}:</h4>
						<p dangerouslySetInnerHTML={{ __html: project.description }} />
					</div>

					{/* Resultados Clave (Siempre desplegados y compactos) */}
					{Array.isArray(project.results) && project.results.length > 0 && (
						<div className='bg-stone-50 border-l-4 border-primary px-4 py-3 mb-4'>
							<h4 className='font-black text-structural uppercase tracking-widest text-[10px] mb-1.5'>{t('caseStudies.headings.results')}:</h4>
							<ul className='space-y-1 text-xs text-stone-700 font-medium list-disc pl-4'>
								{project.results.map((result, index) => (
									<li key={index}>{result}</li>
								))}
							</ul>
						</div>
					)}
				</div>

				{/* Enlaces inferiores */}
				{(project.liveUrl || project.repoUrl) && (
					<div className='pt-3 border-t border-stone-200 flex justify-end gap-5 text-xs font-black uppercase tracking-wider'>
						{project.liveUrl && (
							<a href={project.liveUrl} target='_blank' rel='noopener noreferrer' className='text-teal-700 hover:text-teal-900 transition-colors'>
								{t('projects.liveButton')} →
							</a>
						)}
						{project.repoUrl && (
							<a href={project.repoUrl} target='_blank' rel='noopener noreferrer' className='text-stone-500 hover:text-stone-800 transition-colors'>
								{t('projects.repoButton')} →
							</a>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default ProjectCard;
