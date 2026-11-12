// src/sections/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

const buttonBase =
	'flex items-center justify-center gap-3 border-2 border-stone-400 text-stone-200 font-black py-2.5 px-6 rounded-none text-xs uppercase tracking-widest transition-colors duration-200 shadow-none';

function Footer() {
	const { t, i18n } = useTranslation();
	const location = useLocation();
	const hash = location.hash || '';
	const currentLang = i18n.language.startsWith('en') ? 'en' : 'es';

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	// Nombrado dinámico del PDF por fecha
	const handlePrintCV = () => {
		const originalTitle = document.title;
		const today = new Date().toISOString().split('T')[0];
		document.title = `${today}-CV-Gonzalo-Lobos-Ramirez`;
		window.print();
		document.title = originalTitle;
	};

	// <Link> genera <a href="/en"> rastreable por Googlebot (un <button> no se sigue)
	const langLinkClass = (lang) => `hover:text-primary transition-colors ${currentLang === lang ? 'font-black underline underline-offset-4' : 'font-medium'}`;

	return (
		<motion.footer
			className='w-full bg-stone-100 py-12'
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.4, ease: 'easeOut' }}>
			<div className='container mx-auto px-2 max-w-6xl flex flex-col items-start space-y-8 text-left'>
				{/* 1. BOTONES: bloques verticales en mobile y fila en desktop */}
				<div className='flex flex-col sm:flex-row justify-start gap-4 w-full items-stretch sm:items-center'>
					<motion.a
						href='https://api.whatsapp.com/send/?phone=56965961086&text&type=phone_number&app_absent=0'
						target='_blank'
						rel='noopener noreferrer'
						className={`${buttonBase} hover:bg-emerald-800 hover:border-emerald-800`}
						whileTap={{ scale: 0.98 }}>
						<FaWhatsapp className='w-4 h-4' />
						<span>{t('contact.whatsapp')}</span>
					</motion.a>

					<motion.button
						onClick={handlePrintCV}
						type='button'
						className={`${buttonBase} hover:bg-teal-700 hover:border-teal-700 bg-transparent`}
						whileTap={{ scale: 0.98 }}>
						<svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 flex-shrink-0' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5} aria-hidden='true'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
							/>
						</svg>
						<span>{t('footer.downloadCv')}</span>
					</motion.button>

					<motion.a
						href='https://www.linkedin.com/in/gonzalo-lobos-ram%C3%ADrez/'
						target='_blank'
						rel='noopener noreferrer'
						className={`${buttonBase} hover:bg-sky-800 hover:border-sky-800`}
						whileTap={{ scale: 0.98 }}>
						<FaLinkedin className='w-4 h-4' />
						<span>{t('contact.linkedin')}</span>
					</motion.a>

					<motion.a
						href='https://github.com/lobosgonza'
						target='_blank'
						rel='noopener noreferrer'
						className={`${buttonBase} hover:bg-primary hover:border-primary`}
						whileTap={{ scale: 0.98 }}>
						<FaGithub className='w-4 h-4' />
						<span>{t('contact.github')}</span>
					</motion.a>
				</div>

				{/* 2. SELECTOR DE IDIOMA (enlaces reales /es y /en) */}
				<nav aria-label={currentLang === 'en' ? 'Language' : 'Idioma'} className='text-[11px] font-black uppercase tracking-widest text-stone-400 border-l-2 pl-3 py-0.5'>
					<Link
						to={`/en${hash}`}
						hrefLang='en'
						lang='en'
						aria-current={currentLang === 'en' ? 'page' : undefined}
						onClick={() => i18n.changeLanguage('en')}
						className={langLinkClass('en')}>
						EN
					</Link>
					<span className='mx-3 text-stone-700'>|</span>
					<Link
						to={`/es${hash}`}
						hrefLang='es'
						lang='es'
						aria-current={currentLang === 'es' ? 'page' : undefined}
						onClick={() => i18n.changeLanguage('es')}
						className={langLinkClass('es')}>
						ES
					</Link>
				</nav>

				<div className='w-full border-t border-stone-800 my-2'></div>

				{/* 3. FILA INFERIOR */}
				<div className='w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-5 sm:space-y-0 uppercase text-[11px] font-medium tracking-wider text-stone-400'>
					<p className='leading-relaxed'>
						© {new Date().getFullYear()} <strong className='font-black text-white tracking-normal normal-case text-xs'>Gonzalo Lobos</strong>. {t('footer.rights')}
					</p>
					<motion.button
						type='button'
						onClick={scrollToTop}
						className='bg-structural flex items-center gap-2 font-primary uppercase tracking-widest text-[10px] hover:bg-primary py-2.5 px-5 rounded-none transition-colors shadow-none'
						whileTap={{ scale: 0.95 }}>
						<span>{t('footer.button')}</span>
						<svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 stroke-[3]' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
							<path strokeLinecap='round' strokeLinejoin='round' d='M5 15l7-7 7 7' />
						</svg>
					</motion.button>
				</div>
			</div>
		</motion.footer>
	);
}

export default Footer;
