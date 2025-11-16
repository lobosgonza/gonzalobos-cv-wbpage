import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Icono de Flecha (Chevron)
const ArrowIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        {...props}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
);

const CardSlider = ({ items, renderItem }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    if (!items || items.length === 0) {
        return null;
    }

    const goToPrevious = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    const slideVariants = {
        hidden: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
        }),
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 300, damping: 30 },
        },
        exit: (direction) => ({
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
            transition: { type: 'spring', stiffness: 300, damping: 30 },
        }),
    };

    // --- INICIO DE LA MODIFICACIÓN (SWIPE) ---

    // 1. Definimos un umbral de arrastre (ej. 50px)
    const SWIPE_THRESHOLD = 50;

    // 2. Creamos la función que se ejecuta al soltar la tarjeta
    const onDragEnd = (event, { offset, velocity }) => {
        // 'offset.x' es cuánto se arrastró horizontalmente

        if (offset.x < -SWIPE_THRESHOLD) {
            // Si se arrastró más de 50px a la izquierda -> Siguiente
            goToNext();
        } else if (offset.x > SWIPE_THRESHOLD) {
            // Si se arrastró más de 50px a la derecha -> Anterior
            goToPrevious();
        }
        // Si no se supera el umbral, la tarjeta vuelve a su sitio (manejado por dragConstraints)
    };

    // --- FIN DE LA MODIFICACIÓN (SWIPE) ---


    return (
        <div className="relative w-full">
            <div className="relative overflow-hidden pb-10">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="w-full"

                        // --- AÑADIMOS LAS PROPIEDADES DE DRAG ---
                        drag="x" // Permite el arrastre solo en el eje X
                        dragConstraints={{ left: 0, right: 0 }} // Fija la tarjeta en su sitio (se "resiste" a ser movida)
                        dragElastic={0.1} // Qué tanto "rebota" al arrastrar (0.1 es poco)
                        onDragEnd={onDragEnd} // Llama a nuestra función al soltar
                    // --- FIN DE PROPIEDADES DE DRAG ---
                    >
                        {renderItem(items[currentIndex])}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Botón Izquierdo (Anterior) */}
            <button
                onClick={goToPrevious}
                className="absolute top-1/2 -translate-y-1/2 -left-2 z-10 p-2 bg-white/50 dark:bg-slate-800/50 rounded-full text-text-dark dark:text-text-light hover:bg-white dark:hover:bg-slate-800 transition-colors"
                aria-label="Anterior"
            >
                <ArrowIcon className="h-6 w-6 transform rotate-180" />
            </button>

            {/* Botón Derecho (Siguiente) */}
            <button
                onClick={goToNext}
                className="absolute top-1/2 -translate-y-1/2 -right-2 z-10 p-2 bg-white/50 dark:bg-slate-800/50 rounded-full text-text-dark dark:text-text-light hover:bg-white dark:hover:bg-slate-800 transition-colors"
                aria-label="Siguiente"
            >
                <ArrowIcon className="h-6 w-6" />
            </button>

            {/* Paginación (Puntos) */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {items.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 w-2 rounded-full transition-all ${currentIndex === index ? 'w-4 bg-primary' : 'bg-slate-300 dark:bg-slate-600'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardSlider;