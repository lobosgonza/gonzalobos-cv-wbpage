// src/components/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();

	// Extrae el idioma base ('en-US' -> 'en', 'es-CL' -> 'es')
	const currentLang = i18n.language.split('-')[0];

	// CÓDIGO SIMPLIFICADO: Una sola función cíclica que alterna entre ambos idiomas
	const toggleLanguage = () => {
		const nextLang = currentLang === 'es' ? 'en' : 'es';
		i18n.changeLanguage(nextLang);
	};

	return (
		/* 1. UNIFICACIÓN DE BOTÓN: Todo el bloque ahora es un solo disparador semántico.
		   Corregido el cursor y eliminado selectores innecesarios. */
		<button
			onClick={toggleLanguage}
			type='button'
			className='inline-flex items-center bg-stone-100 hover:bg-structural px-3 py-1.5 transition-colors duration-200 text-[11px] uppercase tracking-widest font-mono group rounded-none border-none shadow-none cursor-pointer '>
			{/* INDICADOR INGLÉS */}
			<span
				className={`transition-colors duration-150 ${
					currentLang === 'en'
						? 'text-teal-700 group-hover:text-teal-400 font-black scale-105' // Active: Bold + Jade brillante en hover negro
						: 'text-stone-600 group-hover:text-stone-300 font-medium' // Inactive: Gris claro en hover negro
				}`}>
				EN
			</span>

			{/* SEPARADOR GEOMÉTRICO */}
			<span className='mx-2 text-stone-400 group-hover:text-stone-600 transition-colors duration-200 select-none font-medium'>/</span>

			{/* INDICADOR ESPAÑOL */}
			<span
				className={`transition-colors duration-150 ${
					currentLang === 'es' ? 'text-teal-700 group-hover:text-teal-400 font-black scale-105' : 'text-stone-600 group-hover:text-stone-300 font-medium'
				}`}>
				ES
			</span>
		</button>
	);
};

export default LanguageSwitcher;
