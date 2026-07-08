// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion'; // <-- REPARADO: Origen correcto de animación[cite: 23]
import { useTranslation } from 'react-i18next'; // <-- REPARADO: Origen correcto del Hook[cite: 23]
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
	const { t, i18n } = useTranslation(); //[cite: 23]

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}; //[cite: 23]

	// Lógica unificada para el nombrado dinámico por fecha[cite: 23]
	const handlePrintCV = () => {
		const originalTitle = document.title; //[cite: 23]
		const today = new Date().toISOString().split('T')[0]; //[cite: 23]
		document.title = `${today}-CV-Gonzalo-Lobos-Ramirez`; //[cite: 23]
		window.print(); //[cite: 23]
		document.title = originalTitle; //[cite: 23]
	};

	return (
		<motion.footer
			className='w-full bg-stone-100 py-12' //[cite: 23]
			initial={{ opacity: 0, y: 10 }} //[cite: 23]
			whileInView={{ opacity: 1, y: 0 }} //[cite: 23]
			viewport={{ once: true }} //[cite: 23]
			transition={{ duration: 0.4, ease: 'easeOut' }}>
			{' '}
			{/*[cite: 23] */}
			<div className='container mx-auto px-6 max-w-5xl flex flex-col items-start space-y-8 text-left'>
				{' '}
				{/*[cite: 23] */}
				{/* 1. CONTENEDOR DE BOTONES: Bloques verticales en mobile (flex-col items-stretch) y fila en desktop (sm:flex-row) */}
				<div className='flex flex-col sm:flex-row justify-start gap-4 w-full items-stretch sm:items-center'>
					{/* BOTÓN: WHATSAPP */}
					<motion.a
						href='https://api.whatsapp.com/send/?phone=56965961086&text&type=phone_number&app_absent=0' //[cite: 23]
						target='_blank' //[cite: 23]
						className='flex items-center justify-center gap-3 border-2 border-stone-400 hover:bg-emerald-800 hover:border-emerald-800 text-stone-200 font-black py-2.5 px-6 rounded-none text-xs uppercase tracking-widest transition-colors duration-200 shadow-none' //[cite: 23]
						rel='noopener noreferrer' //[cite: 23]
						whileTap={{ scale: 0.98 }}>
						{' '}
						{/*[cite: 23] */}
						<FaWhatsapp className='w-4 h-4' /> {/*[cite: 23] */}
						<span>{t('contact.whatsapp')}</span> {/*[cite: 23] */}
					</motion.a>

					{/* BOTÓN: DESCARGAR CV PDF */}
					<motion.button
						onClick={handlePrintCV} //[cite: 23]
						type='button' //[cite: 23]
						className='flex items-center justify-center gap-3 border-2 border-stone-400 hover:bg-teal-700 hover:border-teal-700 text-stone-200 font-black py-2.5 px-6 rounded-none text-xs uppercase tracking-widest transition-colors duration-200 shadow-none bg-transparent' //[cite: 23]
						whileTap={{ scale: 0.98 }}>
						{' '}
						{/*[cite: 23] */}
						<svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 flex-shrink-0' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5}>
							{' '}
							{/*[cite: 23] */}
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
							/>{' '}
							{/*[cite: 23] */}
						</svg>
						<span>{t('footer.downloadCv')}</span> {/*[cite: 23] */}
					</motion.button>

					{/* BOTÓN: LINKEDIN */}
					<motion.a
						href='https://www.linkedin.com/in/gonzalo-lobos-ram%C3%ADrez/' //[cite: 23]
						target='_blank' //[cite: 23]
						className='flex items-center justify-center gap-3 border-2 border-stone-400 hover:bg-sky-800 hover:border-sky-800 text-stone-200 font-black py-2.5 px-6 rounded-none text-xs uppercase tracking-widest transition-colors duration-200 shadow-none' //[cite: 23]
						rel='noopener noreferrer' //[cite: 23]
						whileTap={{ scale: 0.98 }}>
						{' '}
						{/*[cite: 23] */}
						<FaLinkedin className='w-4 h-4' /> {/*[cite: 23] */}
						<span>{t('contact.linkedin')}</span> {/*[cite: 23] */}
					</motion.a>

					{/* BOTÓN: GITHUB */}
					<motion.a
						href='https://github.com/lobosgonza' //[cite: 23]
						target='_blank' //[cite: 23]
						className='flex items-center justify-center gap-3 border-2 border-stone-400 hover:bg-primary hover:border-primary text-stone-100 font-black py-2.5 px-6 rounded-none text-xs uppercase tracking-widest transition-colors duration-200 shadow-none' //[cite: 23]
						rel='noopener noreferrer' //[cite: 23]
						whileTap={{ scale: 0.98 }}>
						{' '}
						{/*[cite: 23] */}
						<FaGithub className='w-4 h-4' /> {/*[cite: 23] */}
						<span>{t('contact.github')}</span> {/*[cite: 23] */}
					</motion.a>
				</div>
				{/* 2. SELECTOR DE IDIOMA */}
				<div className='text-[11px] font-black uppercase tracking-widest text-stone-400 border-l-2 pl-3 py-0.5'>
					{' '}
					{/*[cite: 23] */}
					<button onClick={() => i18n.changeLanguage('en')} className={`hover:text-primary transition-colors ${i18n.language.startsWith('en') ? 'text-white font-black' : ''}`}>
						{' '}
						{/*[cite: 23] */}
						EN
					</button>
					<span className='mx-3 text-stone-700'>|</span> {/*[cite: 23] */}
					<button onClick={() => i18n.changeLanguage('es')} className={`hover:text-primary transition-colors ${i18n.language.startsWith('es') ? 'text-white font-black' : ''}`}>
						{' '}
						{/*[cite: 23] */}
						ES
					</button>
				</div>
				<div className='w-full border-t border-stone-800 my-2'></div> {/*[cite: 23] */}
				{/* 3. FILA INFERIOR */}
				<div className='w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-5 sm:space-y-0 uppercase text-[11px] font-medium tracking-wider text-stone-400'>
					{' '}
					{/*[cite: 23] */}
					<p className='leading-relaxed'>
						© {new Date().getFullYear()} <strong className='font-black text-white tracking-normal normal-case text-xs'>Gonzalo Lobos</strong>. {t('footer.rights')}{' '}
						{/*[cite: 23] */}
					</p>
					<motion.button
						onClick={scrollToTop} //[cite: 23]
						className='bg-structural flex items-center gap-2 font-primary uppercase tracking-widest text-[10px] hover:bg-primary py-2.5 px-5 rounded-none transition-colors shadow-none' //[cite: 23]
						whileTap={{ scale: 0.95 }}>
						{' '}
						{/*[cite: 23] */}
						<span>{t('footer.button')}</span> {/*[cite: 23] */}
						<svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 stroke-[3]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
							{' '}
							{/*[cite: 23] */}
							<path strokeLinecap='round' strokeLinejoin='round' d='M5 15l7-7 7 7' /> {/*[cite: 23] */}
						</svg>
					</motion.button>
				</div>
			</div>
		</motion.footer>
	);
}

export default Footer;
