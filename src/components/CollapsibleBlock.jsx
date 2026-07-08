// src/components/CollapsibleBlock.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function CollapsibleBlock({ labelOpen, labelClosed, buttonClass, contentClass, children }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{/* Botón Disparador Dinámico */}
			<button onClick={() => setIsOpen(!isOpen)} type='button' className={buttonClass}>
				{isOpen ? labelOpen : labelClosed}
			</button>

			{/* Contenedor Animado Reciclado */}
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{
							height: 'auto',
							opacity: 1,
							transition: { height: { duration: 0.25, ease: 'easeOut' }, opacity: { duration: 0.2 } },
						}}
						exit={{
							height: 0,
							opacity: 0,
							transition: { height: { duration: 0.2, ease: 'easeIn' }, opacity: { duration: 0.15 } },
						}}
						className='overflow-hidden'>
						{/* Aquí se renderiza lo que metas dentro del componente */}
						<div className={contentClass}>{children}</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

export default CollapsibleBlock;
