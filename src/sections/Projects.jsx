import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import AnimatedSection from '../components/AnimatedSection';
import CardSlider from '../components/CardSlider'; // Slider móvil genérico
import ProjectSlider from '../components/ProjectSlider'; // Tu nuevo slider desktop

const Projects = () => {
	const { t } = useTranslation();
	const projects = t('projects.items', { returnObjects: true }) || [];

	// Validamos que sea un array y filtramos elementos nulos
	const validProjects = Array.isArray(projects) ? projects.filter((item) => item && typeof item === 'object') : [];

	const DESKTOP_SLIDER_THRESHOLD = 4;
	const projectsCount = validProjects.length;

	// Función encargada de renderizar cada tarjeta forzando la altura completa
	const renderSlideCard = (project) => (
		<div className='h-full'>
			<ProjectCard key={project.id} project={project} />
		</div>
	);

	return (
		<section id='projects' className='py-16 sm:py-20 bg-background-light dark:bg-background-dark'>
			<AnimatedSection>
				<div className='container mx-auto px-6'>
					<SectionTitle title={t('projects.title')} />

					{/* --- CASO 1: Grid (Solo para Desktop si hay MENOS de 4 items) --- */}
					{projectsCount < DESKTOP_SLIDER_THRESHOLD && (
						<div className='hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>{validProjects.map(renderSlideCard)}</div>
					)}

					{/* --- CASO 2: Slider (Solo para Móvil) --- */}
					<div className='md:hidden mt-12'>
						<CardSlider items={validProjects} renderItem={renderSlideCard} />
					</div>

					{/* --- CASO 3: Slider Multi-Item (Solo para Desktop si hay 4 O MÁS items) --- */}
					{projectsCount >= DESKTOP_SLIDER_THRESHOLD && (
						<div className='hidden md:block mt-12'>
							<ProjectSlider items={validProjects} renderItem={renderSlideCard} />
						</div>
					)}
				</div>
			</AnimatedSection>
		</section>
	);
};

export default Projects;
