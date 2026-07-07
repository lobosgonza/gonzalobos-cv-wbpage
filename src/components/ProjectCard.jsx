// src/components/ProjectCard.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ project }) => {
	const { t } = useTranslation();

	return (
		<div className='bg-white rounded-none shadow-sm flex flex-col h-full  transition-colors duration-300'>
			<img src={project.image} alt={project.title} className='w-full h-full  transition-all duration-500' />

			<div className='p-5 flex flex-col flex-grow'>
				<span className='text-[10px] font-black uppercase tracking-wide md:tracking-widest text-primary mb-1 block break-words w-full'>
					{project.category} {project.sector && `• ${project.sector}`}
				</span>
				<h3 className='text-xl font-black text-structural uppercase tracking-tighter leading-tight mb-3'>{project.title}</h3>

				{/* Badges de tecnología rígidos */}
				<div className='flex flex-wrap gap-1.5 mb-4'>
					{project.tags.map((tag) => (
						<span key={tag} className='bg-stone-100 text-stone-600 font-bold px-2 py-0.5 text-[10px] uppercase tracking-wide rounded-none'>
							{tag}
						</span>
					))}
				</div>

				<div className='text-stone-600 text-xs space-y-4 mb-6 flex-grow leading-relaxed'>
					<div>
						<h4 className='font-bold text-stone-700 uppercase tracking-wider text-[10px] mb-1'>{t('projects.headings.description')}:</h4>
						<p dangerouslySetInnerHTML={{ __html: project.description }} />
					</div>

					{project.results && project.results.length > 0 && (
						<div>
							<h4 className='font-bold text-stone-700 uppercase tracking-wider text-[10px] mb-1'>{t('caseStudies.headings.results')}:</h4>
							<ul className='space-y-1 border-l-2 border-teal-600/30 pl-2.5 text-stone-700 font-medium'>
								{project.results.map((result, index) => (
									<li key={index}>{result}</li>
								))}
							</ul>
						</div>
					)}
				</div>

				<div className='mt-auto pt-4 border-t border-stone-100 flex justify-end gap-4 text-xs font-bold uppercase tracking-wider'>
					{project.liveUrl && (
						<a href={project.liveUrl} target='_blank' rel='noopener noreferrer' className='text-teal-700 hover:text-teal-600 transition-colors'>
							{t('projects.liveButton')} →
						</a>
					)}
					{project.repoUrl && (
						<a href={project.repoUrl} target='_blank' rel='noopener noreferrer' className='text-stone-400 hover:text-stone-700 transition-colors'>
							{t('projects.repoButton')}
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
