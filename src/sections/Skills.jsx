import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import AnimatedSection from '../components/AnimatedSection';

const renderAccreditationIcon = (iconName) => {
	switch (iconName) {
		case 'google-analytics':
			return (
				<svg className='w-6 h-6 text-primary fill-current' viewBox='0 0 24 24'>
					<path d='M12 3a1 1 0 0 0-1 1v14a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1zm5 6a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0v-8a1 1 0 0 0-1-1zM7 15a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z' />
				</svg>
			);
		case 'ef-set':
			return <span className='font-black text-xs tracking-tighter bg-primary text-white px-1.5 py-0.5 rounded-none'>EF</span>;
		default:
			return null;
	}
};

function Skills() {
	const { t } = useTranslation();

	const categories = t('skills.categories', { returnObjects: true }) || [];
	const accreditations = t('skills.accreditations', { returnObjects: true }) || [];

	const validCategories = Array.isArray(categories) ? categories : [];
	const validAccreditations = Array.isArray(accreditations) ? accreditations : [];

	return (
		<section id='skills' className='py-16 sm:py-20 bg-concrete'>
			<AnimatedSection>
				<div className='container mx-auto px-2 max-w-6xl text-left'>
					<SectionTitle title={t('skills.title', 'Caja de Herramientas')} subtitle={t('skills.subtitle', 'Especialidades, Tecnologías y Acreditaciones')} />

					{/* BLOQUE 1: Cajas Negras Organizadas por Subgrupos */}
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
						{validCategories.map((cat, index) => (
							<div key={index} className='bg-structural p-6 flex flex-col h-full text-left rounded-none shadow-none'>
								<h3 className='text-lg font-black text-stone-200 uppercase tracking-tight mb-1'>{cat.name}</h3>
								{cat.subtitle && <p className='text-[10px] uppercase font-bold text-stone-400 tracking-widest mb-6'>{cat.subtitle}</p>}

								{/* Subgrupos de herramientas con mini-titulares */}
								<div className='space-y-6 mt-2'>
									{Array.isArray(cat.groups) &&
										cat.groups.map((group, groupIdx) => (
											<div key={groupIdx} className='border-l-2 border-primary pl-3'>
												<h4 className='font-black text-primary text-[10px] uppercase tracking-widest mb-2.5'>{group.title}</h4>
												<div className='flex flex-wrap gap-1.5'>
													{Array.isArray(group.tools) &&
														group.tools.map((tool, toolIdx) => (
															<span
																key={toolIdx}
																className='bg-stone-800 text-stone-200 font-semibold px-2 py-0.5 text-[10px] uppercase tracking-wider rounded-none border border-stone-700'>
																{tool}
															</span>
														))}
												</div>
											</div>
										))}
								</div>
							</div>
						))}
					</div>

					{/* BLOQUE 2: Acreditaciones */}
					{validAccreditations.length > 0 && (
						<div className='mt-16 pt-12 border-t-2 border-stone-300'>
							<h3 className='text-base font-black text-structural uppercase tracking-wider mb-8'>{t('skills.accreditationsTitle', 'Acreditaciones Destacadas')}</h3>

							<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
								{validAccreditations.map((item, index) => (
									<div key={index} className='bg-structural p-6 flex flex-col justify-between h-full text-left rounded-none shadow-none'>
										<div>
											<div className='flex items-center justify-between mb-2'>
												<h4 className='text-lg font-black text-stone-200 uppercase tracking-tight'>{item.title}</h4>
												<div className='ml-3 flex-shrink-0'>{renderAccreditationIcon(item.icon)}</div>
											</div>

											<p className='text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-4'>{item.issuer}</p>

											{Array.isArray(item.tags) && (
												<div className='flex flex-wrap gap-2 mb-5'>
													{item.tags.map((tag) => (
														<span key={tag} className='bg-primary text-white font-black px-2.5 py-1 text-[10px] uppercase tracking-wider rounded-none'>
															{tag}
														</span>
													))}
												</div>
											)}
										</div>

										<div className='mt-4 pt-4 border-t border-stone-800'>
											<a
												href={item.url}
												target='_blank'
												rel='noopener noreferrer'
												className='inline-flex items-center text-primary font-black text-xs uppercase tracking-widest hover:underline'>
												{t('skills.viewAccreditation', 'Ver Acreditación')} →
											</a>
										</div>
									</div>
								))}
							</div>
						</div>
					)}
				</div>
			</AnimatedSection>
		</section>
	);
}

export default Skills;
