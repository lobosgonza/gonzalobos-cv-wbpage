// src/components/SectionTitle.jsx
import React from 'react';

const SectionTitle = ({ title }) => {
	return (
		/* Cambios Brutalistas:
		   - text-left: Alineación estricta a la izquierda.
		   - items-start: Empuja tanto el texto como la barra verde hacia la izquierda.
		*/
		<div className='text-left mb-12 flex flex-col items-start'>
			{/* - text-3xl sm:text-4xl: Aumentamos un punto el tamaño para que sea más imponente.
			   - tracking-tighter: Letras muy juntas y pesadas, estilo tipografía suiza/alemana.
			   - text-structural: Tu nuevo negro puro de arquitectura.
			*/}
			<h2 className='text-3xl sm:text-4xl font-black uppercase tracking-tighter text-structural font-display'>{title}</h2>

			{/* Viga lineal brutalista: 
			   La hacemos un poco más gruesa (h-[4px]) y usa tu color 'primary' (Jade/Teal)
			*/}
			<div className='w-16 h-[4px] bg-primary mt-2'></div>
		</div>
	);
};

export default SectionTitle;
