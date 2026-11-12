import i18n from './i18n';

export const SITE_URL = 'https://gonzalobos.com';
export const SITE_NAME = 'Gonzalo Lobos';
export const SUPPORTED_LANGS = ['es', 'en'];
export const DEFAULT_LANG = 'es';

// Imagen social 1200x630 (Open Graph / X). Retrato cuadrado para Person.image.
export const OG_IMAGE = `${SITE_URL}/images/gonzalo-lobos-og-1200x630.jpg`;
export const OG_IMAGE_WIDTH = '1200';
export const OG_IMAGE_HEIGHT = '630';
export const OG_IMAGE_TYPE = 'image/jpeg';
export const PROFILE_IMAGE = `${SITE_URL}/images/gonzalo-lobos-og.jpg`;

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

// Fecha de última actualización de contenido (actualizar junto con sitemap.xml <lastmod>).
export const DATE_MODIFIED = '2026-11-12';

const SAME_AS = ['https://www.linkedin.com/in/gonzalo-lobos-ram%C3%ADrez/', 'https://github.com/lobosgonza'];

const KNOWS_ABOUT = [
	'E-commerce',
	'Paid Media',
	'Google Ads',
	'Search Engine Marketing',
	'Meta Ads',
	'Conversion Rate Optimization',
	'Google Analytics 4',
	'Google Tag Manager',
	'Looker Studio',
	'Technical SEO',
	'React',
	'Tailwind CSS',
	'Frontend Web Development',
	'WhatsApp Cloud API',
	'AI Automation',
];

const stripHtml = (value) =>
	String(value || '')
		.replace(/<[^>]+>/g, ' ')
		.replace(/&nbsp;/gi, ' ')
		.replace(/\s+/g, ' ')
		.trim();

const isIndexableUrl = (url) => typeof url === 'string' && /^https?:\/\//.test(url) && !/(api\.whatsapp\.com|wa\.me)/.test(url);

export function normalizeLang(lang) {
	const base = String(lang || '')
		.split('-')[0]
		.toLowerCase();
	return SUPPORTED_LANGS.includes(base) ? base : DEFAULT_LANG;
}

export function getHtmlLang(lang) {
	return normalizeLang(lang) === 'en' ? 'en-US' : 'es-CL';
}

export function getPageSeo(lang) {
	const locale = normalizeLang(lang);
	const htmlLang = getHtmlLang(locale);

	return {
		lang: locale,
		htmlLang,
		ogLocale: locale === 'en' ? 'en_US' : 'es_CL',
		ogLocaleAlternate: locale === 'en' ? 'es_CL' : 'en_US',
		canonical: `${SITE_URL}/${locale}`,
		title: i18n.t('seo.title', { lng: locale }),
		description: i18n.t('seo.description', { lng: locale }),
		keywords: i18n.t('seo.keywords', { lng: locale }),
		image: OG_IMAGE,
		imageAlt: i18n.t('about.imageAlt', { lng: locale }),
	};
}

