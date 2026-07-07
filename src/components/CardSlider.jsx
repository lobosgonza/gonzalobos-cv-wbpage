// src/components/CardSlider.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ArrowIcon = (props) => (
	<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={3} stroke='currentColor' {...props}>
		<path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
	</svg>
);

const CardSlider = ({ items, renderItem }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	if (!items || items.length === 0) return null;

	const goToPrevious = () => {
		setDirection(-1);
		setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
	};

	const goToNext = () => {
		setDirection(1);
		setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
	};

	const onDragEnd = (event, { offset }) => {
		const SWIPE_THRESHOLD = 50;
		if (offset.x < -SWIPE_THRESHOLD) goToNext();
		else if (offset.x > SWIPE_THRESHOLD) goToPrevious();
	};

	return (
		<div className='relative w-full'>
			<div className='relative overflow-hidden pb-12'>
				<AnimatePresence initial={false} custom={direction} mode='wait'>
					<motion.div
						key={currentIndex}
						custom={direction}
						variants={{
							hidden: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
							visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
							exit: (dir) => ({ x: dir < 0 ? '100%' : '-100%', opacity: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } }),
						}}
						initial='hidden'
						animate='visible'
						exit='exit'
						className='w-full cursor-grab active:cursor-grabbing'
						drag='x'
						dragConstraints={{ left: 0, right: 0 }}
						dragElastic={0.1}
						onDragEnd={onDragEnd}>
						{renderItem(items[currentIndex])}
					</motion.div>
				</AnimatePresence>
			</div>

			{/* Controles Geométricos */}
			<button onClick={goToPrevious} className='absolute top-[40%] -left-2 z-10 p-2 bg-white/90 text-stone-700 shadow-sm rounded-none' aria-label='Anterior'>
				<ArrowIcon className='h-5 w-5 transform rotate-180' />
			</button>
			<button onClick={goToNext} className='absolute top-[40%] -right-2 z-10 p-2 bg-white/90 text-stone-700 shadow-sm rounded-none' aria-label='Siguiente'>
				<ArrowIcon className='h-5 w-5' />
			</button>

			{/* Paginación de Bloques Estilo Códice */}
			<div className='absolute bottom-2 left-0 right-0 flex justify-center gap-1.5'>
				{items.map((_, index) => (
					<div key={index} className={`h-1.5 transition-all duration-300 ${currentIndex === index ? 'w-6 bg-teal-700' : 'w-3 bg-stone-300'}`} />
				))}
			</div>
		</div>
	);
};

export default CardSlider;
