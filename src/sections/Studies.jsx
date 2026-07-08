/// src/sections/Studies.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import AnimatedSection from '../components/AnimatedSection';
import CollapsibleBlock from '../components/CollapsibleBlock';
import CardSlider from '../components/CardSlider'; // <-- 1. Importamos el carrusel móvil

const StudyRow = ({ study }) => {
	const { t } = useTranslation();

	return (
		<motion.div
			className='group relative bg-white p-6 mb-4 transition-all duration-300 hover:bg-[#0d9488] hover:text-white text-left'
			variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}>
			<div className='absolute -left-[8px] top-7 h-4 w-4 bg-primary group-hover:bg-white transition-colors transform rotate-45 z-10'></div>

			<h4 className='text-lg font-black text-structural group-hover:text-white transition-colors uppercase tracking-tight'>{study.title}</h4>
			<p className='text-xs font-black text-primary group-hover:text-white/90 transition-colors uppercase tracking-wider mt-0.5'>
				{study.place} · <span className='text-stone-500 group-hover:text-white/80 normal-case font-bold transition-colors'>{study.location}</span>
			</p>
			<p className='text-[10px] font-bold text-stone-400 group-hover:text-white/70 transition-colors uppercase tracking-widest mt-1 mb-3'>{study.duration}</p>

			<ul className='space-y-1.5 text-xs font-medium uppercase tracking-wide text-structural/80 group-hover:text-white transition-colors leading-relaxed list-none'>
				{study.responsibilities &&
					study.responsibilities.map((resp, index) => (
						<li key={index} className="before:content-['■'] before:text-primary group-hover:before:text-white before:mr-2 transition-colors">
							{resp}
						</li>
					))}
			</ul>

			{study.detailedTasks && study.detailedTasks.length > 0 && (
				<CollapsibleBlock
					labelOpen={t('projects.headings.showLess', { defaultValue: 'Ver menos ▲' })}
					labelClosed={t('projects.headings.showMore', { defaultValue: 'Ver más ▼' })}
					buttonClass='text-[10px] font-black uppercase tracking-widest text-primary group-hover:text-white flex items-center gap-1 focus:outline-none transition-colors mt-4 mb-2'
					contentClass='bg-stone-50 group-hover:bg-white/10 p-4 rounded-none mt-2 uppercase text-[11px] font-medium tracking-wide text-stone-600 group-hover:text-white space-y-2 transition-colors'>
					{study.detailedTasks.map((task, idx) => (
						<div key={idx} dangerouslySetInnerHTML={{ __html: task }} />
					))}
				</CollapsibleBlock>
			)}
		</motion.div>
	);
};

function Studies() {
	const { t } = useTranslation();
	const studies = t('studies.items', { returnObjects: true }) || [];

	return (
		<section id='studies' className='py-16 sm:py-20 bg-concrete'>
			<AnimatedSection>
				<div className='container mx-auto px-6 max-w-5xl text-left'>
					<SectionTitle title={t('studies.title')} />

					{/* 2. RENDERIZADO DUAL RESPONSIVO */}
					{/* Versión Desktop: Lista convencional apilada */}
					<div className='hidden md:block space-y-2 mt-12'>{Array.isArray(studies) && studies.map((study, idx) => <StudyRow key={idx} study={study} />)}</div>

					{/* Versión Mobile: Carrusel de Gestos */}
					<div className='block md:hidden mt-8 w-full'>
						<CardSlider
							items={studies}
							renderItem={(study) => (
								<div className='px-2.5 pb-2'>
									<StudyRow study={study} />
								</div>
							)}
						/>
					</div>
				</div>
			</AnimatedSection>
		</section>
	);
}

export default Studies;
