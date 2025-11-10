import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// 1. CORRECCIÓN: Quitamos 'Loop' de la importación
import { Navigation, Pagination } from 'swiper/modules';

// Importa los estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Icono de Flecha (sin cambios)
const ArrowIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
);

const CaseStudySlider = ({ items, renderItem }) => {
    return (
        <div className="relative w-full max-w-6xl mx-auto">
            <Swiper
                // 2. CORRECCIÓN: Quitamos 'Loop' del array de módulos
                modules={[Navigation, Pagination]}

                // 3. MANTENEMOS 'loop={true}' (esto es correcto)
                loop={true} // <-- Esto habilita la continuidad
                pagination={{ clickable: true }}

                spaceBetween={32}
                slidesPerView={3}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                breakpoints={{
                    768: { slidesPerView: 2, spaceBetween: 32 },
                    1024: { slidesPerView: 3, spaceBetween: 32 },
                }}
                className="!py-4 !pb-12"
            >
                {items.map((item) => (
                    <SwiperSlide key={item.id} className="h-full">
                        {renderItem(item)}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Botones (sin cambios) */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10">
                <button
                    className="swiper-button-prev-custom p-2 rounded-full transition-colors bg-primary/10 text-primary hover:bg-primary/20"
                    aria-label="Anterior"
                >
                    <ArrowIcon className="h-6 w-6 transform rotate-180" />
                </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10">
                <button
                    className="swiper-button-next-custom p-2 rounded-full transition-colors bg-primary/10 text-primary hover:bg-primary/20"
                    aria-label="Siguiente"
                >
                    <ArrowIcon className="h-6 w-6" />
                </button>
            </div>
        </div>
    );
};

export default CaseStudySlider;