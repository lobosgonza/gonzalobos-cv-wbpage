import React from 'react';
import { renderToString } from 'react-dom/server';
import PortfolioLayout from './PortfolioLayout';
import i18n from './i18n';

export async function prerender(data) {
	// 1. Determinar el idioma de la ruta actual ('/', '/es', '/en')
	const url = data.url === '/' ? '/es' : data.url;
	const lang = url.replace('/', '') || 'es';

	// 2. Sincronizar i18next con el idioma que se está pre-renderizando en este instante
	await i18n.changeLanguage(lang);

	// 3. Convertir tus componentes de React a HTML puro y duro
	const html = renderToString(<PortfolioLayout lang={lang} />);

	// 4. Configurar metadatos dinámicos e inyecciones perfectas para las IA en el <head>
	const isEs = lang === 'es';
	const title = isEs ? 'Gonzalo Lobos - Especialista en Ecommerce' : 'Gonzalo Lobos - Ecommerce Specialist';
	const description = isEs
		? 'Gonzalo Lobos - Ecommerce | Gestión de Proyectos | Desarrollo Web. Experto en optimizar estrategias digitales y UX.'
		: 'Gonzalo Lobos - Ecommerce | Project Management | Web Development. Expert in optimizing digital strategies and UX.';

	return {
		html,
		head: {
			lang: lang,
			title: title,
			elements: new Set([
				{ type: 'meta', props: { name: 'description', content: description } },
				{ type: 'meta', props: { property: 'og:title', content: title } },
				{ type: 'meta', props: { property: 'og:description', content: description } },
				{ type: 'link', props: { rel: 'canonical', href: `https://gonzalobos.com/${lang}` } },
			]),
		},
	};
}
