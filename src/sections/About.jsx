// src/sections/About.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import profileImage from '../assets/images/Gonzalo-lobos-Home-400x400.jpg';
import AnimatedSection from '../components/AnimatedSection';

function About() {
	const { t } = useTranslation();

	return (
		<section id='about' className='py-16 sm:py-20 bg-concrete  '>
			<AnimatedSection>
				<div className='container mx-auto px-6 max-w-5xl text-left'>
					<SectionTitle title={t('about.title')} />

					<div className='grid grid-cols-1 md:grid-cols-3 gap-12 mt-8 items-start'>
						{/* Imagen: Enmarcada en un bloque grueso negro puro */}
						<div className='md:col-span-1 flex justify-start'>
							<div className='  p-2 w-full max-w-[280px]'>
								<img src={profileImage} alt={t('about.imageAlt')} className='w-full h-auto object-cover ' />
							</div>
						</div>

						{/* Textos formatados obligatoriamente a Mayúsculas y peso medio */}
						<div className='md:col-span-2 uppercase text-xs font-medium tracking-wider text-structural/90 space-y-6 leading-relaxed'>
							<p dangerouslySetInnerHTML={{ __html: t('about.introduction') }} />
							<p dangerouslySetInnerHTML={{ __html: t('about.skills') }} />

							{/* Llamada de acción destacada en bloque Jade rígido */}
							<div className='  pl-4 py-1 font-black text-stone-900 text-sm tracking-wide bg-white  p-3 shadow-none'>{t('about.callToAction')}</div>
						</div>
					</div>
				</div>
			</AnimatedSection>
		</section>
	);
}

export default About;
