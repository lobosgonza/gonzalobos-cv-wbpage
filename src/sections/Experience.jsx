// src/sections/Experience.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import AnimatedSection from '../components/AnimatedSection';
import CardSlider from '../components/CardSlider'; // Swiper/Slider móvil integrado

function calculateExperience(startDate) {
	const start = new Date(startDate);
	const today = new Date();
	let years = today.getFullYear() - start.getFullYear();
	let months = today.getMonth() - start.getMonth();
	if (months < 0) {
		years--;
		months += 12;
	}
	return { years, months };
}

// Fila de Renderizado reutilizable (Desktop y Mobile)
const ExperienceCard = ({ exp }) => {
	const { t, i18n } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const isEn = i18n.language === 'en';

	return (
		/* AÑADIDO: Si es la experiencia actual (isCurrent), le damos un borde izquierdo Jade más grueso para destacarla */
		<motion.div
			className={`group relative bg-white p-6 mb-4 transition-all duration-300 hover:bg-[#0d9488] hover:text-white text-left ${
				exp.isCurrent ? 'border-l-4 border-[#0d9488] hover:border-white' : ''
			}`}
			variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}>
			{/* Indicador geométrico de línea de tiempo */}
			<div className='absolute -left-[8px] top-7 h-4 w-4 bg-primary group-hover:bg-white transition-colors transform rotate-45 z-10'></div>

			{/* TAG DE RELEVANCIA: Destaca visualmente tu rol actual en Expansis Pro */}
			{exp.isCurrent && (
				<span className='absolute right-6 top-6 bg-teal-600 text-white text-[9px] font-black px-2 py-0.5 uppercase tracking-widest rounded-none group-hover:bg-white group-hover:text-teal-800 transition-colors'>
					{isEn ? 'Current' : 'Actual'}
				</span>
			)}

			<h4 className='text-lg font-black text-structural group-hover:text-white transition-colors uppercase tracking-tight pr-12'>{exp.title}</h4>
			<p className='text-xs font-black text-primary group-hover:text-white/90 transition-colors uppercase tracking-wider mt-0.5'>{exp.place}</p>
			<p className='text-[10px] font-bold text-stone-400 group-hover:text-white/70 transition-colors uppercase tracking-widest mt-1 mb-3'>{exp.duration}</p>

			<ul className='space-y-1.5 text-xs font-medium uppercase tracking-wide text-structural/80 group-hover:text-white transition-colors leading-relaxed list-none mb-3'>
				{exp.responsibilities &&
					exp.responsibilities.map((resp, index) => (
						<li key={index} className="before:content-['■'] before:text-primary group-hover:before:text-white before:mr-2 transition-colors">
							{resp}
						</li>
					))}
			</ul>

			{exp.detailedTasks && exp.detailedTasks.length > 0 && (
				<>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className='text-[10px] font-black uppercase tracking-widest text-primary group-hover:text-white flex items-center gap-1 focus:outline-none transition-colors mt-4 mb-2'>
						{isOpen ? t('projects.headings.showLess', { defaultValue: 'Ver menos ▲' }) : t('projects.headings.showMore', { defaultValue: 'Ver más ▼' })}
					</button>

					<AnimatePresence initial={false}>
						{isOpen && (
							<motion.div
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: 'auto', opacity: 1 }}
								exit={{ height: 0, opacity: 0 }}
								className='overflow-hidden bg-stone-50 group-hover:bg-white/10 p-4 rounded-none mt-2 uppercase text-[11px] font-medium tracking-wide text-stone-600 group-hover:text-white space-y-2 transition-colors'>
								<h5 className='text-[10px] font-black uppercase tracking-widest text-stone-400 group-hover:text-white/60 mb-3 transition-colors'>
									{t('experience.detailedTasksTitle', { defaultValue: 'Tareas Específicas e Impacto Técnico' })}
								</h5>
								<ul className='space-y-1.5 list-none pl-0'>
									{exp.detailedTasks.map((task, idx) => (
										<li key={idx} className="before:content-['–'] before:mr-2" dangerouslySetInnerHTML={{ __html: task }} />
									))}
								</ul>
							</motion.div>
						)}
					</AnimatePresence>
				</>
			)}
		</motion.div>
	);
};

