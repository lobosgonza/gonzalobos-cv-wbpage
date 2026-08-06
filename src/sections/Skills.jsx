import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import AnimatedSection from '../components/AnimatedSection';

// Helper para renderizar el ícono según la propiedad "icon"
const renderAccreditationIcon = (iconName) => {
	switch (iconName) {
		case 'google-analytics':
			return (
				<svg className='w-6 h-6 text-amber-500 fill-current' viewBox='0 0 24 24'>
					<path d='M12 3a1 1 0 0 0-1 1v14a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1zm5 6a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0v-8a1 1 0 0 0-1-1zM7 15a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z' />
				</svg>
			);
		case 'ef-set':
			return <span className='font-black text-xs tracking-tighter bg-structural text-white px-1.5 py-0.5 rounded-none border border-structural'>EF</span>;
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
				<div className='container mx-auto px-6 max-w-5xl text-left'>
					<SectionTitle title={t('skills.title')} subtitle={t('skills.subtitle')} />

					{/* BLOQUE 1: Categorías de la Caja de Herramientas */}
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
						{validCategories.map((cat, index) => (
							<div key={index} className='bg-white p-6 flex flex-col h-full text-left rounded-none shadow-none border-l-4 border-stone-300'>
								<h3 className='text-sm font-black text-primary uppercase tracking-widest mb-4'>{cat.name}</h3>

								<div className='flex flex-wrap gap-2 mt-auto'>
									{cat.tools &&
										cat.tools.map((tool, i) => (
											<span key={i} className='bg-stone-100 text-structural font-black px-2.5 py-1 text-[10px] uppercase tracking-wider rounded-none'>
												{tool}
											</span>
										))}
								</div>
							</div>
						))}
					</div>

					{/* BLOQUE 2: Acreditaciones realizadas */}
					{validAccreditations.length > 0 && (
						<div className='mt-16 pt-12 border-t-2 border-stone-200'>
							<h3 className='text-base font-black text-structural uppercase tracking-wider mb-8'>{t('skills.accreditationsTitle')}</h3>

							<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
								{validAccreditations.map((item, index) => (
									<div key={index} className='bg-white p-6 flex flex-col justify-between h-full text-left rounded-none shadow-none border-l-4 border-primary'>
										<div>
											<div className='flex items-center justify-between mb-2'>
												<h4 className='text-lg font-black text-structural uppercase tracking-tight'>{item.title}</h4>
												{/* Ícono de la Acreditación */}
												<div className='ml-3 flex-shrink-0'>{renderAccreditationIcon(item.icon)}</div>
											</div>
											<p className='text-[10px] font-black text-stone-500 uppercase tracking-widest mb-4'>{item.issuer}</p>

											{Array.isArray(item.tags) && (
												<div className='flex flex-wrap gap-1.5 mb-5'>
													{item.tags.map((tag) => (
														<span key={tag} className='bg-stone-100 text-structural font-black px-2 py-0.5 text-[9px] uppercase tracking-wider rounded-none'>
															{tag}
														</span>
													))}
												</div>
											)}
										</div>

										<div className='mt-4 pt-4 border-t-2 border-stone-100'>
											<a
												href={item.url}
												target='_blank'
												rel='noopener noreferrer'
												className='inline-flex items-center text-primary font-black text-xs uppercase tracking-widest hover:underline'>
												{t('skills.viewAcccreditation', 'Ver Acreditación')} →
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