export function buildSchemaGraph(lang) {
	const locale = normalizeLang(lang);
	const htmlLang = getHtmlLang(locale);
	const pageUrl = `${SITE_URL}/${locale}`;
	const jobTitle = i18n.t('seo.jobTitle', { lng: locale });
	const projects = i18n.t('projects.items', { lng: locale, returnObjects: true });
	const credentials = i18n.t('skills.accreditations.items', { lng: locale, returnObjects: true });
	const projectItems = Array.isArray(projects) ? projects : [];
	const credentialItems = Array.isArray(credentials) ? credentials : [];

	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Person',
				'@id': PERSON_ID,
				name: SITE_NAME,
				givenName: 'Gonzalo',
				familyName: 'Lobos',
				jobTitle,
				description: i18n.t('seo.description', { lng: locale }),
				url: SITE_URL,
				image: {
					'@type': 'ImageObject',
					url: PROFILE_IMAGE,
					caption: i18n.t('about.imageAlt', { lng: locale }),
				},
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Santiago',
					addressRegion: 'Región Metropolitana',
					addressCountry: 'CL',
				},
				knowsLanguage: ['es', 'en'],
				alumniOf: [
					{
						'@type': 'CollegeOrUniversity',
						name: 'Universidad Adolfo Ibáñez',
					},
					{
						'@type': 'CollegeOrUniversity',
						name: 'Instituto Profesional ARCOS',
					},
				],
				worksFor: {
					'@type': 'Organization',
					name: 'Expansis Pro',
					url: 'https://www.expansispro.com/',
				},
				sameAs: SAME_AS,
				knowsAbout: KNOWS_ABOUT,
				hasCredential: credentialItems
					.filter((item) => item && item.title)
					.map((item) => ({
						'@type': 'EducationalOccupationalCredential',
						name: item.title,
						credentialCategory: 'certification',
						...(item.url ? { url: item.url } : {}),
						recognizedBy: {
							'@type': 'Organization',
							name: item.issuer,
						},
					})),
			},
			{
				'@type': 'WebSite',
				'@id': WEBSITE_ID,
				url: `${SITE_URL}/`,
				name: SITE_NAME,
				inLanguage: ['es-CL', 'en-US'],
				publisher: { '@id': PERSON_ID },
				about: { '@id': PERSON_ID },
			},
			{
				'@type': 'ProfilePage',
				'@id': `${pageUrl}#profilepage`,
				url: pageUrl,
				name: i18n.t('seo.title', { lng: locale }),
				description: i18n.t('seo.description', { lng: locale }),
				inLanguage: htmlLang,
				dateModified: DATE_MODIFIED,
				isPartOf: { '@id': WEBSITE_ID },
				mainEntity: { '@id': PERSON_ID },
				about: { '@id': PERSON_ID },
				primaryImageOfPage: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630 },
				hasPart: { '@id': `${pageUrl}#projects` },
			},
			{
				'@type': 'ItemList',
				'@id': `${pageUrl}#projects`,
				name: i18n.t('projects.title', { lng: locale }),
				itemListOrder: 'https://schema.org/ItemListOrderAscending',
				numberOfItems: projectItems.length,
				itemListElement: projectItems.map((project, index) => {
					const anchorUrl = `${pageUrl}#projects`;
					return {
						'@type': 'ListItem',
						position: index + 1,
						item: {
							'@type': 'CreativeWork',
							'@id': `${pageUrl}#project-${project.id || index + 1}`,
							name: project.title,
							description: stripHtml(project.description),
							genre: project.category,
							inLanguage: htmlLang,
							creator: { '@id': PERSON_ID },
							url: isIndexableUrl(project.liveUrl) ? project.liveUrl : anchorUrl,
							image: project.image ? `${SITE_URL}${project.image}` : OG_IMAGE,
							...(Array.isArray(project.tags) && project.tags.length ? { keywords: project.tags.join(', ') } : {}),
						},
					};
				}),
			},
		],
	};
}

// JSON seguro para incrustar en <script> (evita cierre prematuro con "</script>").
export function serializeSchema(schema) {
	return JSON.stringify(schema).replace(/</g, '\\u003c');
}

function upsertMetaByName(name, content) {
	let el = document.head.querySelector(`meta[name="${name}"]`);
	if (!el) {
		el = document.createElement('meta');
		el.setAttribute('name', name);
		document.head.appendChild(el);
	}
	el.setAttribute('content', content);
}

function upsertMetaByProperty(property, content) {
	let el = document.head.querySelector(`meta[property="${property}"]`);
	if (!el) {
		el = document.createElement('meta');
		el.setAttribute('property', property);
		document.head.appendChild(el);
	}
	el.setAttribute('content', content);
}

