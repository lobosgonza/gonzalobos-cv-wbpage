// src/components/ThemeSwitcher.jsx o LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const ThemeSwitcher = () => {
	const { i18n } = useTranslation();
	// Extrae el idioma actual eliminando variantes regionales ('es-CL' -> 'es')
	const currentLang = i18n.language.split('-')[0];

	const setLanguage = (lang) => {
		i18n.changeLanguage(lang);
	};

	return (
		/* CONTENEDOR MONOLÍTICO SIN BORDES:
		   - bg-stone-100: Bloque sólido de color cemento suave.
		   - hover:bg-structural: Cambia radicalmente a negro al pasar el mouse.
		   - font-mono tracking-widest: Estética pura de plano de ingeniería.
		*/
		<div className='inline-flex items-center bg-stone-100 hover:bg-structural px-3 py-1.5 transition-colors duration-200 text-[11px] uppercase tracking-widest font-mono group rounded-none border-none shadow-none'>
			{/* BOTÓN INGLÉS */}
			<button
				onClick={() => setLanguage('en')}
				className={`transition-colors duration-150 focus:outline-none ${
					currentLang === 'en'
						? 'text-primary font-black scale-105' // Bold Jade si está activo
						: ' font-medium  hover:text-primary' // Reacción clara/oscura
				}`}>
				EN
			</button>

			{/* SEPARADOR GEOMÉTRICO */}
			<span className='mx-2 text-stone-400 group-hover:text-stone-700 transition-colors duration-200 select-none'>/</span>

			{/* BOTÓN ESPAÑOL */}
			<button
				onClick={() => setLanguage('es')}
				className={`transition-colors duration-150 focus:outline-none ${
					currentLang === 'es'
						? 'text-primary font-black scale-105' // Bold Jade si está activo
						: ' font-medium  hover:text-primary'
				}`}>
				ES
			</button>
		</div>
	);
};

export default ThemeSwitcher;
