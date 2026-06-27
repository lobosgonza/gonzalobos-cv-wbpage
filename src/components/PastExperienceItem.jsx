// src/components/PastExperienceItem.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const PastExperienceItem = ({ exp }) => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<motion.div className='relative pl-8 py-4 border-l-2 border-slate-200 dark:border-slate-700' variants={itemVariants}>
			{/* Círculo decorativo en la línea de tiempo */}
			<div className='absolute -left-[9px] top-5 h-4 w-4 bg-white dark:bg-background-dark rounded-full border-2 border-slate-200 dark:border-slate-700'></div>

			<h4 className='text-lg font-bold text-text-dark dark:text-text-light'>{exp.title}</h4>
			<p className='text-md font-semibold text-primary'>{exp.place}</p>
			<p className='text-sm text-slate-500 dark:text-slate-400 mb-2'>{exp.duration}</p>

			{/* Responsabilidades Principales (Siempre Visibles) */}
			<ul className='list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300 mb-3'>
				{exp.responsibilities && exp.responsibilities.map((resp, index) => <li key={index}>{resp}</li>)}
			</ul>

			{/* Bloque Desplegable */}
			{exp.detailedTasks && exp.detailedTasks.length > 0 && (
				<>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className='text-sm font-semibold text-primary hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1 focus:outline-none transition-colors mb-2'>
						{isOpen ? t('projects.headings.showLess', { defaultValue: 'Ver menos ▲' }) : t('projects.headings.showMore', { defaultValue: 'Ver más ▼' })}
					</button>

					<AnimatePresence initial={false}>
						{isOpen && (
							<motion.div
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: 'auto', opacity: 1 }}
								exit={{ height: 0, opacity: 0 }}
								transition={{ duration: 0.3, ease: 'easeInOut' }}
								className='overflow-hidden bg-slate-50 dark:bg-slate-800/40 rounded-lg p-3 mt-1'>
								<h5 className='text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2'>
									{t('experience.detailedTasksTitle', { defaultValue: 'Tareas Específicas e Impacto Técnico' })}
								</h5>
								<ul className='list-disc list-inside space-y-1.5 text-sm text-slate-600 dark:text-slate-400'>
									{exp.detailedTasks.map((task, idx) => (
										<li key={idx} dangerouslySetInnerHTML={{ __html: task }} />
									))}
								</ul>
							</motion.div>
						)}
					</AnimatePresence>
				</>
			)}
		</motion.div>
	);
};

export default PastExperienceItem;
