import React from 'react';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';

export default function Accreditations() {
	const { t } = useTranslation();
	const accreditations = t('accreditations.items', { returnObjects: true });

	return (
		<section id='accreditations' className='py-16 sm:py-20 bg-concrete '>
			<AnimatedSection>
				<div className='container mx-auto px-6 max-w-5xl text-left'>
					<SectionTitle title={t('accreditations.title')} />
					<div className='p-6 flex flex-col flex-grow uppercase text-xs font-medium tracking-wide text-structural/90'>
						{Array.isArray(accreditations) &&
							accreditations.map((item, index) => (
								<div className='flex flex-col flex-grow uppercase text-xs font-medium tracking-wide text-structural/90'>
									{/* Título de la acreditación */}
									<h3 className='text-lg font-black text-structural uppercase tracking-tight mb-2'>{item.title}</h3>

									{/* Emisor / Organización */}
									<p className='text-[10px] font-black text-stone-500 uppercase tracking-widest mb-4'>{item.issuer}</p>

									{/* Descripción / Detalle breve (si existe en tu JSON) */}
									{item.description && (
										<div className='border-l-2 border-stone-300 pl-2.5 mb-5 text-[11px] leading-relaxed lowercase first-letter:uppercase'>
											<p>{item.description}</p>
										</div>
									)}
									<div className='mt-auto pt-4 border-t-2 border-stone-100'>
										<a
											href={item.url}
											target='_blank'
											rel='noopener noreferrer'
											className='inline-flex items-center text-primary font-black text-xs uppercase tracking-widest hover:underline'>
											{t('accreditations.viewButton', 'Ver Acreditación')} →
										</a>
									</div>
								</div>
							))}
					</div>
				</div>
			</AnimatedSection>
		</section>
	);
}
