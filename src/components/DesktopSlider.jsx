// src/components/DesktopSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ArrowIcon = (props) => (
	<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={3} stroke='currentColor' {...props}>
		<path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
	</svg>
);

const DesktopSlider = ({ items, renderItem, sectionId, slidesPerView = 1 }) => {
	const { i18n } = useTranslation();
	const isEn = i18n.language === 'en';
	const nextClass = `slider-next-${sectionId}`;
	const prevClass = `slider-prev-${sectionId}`;

	return (
		<div className='relative w-full'>
			<Swiper
				modules={[Navigation, Pagination]}
				loop={true}
				pagination={{ clickable: true }}
				spaceBetween={32}
				slidesPerView={slidesPerView}
				navigation={{
					nextEl: `.${nextClass}`,
					prevEl: `.${prevClass}`,
				}}
				className='!py-4 !pb-14'>
				{items.map((item) => (
					<SwiperSlide key={item.id}>{renderItem(item)}</SwiperSlide>
				))}
			</Swiper>

			{/* Controles laterales estilo plano técnico */}
			<div className='absolute top-1/2 -translate-y-1/2 -left-5 z-10 hidden lg:block'>
				<button
					type='button'
					className={`${prevClass} p-2.5 bg-[#eae7e2] border border-stone-300 text-stone-800 hover:bg-stone-800 hover:text-stone-100 transition-colors rounded-none`}
					aria-label={isEn ? 'Previous' : 'Anterior'}>
					<ArrowIcon className='h-5 w-5 transform rotate-180' />
				</button>
			</div>
			<div className='absolute top-1/2 -translate-y-1/2 -right-5 z-10 hidden lg:block'>
				<button
					type='button'
					className={`${nextClass} p-2.5 bg-[#eae7e2] border border-stone-300 text-stone-800 hover:bg-stone-800 hover:text-stone-100 transition-colors rounded-none`}
					aria-label={isEn ? 'Next' : 'Siguiente'}>
					<ArrowIcon className='h-5 w-5' />
				</button>
			</div>
		</div>
	);
};

export default DesktopSlider;
