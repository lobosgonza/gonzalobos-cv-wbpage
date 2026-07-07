// src/sections/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import AnimatedSection from '../components/AnimatedSection';

// 1. SUB-COMPONENTE: Badge de Tecnología Rígido
const SkillBadge = ({ name }) => {
	return (
		<motion.div
			className='bg-primary text-white font-black px-2.5 py-1 text-[11px] uppercase tracking-wider rounded-none shadow-none'
			variants={{ hidden: { opacity: 0, y: 5 }, visible: { opacity: 1, y: 0 } }}>
			{name}
		</motion.div>
	);
};

// 2. SUB-COMPONENTE: Contenedor de Icono de Columna
const SkillColumnIcon = ({ children }) => <div className=' text-primary w-8 h-8 flex items-center justify-start mb-2   pb-1'>{children}</div>;

// 3. COMPONENTE PRINCIPAL SECCIÓN
function Skills() {
	const { t } = useTranslation();
	const skillsData = t('skills', { returnObjects: true }) || {};
	const { items = {} } = skillsData;
	const { strategy = [], technical = [], tools = [] } = items;

	// ESTRUCTURA DE DATOS: Mapeamos dinámicamente la configuración de cada columna brutalista
	const columnsConfig = [
		{
			id: 'strategy',
			title: skillsData.strategyTitle,
			desc: skillsData.strategyDesc,
			renderType: 'list',
			data: strategy,
			icon: (
				<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5}>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
					/>
				</svg>
			),
		},
		{
			id: 'technical',
			title: skillsData.technicalTitle,
			desc: skillsData.technicalDesc,
			renderType: 'badges',
			data: technical,
			icon: (
				<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5}>
					<path strokeLinecap='round' strokeLinejoin='round' d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' />
				</svg>
			),
		},
		{
			id: 'tools',
			title: skillsData.toolsTitle,
			desc: skillsData.toolsDesc,
			renderType: 'badges',
			data: tools,
			icon: (
				<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5}>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M9.75 17.375c-4.418 0-8-1.119-8-2.5.0-1.381 3.582-2.5 8-2.5 4.418 0 8 1.119 8 2.5.0 1.381-3.582 2.5-8 2.5zM9.75 12.125c-4.418 0-8-1.119-8-2.5.0-1.381 3.582-2.5 8-2.5 4.418 0 8 1.119 8 2.5.0 1.381-3.582 2.5-8 2.5zM9.75 6.875c-4.418 0-8-1.119-8-2.5C1.75 3.0, 5.332 1.881, 9.75 1.881c4.418 0 8 1.119 8 2.5.0 1.381-3.582 2.5-8 2.5z'
					/>
				</svg>
			),
		},
	];

	return (
		<section id='skills' className='py-16 sm:py-20 bg-concrete  '>
			<AnimatedSection>
				{/* Contenedor unificado rígidamente a la grilla izquierda máxima de 5xl */}
				<div className='container mx-auto px-6 max-w-5xl text-left'>
					<SectionTitle title={skillsData.title} />

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
						{/* ITERACIÓN EFICIENTE: Mapeamos los bloques monolíticos */}
						{columnsConfig.map((col) => (
							<div key={col.id} className='bg-structural p-6   flex flex-col text-left rounded-none shadow-none'>
								<SkillColumnIcon>{col.icon}</SkillColumnIcon>

								<h3 className='text-lg font-black text-stone-200 uppercase tracking-tight mb-1'>{col.title}</h3>
								<p className='text-[10px] uppercase font-bold text-stone-400 tracking-widest mb-6'>{col.desc}</p>

								{/* ENRUTADOR DE RENDERIZADO INTERNO SEGÚN EL TIPO */}
								{col.renderType === 'list' ? (
									/* Layout tipo manifiesto/lista (Usado en Estrategia) */
									<div className='space-y-4 uppercase text-xs font-medium tracking-wide text-structural/80'>
										{col.data.map((skill) => (
											<div key={skill.title} className='  pl-2.5 text-left'>
												<h4 className='font-black text-primary text-xs tracking-wider'>{skill.title}</h4>
												<p className='text-[11px] text-stone-200 mt-0.5 leading-relaxed normal-case font-sans font-semibold'>{skill.description}</p>
											</div>
										))}
									</div>
								) : (
									/* Layout tipo rejilla de bloques de datos (Usado en Técnico y Herramientas) */
									<div className='flex flex-wrap justify-start gap-2 '>
										{col.data.map((skill) => (
											<SkillBadge key={skill} name={skill} />
										))}
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</AnimatedSection>
		</section>
	);
}

export default Skills;
