// src/sections/CaseStudies.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import CardSlider from '../components/CardSlider';
import CaseStudySlider from '../components/DesktopSlider';
import AnimatedSection from '../components/AnimatedSection';

const CaseStudyCard = ({ study }) => {
	const { t } = useTranslation();

	return (
		<div className='bg-white  rounded-none flex flex-col h-full overflow-hidden text-left shadow-none'>
			{study.image && (
				<div className='w-full h-56 overflow-hidden  flex items-center justify-center bg-stone-100'>
					<img src={study.image} alt={study.title} className='w-full h-full object-cover grayscale transition-all duration-300 hover:grayscale-0' />
				</div>
			)}

			<div className='p-6 flex flex-col flex-grow uppercase text-xs font-medium tracking-wide text-structural/90'>
				<h3 className='text-lg font-black text-structural uppercase tracking-tight mb-3'>{study.title}</h3>

				<div className='flex flex-wrap gap-1.5 mb-5'>
					{study.tags.map((tag) => (
						<span key={tag} className='bg-stone-100  text-structural font-black px-2 py-0.5 text-[9px] uppercase tracking-wider rounded-none'>
							{tag}
						</span>
					))}
				</div>

				<div className='space-y-4 flex-grow leading-relaxed text-[11px]'>
					<div className='border-l-2  pl-2.5'>
						<h4 className='font-black text-primary uppercase tracking-widest text-[10px] mb-0.5'>{t('caseStudies.headings.problem')}:</h4>
						<p>{study.problem}</p>
					</div>
					<div className='border-l-2  pl-2.5'>
						<h4 className='font-black text-primary uppercase tracking-widest text-[10px] mb-0.5'>{t('caseStudies.headings.objective')}:</h4>
						<p>{study.objective}</p>
					</div>
					<div className='border-l-2 border-stone-300 pl-2.5'>
						<h4 className='font-black text-stone-700 uppercase tracking-widest text-[10px] mb-1'>{t('caseStudies.headings.actions')}:</h4>
						<ul className='space-y-1 list-none pl-0'>
							{study.actions.map((action, index) => (
								<li key={index} className="before:content-['–'] before:mr-2">
									{action}
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className='mt-6 pt-4 border-t-2 border-stone-100'>
					<h4 className='font-black text-structural uppercase tracking-widest text-[10px] mb-1.5'>{t('caseStudies.headings.results')}:</h4>
					<ul className='space-y-1 border-l-2  pl-2.5 text-primary font-black text-xs tracking-wider list-none'>
						{study.results.map((result, index) => (
							<li key={index}>
								<span>{result}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

function CaseStudies() {
	const { t } = useTranslation();
	const caseStudies = t('caseStudies.items', { returnObjects: true }) || [];
	const validCaseStudies = Array.isArray(caseStudies) ? caseStudies.filter((item) => item && typeof item === 'object') : [];

	const DESKTOP_SLIDER_THRESHOLD = 4;
	const studiesCount = validCaseStudies.length;

	const renderSlideCard = (study) => (
		<div className='h-full text-left'>
			<CaseStudyCard key={study.id} study={study} />
		</div>
	);

	return (
		<section id='caseStudies' className='py-16 sm:py-20 bg-concrete '>
			<AnimatedSection>
				{/* CORRECCIÓN: Agregamos max-w-5xl y text-left para amarrar la grilla */}
				<div className='container mx-auto px-6 max-w-5xl text-left'>
					<SectionTitle title={t('caseStudies.title')} subtitle={t('caseStudies.subtitle')} />

					{studiesCount < DESKTOP_SLIDER_THRESHOLD && (
						<div className='hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>{validCaseStudies.map(renderSlideCard)}</div>
					)}

					<div className='md:hidden mt-12'>
						<CardSlider items={validCaseStudies} renderItem={renderSlideCard} />
					</div>

					{studiesCount >= DESKTOP_SLIDER_THRESHOLD && (
						<div className='hidden md:block mt-12'>
							<CaseStudySlider items={validCaseStudies} renderItem={renderSlideCard} sectionId='casestudies' />
						</div>
					)}
				</div>
			</AnimatedSection>
		</section>
	);
}

export default CaseStudies;