function upsertLink(rel, href, hreflang) {
	const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`;
	let el = document.head.querySelector(selector);
	if (!el) {
		el = document.createElement('link');
		el.setAttribute('rel', rel);
		if (hreflang) el.setAttribute('hreflang', hreflang);
		document.head.appendChild(el);
	}
	el.setAttribute('href', href);
}

export function applyDocumentSeo(lang) {
	if (typeof document === 'undefined') return;

	const seo = getPageSeo(lang);
	document.title = seo.title;
	document.documentElement.lang = seo.htmlLang;

	upsertMetaByName('description', seo.description);
	upsertMetaByName('keywords', seo.keywords);
	upsertMetaByName('author', SITE_NAME);
	upsertMetaByName('robots', 'index, follow, max-image-preview:large, max-snippet:-1');
	upsertMetaByName('twitter:card', 'summary_large_image');
	upsertMetaByName('twitter:title', seo.title);
	upsertMetaByName('twitter:description', seo.description);
	upsertMetaByName('twitter:image', seo.image);
	upsertMetaByName('twitter:image:alt', seo.imageAlt);

	upsertMetaByProperty('og:title', seo.title);
	upsertMetaByProperty('og:description', seo.description);
	upsertMetaByProperty('og:image', seo.image);
	upsertMetaByProperty('og:image:secure_url', seo.image);
	upsertMetaByProperty('og:image:type', OG_IMAGE_TYPE);
	upsertMetaByProperty('og:image:width', OG_IMAGE_WIDTH);
	upsertMetaByProperty('og:image:height', OG_IMAGE_HEIGHT);
	upsertMetaByProperty('og:image:alt', seo.imageAlt);
	upsertMetaByProperty('og:url', seo.canonical);
	upsertMetaByProperty('og:type', 'profile');
	upsertMetaByProperty('profile:first_name', 'Gonzalo');
	upsertMetaByProperty('profile:last_name', 'Lobos');
	upsertMetaByProperty('og:site_name', SITE_NAME);
	upsertMetaByProperty('og:locale', seo.ogLocale);
	upsertMetaByProperty('og:locale:alternate', seo.ogLocaleAlternate);

	upsertLink('canonical', seo.canonical);
	upsertLink('alternate', `${SITE_URL}/es`, 'es');
	upsertLink('alternate', `${SITE_URL}/en`, 'en');
	upsertLink('alternate', `${SITE_URL}/es`, 'x-default');
}

export function getPrerenderHeadElements(lang) {
	const seo = getPageSeo(lang);

	return new Set([
		{ type: 'meta', props: { name: 'description', content: seo.description } },
		{ type: 'meta', props: { name: 'keywords', content: seo.keywords } },
		{ type: 'meta', props: { name: 'author', content: SITE_NAME } },
		{ type: 'meta', props: { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' } },
		{ type: 'link', props: { rel: 'canonical', href: seo.canonical } },
		{ type: 'link', props: { rel: 'alternate', hreflang: 'es', href: `${SITE_URL}/es` } },
		{ type: 'link', props: { rel: 'alternate', hreflang: 'en', href: `${SITE_URL}/en` } },
		{ type: 'link', props: { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}/es` } },
		{ type: 'meta', props: { property: 'og:title', content: seo.title } },
		{ type: 'meta', props: { property: 'og:description', content: seo.description } },
		{ type: 'meta', props: { property: 'og:image', content: seo.image } },
		{ type: 'meta', props: { property: 'og:image:secure_url', content: seo.image } },
		{ type: 'meta', props: { property: 'og:image:type', content: OG_IMAGE_TYPE } },
		{ type: 'meta', props: { property: 'og:image:width', content: OG_IMAGE_WIDTH } },
		{ type: 'meta', props: { property: 'og:image:height', content: OG_IMAGE_HEIGHT } },
		{ type: 'meta', props: { property: 'og:image:alt', content: seo.imageAlt } },
		{ type: 'meta', props: { property: 'og:url', content: seo.canonical } },
		{ type: 'meta', props: { property: 'og:type', content: 'profile' } },
		{ type: 'meta', props: { property: 'profile:first_name', content: 'Gonzalo' } },
		{ type: 'meta', props: { property: 'profile:last_name', content: 'Lobos' } },
		{ type: 'meta', props: { property: 'og:site_name', content: SITE_NAME } },
		{ type: 'meta', props: { property: 'og:locale', content: seo.ogLocale } },
		{ type: 'meta', props: { property: 'og:locale:alternate', content: seo.ogLocaleAlternate } },
		{ type: 'meta', props: { name: 'twitter:card', content: 'summary_large_image' } },
		{ type: 'meta', props: { name: 'twitter:title', content: seo.title } },
		{ type: 'meta', props: { name: 'twitter:description', content: seo.description } },
		{ type: 'meta', props: { name: 'twitter:image', content: seo.image } },
		{ type: 'meta', props: { name: 'twitter:image:alt', content: seo.imageAlt } },
	]);
}