// src/components/PastExperienceItem.jsx

import React from 'react';
import { motion } from 'framer-motion';

const PastExperienceItem = ({ exp }) => {
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            className="relative pl-8 py-4 border-l-2 border-slate-200 dark:border-slate-700"
            variants={itemVariants}
        >
            {/* Círculo decorativo en la línea de tiempo */}
            <div className="absolute -left-[9px] top-5 h-4 w-4 bg-white dark:bg-background-dark rounded-full border-2 border-slate-200 dark:border-slate-700"></div>

            <h4 className="text-lg font-bold text-text-dark dark:text-text-light">{exp.title}</h4>
            <p className="text-md font-semibold text-primary">{exp.place}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{exp.duration}</p>

            <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
                {exp.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                ))}
            </ul>
        </motion.div>
    );
};

export default PastExperienceItem;