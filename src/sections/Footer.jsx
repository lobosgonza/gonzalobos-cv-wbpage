// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
	const { t, i18n } = useTranslation();

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<motion.footer
			className='w-full bg-stone-100 py-12' // Tu CSS transforma automáticamente esta clase en un bloque negro masivo (#1a1816)
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.4, ease: 'easeOut' }}>
			{/* CORRECCIÓN DE ANCHOS: Forzamos max-w-5xl y alineación estricta a la izquierda (items-start) */}
			<div className='container mx-auto px-6 max-w-5xl flex flex-col items-start space-y-8 text-left'>
				{/* 1. BOTONES DE REDES: Bloques puros con bordes duros de metal */}
				<div className='flex flex-wrap justify-start gap-4 w-full'>
					<motion.a
						href='https://wa.me/56965961086'
						target='_blank'
						className='flex items-center gap-3 border-2 border-stone-400 hover:bg-emerald-800 hover:border-emerald-800 text-stone-200 font-black py-2.5 px-6 rounded-none text-xs uppercase tracking-widest transition-colors duration-200 shadow-none'
						rel='noopener noreferrer'
						whileTap={{ scale: 0.98 }}>
						<FaWhatsapp className='w-4 h-4' />
						<span>{t('contact.whatsapp')}</span>
					</motion.a>

					<motion.a
						href='https://www.linkedin.com/in/gonzalo-lobos-ram%C3%ADrez/'
						target='_blank'
						className='flex items-center gap-3 border-2 border-stone-400 hover:bg-sky-800 hover:border-sky-800 text-stone-200 font-black py-2 px-5 rounded-sm transition-all duration-300 text-sm rounded-none text-xs uppercase tracking-widest shadow-none'
						rel='noopener noreferrer'
						whileTap={{ scale: 0.98 }}>
						<FaLinkedin className='w-4 h-4' />
						<span>{t('contact.linkedin')}</span>
					</motion.a>

					<motion.a
						href='https://github.com/lobosgonza'
						target='_blank'
						className='flex items-center gap-3 border-2 border-stone-400 hover:bg-primary hover:border-primary text-stone-100 font-black py-2 px-5 rounded-sm transition-all duration-300 text-sm rounded-none shadow-none'
						rel='noopener noreferrer'
						whileTap={{ scale: 0.98 }}>
						<FaGithub className='w-4 h-4' />
						<span>{t('contact.github')}</span>
					</motion.a>
				</div>

				{/* 2. SELECTOR DE IDIOMA: Ficha técnica integrada a la izquierda */}
				<div className='text-[11px] font-black uppercase tracking-widest text-stone-400 border-l-2  pl-3 py-0.5'>
					<button onClick={() => i18n.changeLanguage('en')} className={`hover:text-primary transition-colors ${i18n.language.startsWith('en') ? 'text-white font-black' : ''}`}>
						EN
					</button>
					<span className='mx-3 text-stone-700'>|</span>
					<button onClick={() => i18n.changeLanguage('es')} className={`hover:text-primary transition-colors ${i18n.language.startsWith('es') ? 'text-white font-black' : ''}`}>
						ES
					</button>
				</div>

				{/* LÍNEA ESTRUCTURAL DEL PLANO DE CONSTRUCCIÓN */}
				<div className='w-full border-t border-stone-800 my-2'></div>

				{/* 3. FILA INFERIOR: COPYRIGHT EN MAYÚSCULAS DE PESO MEDIO Y BOTÓN DE SUBIDA SÓLIDO */}
				<div className='w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-5 sm:space-y-0 uppercase text-[11px] font-medium tracking-wider text-stone-400'>
					<p className='leading-relaxed'>
						© {new Date().getFullYear()} <strong className='font-black text-white tracking-normal normal-case text-xs'>Gonzalo Lobos</strong>. {t('footer.rights')}
					</p>

					<motion.button
						onClick={scrollToTop}
						className='bg-structural flex items-center gap-2 font-primary uppercase tracking-widest text-[10px]  hover:bg-primary  py-2.5 px-5 rounded-none  transition-colors shadow-none'
						whileTap={{ scale: 0.95 }}>
						<span>{t('footer.button')}</span>
						<svg xmlns='http://www.w3.org/2000/svg' className=' h-4 w-4 stroke-[3]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
							<path strokeLinecap='round' strokeLinejoin='round' d='M5 15l7-7 7 7' />
						</svg>
					</motion.button>
				</div>
			</div>
		</motion.footer>
	);
}

export default Footer;
