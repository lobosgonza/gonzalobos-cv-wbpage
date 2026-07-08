// src/components/PrintCVButton.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

function PrintCVButton() {
	const { i18n } = useTranslation();
	const isEn = i18n.language === 'en';

	const handlePrint = () => {
		// 1. Guardamos el título original del portafolio
		const originalTitle = document.title;

		// 2. Obtenemos la fecha actual en formato YYYY-MM-DD
		const today = new Date().toISOString().split('T')[0];

		// 3. Forzamos el formato solicitado para el nombre del archivo PDF
		document.title = `${today}-CV-Gonzalo-Lobos-Ramirez`;

		// 4. Ejecutamos la impresión nativa
		window.print();

		// 5. Devolvemos el título original a la pestaña web
		document.title = originalTitle;
	};

	return (
		<button onClick={handlePrint} type='button' className='flex items-center justify-center gap-2'>
			<svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 flex-shrink-0' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5}>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
				/>
			</svg>
			{isEn ? 'Download CV PDF' : 'Descargar CV PDF'}
		</button>
	);
}

export default PrintCVButton;
