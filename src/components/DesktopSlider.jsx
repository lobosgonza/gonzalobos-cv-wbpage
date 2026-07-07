// src/components/DesktopSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ArrowIcon = (props) => (
	<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={3} stroke='currentColor' {...props}>
		<path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
	</svg>
);

const DesktopSlider = ({ items, renderItem, sectionId }) => {
	// Selectores dinámicos basados en la sección para evitar colisiones en el DOM
	const nextClass = `slider-next-${sectionId}`;
	const prevClass = `slider-prev-${sectionId}`;

	return (
		<div className='relative w-full group'>
			<Swiper
				modules={[Navigation, Pagination]}
				loop={true}
				pagination={{ clickable: true }}
				spaceBetween={32}
				slidesPerView={3}
				navigation={{
					nextEl: `.${nextClass}`,
					prevEl: `.${prevClass}`,
				}}
				breakpoints={{
					768: { slidesPerView: 2, spaceBetween: 24 },
					1024: { slidesPerView: 3, spaceBetween: 32 },
				}}
				className='!py-4 !pb-14'>
				{items.map((item) => (
					<SwiperSlide key={item.id} className='h-full'>
						{renderItem(item)}
					</SwiperSlide>
				))}
			</Swiper>

			{/* Navegación Geométrica Rígida */}
			<div className='absolute top-1/2 -translate-y-1/2 -left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:block'>
				<button className={`${prevClass} p-2 border-stone-300  text-stone-700 hover:bg-stone-800 hover:text-stone-100 transition-colors rounded-none`} aria-label='Anterior'>
					<ArrowIcon className='h-5 w-5 transform rotate-180' />
				</button>
			</div>
			<div className='absolute top-1/2 -translate-y-1/2 -right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:block'>
				<button className={`${nextClass} p-2 border-stone-300  text-stone-700 hover:bg-stone-800 hover:text-stone-100 transition-colors rounded-none`} aria-label='Siguiente'>
					<ArrowIcon className='h-5 w-5' />
				</button>
			</div>
		</div>
	);
};

export default DesktopSlider;
