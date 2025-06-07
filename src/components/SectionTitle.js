import React from 'react';

const SectionTitle = ({ title }) => {
    // Este componente recibe una propiedad 'title' y la muestra con un estilo consistente
    return (
        <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                {title}
            </h2>
        </div>
    );
};

export default SectionTitle;