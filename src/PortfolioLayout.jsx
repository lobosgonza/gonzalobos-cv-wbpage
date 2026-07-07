// src/PortfolioLayout.js
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import CaseStudies from './sections/CaseStudies';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Studies from './sections/Studies';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function PortfolioLayout({ lang }) {
	const { i18n } = useTranslation();

	// Forzamos a i18next a usar el idioma de la URL en lugar del navegador
	useEffect(() => {
		if (i18n.language !== lang) {
			i18n.changeLanguage(lang);
		}
	}, [lang, i18n]);

	const isEs = lang === 'es';

	// Configuración del Schema adaptado a cada idioma de forma nativa
	const schemaData = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Gonzalo Lobos',
		url: 'https://gonzalobos.com',
		jobTitle: isEs ? 'Especialista en Ecommerce y Gestión de Proyectos' : 'Ecommerce Specialist & Project Manager',
		knowsAbout: ['Ecommerce', 'Project Management', 'Web Development', 'UX/UI', 'Google Analytics', 'Digital Strategy'],
		alumniOf: {
			'@type': 'Organization',
			name: 'Nespresso',
		},
	};

	return (
		<>
			{/* Inyección segura del Schema mediante el flujo de renderizado de React */}
			<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
			<Navbar />
			<main>
				<Hero />
				<About />
				<Projects />
				<CaseStudies />
				<Experience />
				<Studies />
				<Skills />
				<Contact />
			</main>
			<Footer />
		</>
	);
}

export default PortfolioLayout;
