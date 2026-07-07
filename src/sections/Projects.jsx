// src/sections/Projects.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import AnimatedSection from '../components/AnimatedSection';
import CardSlider from '../components/CardSlider';
import DesktopSlider from '../components/DesktopSlider';

const Projects = () => {
	const { t } = useTranslation();
	const projects = t('projects.items', { returnObjects: true }) || [];
	const validProjects = Array.isArray(projects) ? projects.filter((item) => item && typeof item === 'object') : [];

	const DESKTOP_SLIDER_THRESHOLD = 4;
	const projectsCount = validProjects.length;

	const renderSlideCard = (project) => (
		<div className='h-full text-left'>
			<ProjectCard key={project.id} project={project} />
		</div>
	);

	return (
		<section id='projects' className='py-16 sm:py-20 bg-concrete '>
			<AnimatedSection>
				<div className='container mx-auto px-6 max-w-5xl text-left'>
					<SectionTitle title={t('projects.title')} />

					{projectsCount < DESKTOP_SLIDER_THRESHOLD && (
						<div className='hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>{validProjects.map(renderSlideCard)}</div>
					)}

					<div className='md:hidden mt-12'>
						<CardSlider items={validProjects} renderItem={renderSlideCard} />
					</div>

					{projectsCount >= DESKTOP_SLIDER_THRESHOLD && (
						<div className='hidden md:block mt-12'>
							<DesktopSlider items={validProjects} renderItem={renderSlideCard} sectionId='projects' />
						</div>
					)}
				</div>
			</AnimatedSection>
		</section>
	);
};

export default Projects;
