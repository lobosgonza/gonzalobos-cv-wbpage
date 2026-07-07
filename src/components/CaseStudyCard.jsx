// src/components/CaseStudyCard.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const CaseStudyCard = ({ study }) => {
	const { t } = useTranslation();

	return (
		/* CONTENEDOR RAÍZ: Bloque puro con marco de acero perimetral grueso, sin sombras */
		<div className='bg-white border-4  rounded-none flex flex-col h-full overflow-hidden text-left shadow-none transition-colors duration-200 hover:'>
			{/* Bloque del Título Principal */}
			<div className='p-6 pb-4'>
				<h3 className='text-xl font-black text-structural uppercase tracking-tighter leading-tight mb-3'>{study.title}</h3>

				{/* Badges de tecnologías compactados en bloque oscuro con tipografía de ingeniería */}
				<div className='flex flex-wrap gap-1.5'>
					{study.tags.map((tag) => (
						<span key={tag} className='bg-structural text-concrete font-mono text-[9px] uppercase tracking-widest px-2.5 py-0.5 rounded-none'>
							{tag}
						</span>
					))}
				</div>
			</div>

			{/* CUERPO DEL MANIFIESTO: Eliminamos bordes y usamos bloques sólidos de concreto */}
			<div className='px-6 pb-6 space-y-3 flex-grow flex flex-col justify-start'>
				{/* SECCIÓN 1: PROBLEMA (Bloque de concreto claro) */}
				<div className='bg-stone-100 p-3.5 rounded-none text-left'>
					<h4 className='font-black text-structural uppercase tracking-widest text-[10px] mb-1'>{t('caseStudies.headings.problem')}:</h4>
					<p className='uppercase text-[11px] font-medium tracking-wider text-structural/90 leading-relaxed'>{study.problem}</p>
				</div>

				{/* SECCIÓN 2: OBJETIVO (Mismo bloque para continuidad visual o sutil variación) */}
				<div className='bg-stone-100 p-3.5 rounded-none text-left'>
					<h4 className='font-black text-structural uppercase tracking-widest text-[10px] mb-1'>{t('caseStudies.headings.objective')}:</h4>
					<p className='uppercase text-[11px] font-medium tracking-wider text-structural/90 leading-relaxed'>{study.objective}</p>
				</div>

				{/* SECCIÓN 3: ACCIONES (Bloque un tono más denso para jerarquía mecánica) */}
				<div className='bg-stone-200/60 p-3.5 rounded-none text-left flex-grow'>
					<h4 className='font-black text-stone-700 uppercase tracking-widest text-[10px] mb-2'>{t('caseStudies.headings.actions')}:</h4>
					<ul className='space-y-1.5 list-none pl-0 uppercase text-[11px] font-medium tracking-wider text-structural/80'>
						{study.actions.map((action, index) => (
							<li key={index} className="before:content-['–'] before:mr-2">
								{action}
							</li>
						))}
					</ul>
				</div>
			</div>

			{/* SECCIÓN 4: RESULTADOS CRUCIALES (Masa monolítica negra estructural)
			    - bg-structural: El bloque pasa a ser oscuro.
			    - text-concrete / text-white: Mutación automática a fuentes claras para contraste AA.
			    - text-primary: El Jade actúa como acento radioactivo de éxito.
			*/}
			<div className='bg-structural text-concrete p-5 mt-auto text-left w-full border-t-2 '>
				<h4 className='font-black text-primary uppercase tracking-widest text-[10px] mb-2.5'>{t('caseStudies.headings.results')}:</h4>
				<ul className='space-y-2 list-none pl-0 uppercase text-xs font-black tracking-wider text-white leading-tight'>
					{study.results.map((result, index) => (
						<li key={index} className="flex items-start before:content-['■'] before:text-primary before:mr-2 before:text-[10px] before:pt-0.5">
							<span>{result}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default CaseStudyCard;
