// src/sections/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import PrintCVButton from '../components/PrintCVButton';

const ButtonIcon = ({ children }) => <div className='w-5 h-5 flex-shrink-0'>{children}</div>;

const Hero = () => {
	const { t } = useTranslation();

	const handleScroll = (e, targetId) => {
		e.preventDefault();
		const targetElement = document.querySelector(targetId);
		if (targetElement) {
			const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
			window.scrollTo({ top: targetPosition, behavior: 'smooth' });
		}
	};

	return (
		<section id='home' className='relative min-h-screen flex items-center justify-start bg-concrete bg-textura-prehispanica overflow-hidden'>
			<div className='container mx-auto px-6 text-left max-w-5xl'>
				<motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className='space-y-4'>
					<h1 className='uppercase text-5xl md:text-7xl lg:text-8xl font-black font-display text-structural tracking-tighter leading-none'>{t('hero.name')}</h1>
					<div className='inline-block bg-primary text-white px-3 py-1 text-sm md:text-base font-black uppercase tracking-wider'>{t('hero.title')}</div>
					<p className='uppercase text-xs md:text-sm font-medium tracking-widest max-w-2xl text-structural/80 leading-relaxed pt-2'>{t('hero.subtitle')}</p>

					{/* BOTONES */}
					<div className='mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 pt-4'>
						<motion.a
							href='#projects'
							onClick={(e) => handleScroll(e, '#projects')}
							className='flex items-center justify-center gap-3 border-structural hover:border-primary bg-structural border-2 hover:bg-primary  text-white font-black py-3.5 px-8 text-xs uppercase tracking-widest transition-colors duration-200 shadow-none'
							whileTap={{ scale: 0.98 }}>
							<ButtonIcon>
								<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0A2.25 2.25 0 015.625 7.5h12.75c1.243 0 2.25.992 2.25 2.224v.002z'
									/>
								</svg>
							</ButtonIcon>
							{t('hero.primaryButton')}
						</motion.a>

						{/* CORRECCIÓN: Invocación directa del botón limpio sin el bloque motion.div que rompía el clic */}
						<PrintCVButton />
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
