// src/components/PrintCVButton.jsx
import React from 'react';
import { motion } from 'framer-motion'; // <-- Importamos motion para manejar el tap nativo
import { useTranslation } from 'react-i18next';

function PrintCVButton() {
	const { i18n } = useTranslation();
	const isEn = i18n.language === 'en';

	const handlePrint = () => {
		const originalTitle = document.title;
		const today = new Date().toISOString().split('T')[0];
		document.title = `${today}-CV-Gonzalo-Lobos-Ramirez`;
		window.print();
		document.title = originalTitle;
	};

	return (
		/* CORRECCIÓN: El botón ahora es un motion.button semántico que viste 
		   todas las clases de acero y responde al clic en la totalidad de su área */
		<motion.button
			onClick={handlePrint}
			type='button'
			whileTap={{ scale: 0.98 }}
			className='border-structural flex items-center justify-center gap-3 border-2 hover:border-primary hover:bg-primary hover:text-white text-structural font-black py-3.5 px-8 text-xs uppercase tracking-widest transition-all duration-200 w-full sm:w-auto focus:outline-none'>
			<svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 flex-shrink-0' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5}>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
				/>
			</svg>
			<span>{isEn ? 'Download CV' : 'Descargar CV'}</span>
		</motion.button>
	);
}

export default PrintCVButton;
