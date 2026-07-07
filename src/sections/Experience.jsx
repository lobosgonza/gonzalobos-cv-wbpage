// src/sections/Experience.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import AnimatedSection from '../components/AnimatedSection';

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

const PastExperienceRow = ({ exp }) => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<motion.div className='relative pl-8 py-5   text-left' variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}>
			<div className='absolute -left-[10px] top-6 h-4 w-4 bg-primary  transform rotate-45 z-10'></div>

			<h4 className='text-lg font-black text-structural uppercase tracking-tight'>{exp.title}</h4>
			<p className='text-xs font-black text-primary uppercase tracking-wider mt-0.5'>{exp.place}</p>
			<p className='text-[10px] font-bold text-stone-400 uppercase tracking-widest mt-1 mb-3'>{exp.duration}</p>

			<ul className='space-y-1.5 text-xs font-medium uppercase tracking-wide text-structural/80 leading-relaxed list-none mb-3'>
				{exp.responsibilities &&
					exp.responsibilities.map((resp, index) => (
						<li key={index} className="before:content-['■'] before:text-primary before:mr-2">
							{resp}
						</li>
					))}
			</ul>

			{exp.detailedTasks && exp.detailedTasks.length > 0 && (
				<>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className='text-[10px] font-black uppercase tracking-widest text-primary hover:text-structural flex items-center gap-1 focus:outline-none transition-colors mt-4 mb-2'>
						{isOpen ? t('projects.headings.showLess', { defaultValue: 'Ver menos ▲' }) : t('projects.headings.showMore', { defaultValue: 'Ver más ▼' })}
					</button>

					<AnimatePresence initial={false}>
						{isOpen && (
							<motion.div
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: 'auto', opacity: 1 }}
								exit={{ height: 0, opacity: 0 }}
								className='overflow-hidden bg-white border-2  p-4 rounded-none mt-2 uppercase text-[11px] font-medium tracking-wide text-stone-600 space-y-2'>
								<h5 className='text-[10px] font-black uppercase tracking-widest text-stone-400 mb-3'>
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

	return (
		<section id='experience' className='py-16 sm:py-20 bg-concrete  '>
			<AnimatedSection>
				{/* CORRECCIÓN: Forzamos max-w-5xl y text-left en el contenedor raíz */}
				<div className='container mx-auto px-6 max-w-5xl text-left'>
					<SectionTitle title={t('experience.sectionTitle')} />

					{/* CORRECCIÓN: Eliminamos el max-w-4xl mx-auto para que use el ancho completo alineado */}
					<div className='w-full mb-16 p-8 bg-white border-4  rounded-none shadow-sm text-left'>
						<div className='grid md:grid-cols-3 gap-8 items-start'>
							<div className='md:col-span-1   pl-4'>
								<h3 className='text-xl font-black text-structural uppercase tracking-tight'>{currentExperience.place}</h3>
								<p className='text-xs font-black text-primary uppercase tracking-wider mt-1'>{currentExperience.title}</p>
								<p className='text-[10px] font-bold text-stone-400 uppercase tracking-widest mt-2'>{sinceText}</p>
							</div>
							<div className='md:col-span-2 uppercase text-xs font-medium tracking-wide text-structural/90 leading-relaxed space-y-3'>
								<p className='text-[10px] font-black uppercase tracking-widest text-primary'>{t('experience.keyResponsibilities')}</p>
								<ul className='space-y-2 list-none pl-0'>
									{currentExperience.responsibilities &&
										currentExperience.responsibilities.map((item, index) => (
											<li key={index} className="before:content-['■'] before:text-primary before:mr-2">
												{item}
											</li>
										))}
								</ul>
							</div>
						</div>
					</div>

					{/* SEPARADOR GEOMÉTRICO ALINEADO A LA IZQUIERDA */}
					<div className='relative text-left mb-12 border-b-2 /20 pb-2'>
						<span className=' text-md font-black uppercase tracking-widest text-stone-700'>{t('experience.pastExperienceTitle')}</span>
					</div>

					{/* CORRECCIÓN: Eliminamos max-w-2xl mx-auto de la línea de tiempo */}
					<motion.div
						className='w-full space-y-4'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.1 }}
						variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}>
						{Array.isArray(pastExperiences) && pastExperiences.map((exp) => <PastExperienceRow key={exp.id} exp={exp} />)}
					</motion.div>
				</div>
			</AnimatedSection>
		</section>
	);
}

export default Experience;
