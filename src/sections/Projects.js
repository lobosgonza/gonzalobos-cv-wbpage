import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard'; import AnimatedSection from '../components/AnimatedSection'; // <-- 1. Importar aquí

const Projects = () => {
    const { t } = useTranslation();
    const projects = t('projects.items', { returnObjects: true }) || [];

    return (
        <section id="projects" className="py-16 sm:py-20 bg-background-light dark:bg-background-dark">
            <AnimatedSection>            <div className="container mx-auto px-6">
                <SectionTitle title={t('projects.title')} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {Array.isArray(projects) && projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div></AnimatedSection>

        </section>
    );
};

export default Projects;