// src/PortfolioLayout.jsx
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
import PrintCVContent from './components/PrintCVContent'; // <-- 1. Importamos el contenido de impresión

function PortfolioLayout({ lang }) {
	const { i18n } = useTranslation();

	useEffect(() => {
		if (i18n.language !== lang) {
			i18n.changeLanguage(lang);
		}
	}, [lang, i18n]);

	const isEs = lang === 'es';

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
			<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
			<Navbar />
			<main>
				<Hero />
				<Projects />
				<About />
				<CaseStudies />
				<Experience />
				<Studies />
				<Skills />
				<Contact />
			</main>
			<Footer />

			{/* 2. LO MONTAMOS AQUÍ: Hermano de main, libre e independiente en la raíz */}
			<PrintCVContent />
		</>
	);
}

export default PortfolioLayout;
