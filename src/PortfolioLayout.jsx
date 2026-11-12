// src/PortfolioLayout.jsx
import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Studies from './sections/Studies';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import PrintCVContent from './components/PrintCVContent';
import Accreditations from './sections/Accreditations';
import { applyDocumentSeo, buildSchemaGraph, serializeSchema } from './seo';

function PortfolioLayout({ lang }) {
	const { i18n } = useTranslation();

	useEffect(() => {
		if (i18n.language !== lang) {
			i18n.changeLanguage(lang);
		}
	}, [lang, i18n]);

	useEffect(() => {
		applyDocumentSeo(lang);
	}, [lang, i18n.language]);

	const schemaData = useMemo(() => buildSchemaGraph(lang), [lang, i18n.language]);

	return (
		<>
			<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: serializeSchema(schemaData) }} />
			<Navbar />
			<main>
				<Hero />
				<About />
				<Projects />
				<Experience />
				<Studies />
				<Skills />
				<Accreditations />
				<Contact />
			</main>
			<Footer />
			<PrintCVContent />
		</>
	);
}

export default PortfolioLayout;