function Experience() {
	const { t } = useTranslation();
	const currentExperience = t('experience.current', { returnObjects: true }) || {};
	const pastExperiences = t('experience.past', { returnObjects: true }) || [];

	const startDate = currentExperience.startDate;
	const [calculatedExp, setCalculatedExp] = useState({ years: 0, months: 0 });

	useEffect(() => {
		if (startDate) {
			const { years, months } = calculateExperience(startDate);
			setCalculatedExp({ years, months });
		}
	}, [startDate]);

	const sinceText = currentExperience.duration ? currentExperience.duration.replace('{{years}}', calculatedExp.years).replace('{{months}}', calculatedExp.months) : '';

	// =========================================================================
	// ARQUITECTURA DE FUSIÓN: Creamos una única línea de tiempo unificada
	// =========================================================================
	const allExperiences = [
		{
			id: 'current-monolith',
			title: currentExperience.title,
			place: currentExperience.place,
			duration: sinceText,
			responsibilities: currentExperience.responsibilities,
			detailedTasks: currentExperience.detailedTasks || [],
			isCurrent: true, // Bandera de control visual
		},
		...pastExperiences,
	];

	return (
		<section id='experience' className='py-16 sm:py-20 bg-concrete'>
			<AnimatedSection>
				<div className='container mx-auto px-6 max-w-5xl text-left'>
					<SectionTitle title={t('experience.sectionTitle')} />

					{/* -----------------------------------------------------------
					   VISTA DESKTOP: Mantiene el bloque destacado + la lista cronológica
					   ----------------------------------------------------------- */}
					<div className='hidden md:block w-full mt-12'>
						{/* Bloque Monolítico Destacado (Current) */}
						<div className='group w-full mb-16 p-8 bg-white rounded-none transition-all duration-300 hover:bg-[#0d9488] hover:text-white text-left'>
							<div className='grid md:grid-cols-3 gap-8 items-start'>
								<div className='md:col-span-1 pl-4'>
									<h3 className='text-xl font-black text-structural group-hover:text-white transition-colors uppercase tracking-tight'>{currentExperience.place}</h3>
									<p className='text-xs font-black text-primary group-hover:text-white/90 transition-colors uppercase tracking-wider mt-1'>{currentExperience.title}</p>
									<p className='text-[10px] font-bold text-stone-400 group-hover:text-white/70 transition-colors uppercase tracking-widest mt-2'>{sinceText}</p>
								</div>
								<div className='md:col-span-2 uppercase text-xs font-medium tracking-wide text-structural/90 group-hover:text-white transition-colors leading-relaxed space-y-3'>
									<p className='text-[10px] font-black uppercase tracking-widest text-primary group-hover:text-white transition-colors'>{t('experience.keyResponsibilities')}</p>
									<ul className='space-y-2 list-none pl-0'>
										{currentExperience.responsibilities &&
											currentExperience.responsibilities.map((item, index) => (
												<li key={index} className="before:content-['■'] before:text-primary group-hover:before:text-white before:mr-2 transition-colors">
													{item}
												</li>
											))}
									</ul>
								</div>
							</div>
						</div>

						<div className='relative text-left mb-12 border-b-2 border-stone-200 pb-2'>
							<span className='text-md font-black uppercase tracking-widest text-stone-700'>{t('experience.pastExperienceTitle')}</span>
						</div>

						<motion.div
							className='w-full space-y-4'
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true, amount: 0.1 }}
							variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}>
							{Array.isArray(pastExperiences) && pastExperiences.map((exp) => <ExperienceCard key={exp.id} exp={exp} />)}
						</motion.div>
					</div>

					{/* -----------------------------------------------------------
					   VISTA MOBILE: Todo unificado en un solo carrusel táctil
					   ----------------------------------------------------------- */}
					<div className='block md:hidden w-full mt-8'>
						<CardSlider
							items={allExperiences}
							renderItem={(exp) => (
								<div className='px-2.5 pb-2'>
									<ExperienceCard exp={exp} />
								</div>
							)}
						/>
					</div>
				</div>
			</AnimatedSection>
		</section>
	);
}

export default Experience;
