// src/components/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();
	const location = useLocation();

	const currentLang = (i18n.resolvedLanguage || i18n.language || 'es').split('-')[0];
	const nextLang = currentLang === 'es' ? 'en' : 'es';
	const hash = location.hash || '';

	return (
		// <Link> genera un <a href="/en"> real: Google puede rastrear la versión alternativa desde el HTML.
		<Link
			to={`/${nextLang}${hash}`}
			hrefLang={nextLang}
			lang={nextLang}
			onClick={() => i18n.changeLanguage(nextLang)}
			aria-label={currentLang === 'es' ? 'Switch to English' : 'Cambiar a español'}
			className='inline-flex items-center bg-stone-100 hover:bg-structural px-3 py-1.5 transition-colors duration-200 text-[11px] uppercase tracking-widest font-mono group rounded-none border-none shadow-none cursor-pointer no-underline'>
			<span
				className={`transition-colors duration-150 ${
					currentLang === 'en' ? 'text-teal-700 group-hover:text-teal-400 font-black scale-105' : 'text-stone-600 group-hover:text-stone-300 font-medium'
				}`}>
				EN
			</span>

			<span className='mx-2 text-stone-400 group-hover:text-stone-600 transition-colors duration-200 select-none font-medium'>/</span>

			<span
				className={`transition-colors duration-150 ${
					currentLang === 'es' ? 'text-teal-700 group-hover:text-teal-400 font-black scale-105' : 'text-stone-600 group-hover:text-stone-300 font-medium'
				}`}>
				ES
			</span>
		</Link>
	);
};

export default LanguageSwitcher;
