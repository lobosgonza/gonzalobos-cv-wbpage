// src/components/ProjectCard.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ project }) => {
	const { t } = useTranslation();

	// Estado local para controlar el despliegue de los resultados
	const [isHovered, setIsHovered] = useState(false);

	// 1. CONTROL DESKTOP: Solo activa el hover si el dispositivo usa un puntero preciso (Mouse)
	const handleMouseEnter = () => {
		if (window.matchMedia('(pointer: fine)').matches) {
			setIsHovered(true);
		}
	};

	const handleMouseLeave = () => {
		if (window.matchMedia('(pointer: fine)').matches) {
			setIsHovered(false);
		}
	};

	// 2. CONTROL MOBILE: Si es pantalla táctil, el toque conmuta el estado de forma limpia
	const handleButtonClick = (e) => {
		if (window.matchMedia('(pointer: coarse)').matches) {
			e.stopPropagation(); // Evita que el toque interfiera con los gestos del slider
			setIsHovered(!isHovered);
		}
	};

	return (
		<div
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className='group/project bg-white rounded-none shadow-sm flex flex-col h-full transition-colors duration-300'>
			<img src={project.image} alt={project.title} className='w-full h-full transition-all duration-500' />

			<div className='p-5 flex flex-col flex-grow '>
				<span className='text-[10px] font-black uppercase tracking-wide md:tracking-widest text-primary mb-1 block break-words w-full'>
					{project.category} {project.sector && `• ${project.sector}`}
				</span>
				<h3 className='text-xl font-black text-structural uppercase tracking-tighter leading-tight mb-3 transition-colors'>{project.title}</h3>

				{/* Badges de tecnología */}
				<div className='flex flex-wrap gap-1.5 mb-4'>
					{project.tags.map((tag) => (
						<span key={tag} className='bg-stone-100 text-stone-600 font-bold px-2 py-0.5 text-[10px] uppercase tracking-wide rounded-none transition-colors'>
							{tag}
						</span>
					))}
				</div>

				<div className='text-stone-600 text-xs space-y-4 mb-6 flex-grow leading-relaxed transition-colors'>
					<div>
						<h4 className='font-bold text-stone-700 uppercase tracking-wider text-[10px] mb-1 transition-colors'>{t('projects.headings.description')}:</h4>
						<p dangerouslySetInnerHTML={{ __html: project.description }} />
					</div>

					{/* SECCIÓN DE RESULTADOS CON SOPORTE HÍBRIDO */}
					{Array.isArray(project.results) && project.results.length > 0 && (
						<div className='pt-1'>
							{/* CAMBIO CLAVE: Transformamos el div en un <button> semántico accesible para mobile */}
							<button
								type='button'
								onClick={handleButtonClick}
								className='w-full flex items-center justify-between bg-stone-100 group-hover/project:bg-white/10 text-structural group-hover/project:text-white font-black py-2.5 px-4 text-[10px] uppercase tracking-widest transition-colors duration-200 rounded-none focus:outline-none'>
								<span>
									{t('caseStudies.headings.results')} {isHovered ? '▲' : '▼'}
								</span>
							</button>

							<AnimatePresence initial={false}>
								{isHovered && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{
											height: 'auto',
											opacity: 1,
											transition: { height: { duration: 0.25, ease: 'easeOut' }, opacity: { duration: 0.2 } },
										}}
										exit={{
											height: 0,
											opacity: 0,
											transition: { height: { duration: 0.2, ease: 'easeIn' }, opacity: { duration: 0.15 } },
										}}
										className='overflow-hidden group-hover/project:text-white transition-colors'>
										<ul className='space-y-1 border-l-2 border-teal-600/30 group-hover/project:border-white/30 pl-2.5 text-stone-700 group-hover/project:text-white/90 font-medium transition-colors text-left pt-3'>
											{project.results.map((result, index) => (
												<li key={index}>{result}</li>
											))}
										</ul>
									</motion.div>
								)}
							</AnimatePresence>
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
