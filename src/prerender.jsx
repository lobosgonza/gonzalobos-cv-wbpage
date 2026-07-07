import React from 'react';
import { renderToString } from 'react-dom/server';
import PortfolioLayout from './PortfolioLayout';
import i18n from './i18n';

export async function prerender(data) {
	// 1. Determinar el idioma de la ruta actual ('/', '/es', '/en')
	const url = data.url === '/' ? '/es' : data.url;
	const lang = url.replace('/', '') || 'es';

	// 2. Sincronizar i18next con el idioma que se está pre-renderizando
	await i18n.changeLanguage(lang);

	// 3. Convertir componentes de React a HTML
	const html = renderToString(<PortfolioLayout lang={lang} />);

	// 4. Configurar metadatos e inyecciones perfectas según el idioma
	const isEs = lang === 'es';

	const title = isEs ? 'Gonzalo Lobos - Especialista en Ecommerce' : 'Gonzalo Lobos - Ecommerce Specialist';
	const description = isEs
		? 'Gonzalo Lobos - Ecommerce | Gestión de Proyectos | Desarrollo Web. Experto en optimizar estrategias digitales y mejorar la experiencia del usuario.'
		: 'Gonzalo Lobos - Ecommerce | Project Management | Web Development. Expert in optimizing digital strategies and enhancing user experience.';
	const keywords = isEs
		? 'Ecommerce, Gestión de Proyectos, Desarrollo Web, UX/UI, Nespresso, Google Analytics'
		: 'Ecommerce, Project Management, Web Development, UX/UI, Nespresso, Google Analytics';

	return {
		html,
		head: {
			lang: lang,
			title: title,
			elements: new Set([
				// Meta tags estándares
				{ type: 'meta', props: { name: 'description', content: description } },
				{ type: 'meta', props: { name: 'keywords', content: keywords } },
				{ type: 'meta', props: { name: 'author', content: 'Gonzalo Lobos' } },

				// Canonical único autorreferencial por idioma
				{ type: 'link', props: { rel: 'canonical', href: `https://gonzalobos.com/${lang}` } },

				// Etiquetas Hreflang para indexación internacional Cruzada
				{ type: 'link', props: { rel: 'alternate', hreflang: 'es', href: 'https://gonzalobos.com/es' } },
				{ type: 'link', props: { rel: 'alternate', hreflang: 'en', href: 'https://gonzalobos.com/en' } },
				{ type: 'link', props: { rel: 'alternate', hreflang: 'x-default', href: 'https://gonzalobos.com/es' } },

				// Open Graph (Redes Sociales)
				{ type: 'meta', props: { property: 'og:title', content: title } },
				{ type: 'meta', props: { property: 'og:description', content: description } },
				{ type: 'meta', props: { property: 'og:image', content: '/logo192.png' } },
				{ type: 'meta', props: { property: 'og:url', content: `https://gonzalobos.com/${lang}` } },
				{ type: 'meta', props: { property: 'og:type', content: 'website' } },

				// Twitter Cards
				{ type: 'meta', props: { name: 'twitter:card', content: 'summary_large_image' } },
				{ type: 'meta', props: { name: 'twitter:title', content: title } },
				{ type: 'meta', props: { name: 'twitter:description', content: description } },
				{ type: 'meta', props: { name: 'twitter:image', content: '/logo192.png' } },

				// Se remueve el bloque de script erróneo que rompía la compilación
			]),
		},
	};
}
