import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import PortfolioLayout from './PortfolioLayout';
import i18n from './i18n';
import { getPageSeo, getPrerenderHeadElements } from './seo';

export async function prerender(data) {
	const url = data.url === '/' ? '/es' : data.url;
	const lang = url.replace('/', '') || 'es';

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
