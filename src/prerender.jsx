import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import PortfolioLayout from './PortfolioLayout';
import i18n from './i18n';
import { getPageSeo, getPrerenderHeadElements, normalizeLang } from './seo';

export async function prerender(data) {
	// "/" se redirige con 301 a "/es" en firebase.json; aquí solo se renderiza como respaldo
	const segment = (data.url || '/').split('/').filter(Boolean)[0];
	const lang = normalizeLang(segment);

	await i18n.changeLanguage(lang);

	const html = renderToString(
		<MemoryRouter initialEntries={[`/${lang}`]}>
			<PortfolioLayout lang={lang} />
		</MemoryRouter>,
	);
	const seo = getPageSeo(lang);

	return {
		html,
		head: {
			lang: seo.htmlLang,
			title: seo.title,
			elements: getPrerenderHeadElements(lang),
		},
	};
}
