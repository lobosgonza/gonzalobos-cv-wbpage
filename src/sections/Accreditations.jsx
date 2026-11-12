// src/sections/Accreditations.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';

export default function Accreditations() {
	const { t } = useTranslation();
	const accreditations = t('skills.accreditations.items', { returnObjects: true }) || [];
	const validAccreditations = Array.isArray(accreditations) ? accreditations.filter((item) => item && typeof item === 'object') : [];

	return (
		<section id='accreditations' className='py-16 sm:py-20 bg-concrete'>
			<AnimatedSection>
				<div className='container mx-auto px-2 max-w-6xl text-left'>
					<SectionTitle title={t('skills.accreditations.title', 'Acreditaciones Destacadas')} />

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
						{validAccreditations.map((item, index) => (
							<div key={index} className='bg-white rounded-none flex flex-col h-full overflow-hidden text-left shadow-none'>
								<div className='p-6 flex flex-col flex-grow uppercase text-xs font-medium tracking-wide text-structural/90'>
									{/* Cabecera (sin <img>: /images/icons/*.svg no existe y generaba 404) */}
									<div className='flex items-start gap-3 mb-3'>
										<h3 className='text-lg font-black text-structural uppercase tracking-tight'>{item.title}</h3>
									</div>

									{/* Emisor / Organización */}
									<p className='text-[10px] font-black text-stone-500 uppercase tracking-widest mb-4'>{item.issuer}</p>

									{/* Tags */}
									{Array.isArray(item.tags) && item.tags.length > 0 && (
										<div className='flex flex-wrap gap-1.5 mb-5'>
											{item.tags.map((tag, tagIndex) => (
												<span key={tagIndex} className='bg-stone-100 text-structural font-black px-2 py-0.5 text-[9px] uppercase tracking-wider rounded-none'>
													{tag}
												</span>
											))}
										</div>
									)}

									{/* Descripción u observaciones adicionales (si existen) */}
									{item.description && (
										<div className='space-y-4 flex-grow leading-relaxed text-[11px] mb-4'>
											<div className='border-l-2 border-stone-300 pl-2.5'>
												<p className='lowercase first-letter:uppercase'>{item.description}</p>
											</div>
										</div>
									)}

									{/* Botón Ver Acreditación */}
									{(item.url || item.link) && (
										<div className='mt-auto pt-4 border-t-2 border-stone-100'>
											<a
												href={item.url || item.link}
												target='_blank'
												rel='noopener noreferrer'
												className='inline-flex items-center text-primary font-black text-xs uppercase tracking-widest hover:underline'>
												{t('skills.accreditations.viewButton', 'Ver Acreditación')} →
											</a>
										</div>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</AnimatedSection>
		</section>
	);
}
