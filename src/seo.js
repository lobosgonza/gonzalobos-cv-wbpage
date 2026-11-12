import i18n from './i18n';

export const SITE_URL = 'https://gonzalobos.com';
export const SITE_NAME = 'Gonzalo Lobos';
export const SUPPORTED_LANGS = ['es', 'en'];
export const DEFAULT_LANG = 'es';
export const LAST_MODIFIED = '2026-11-12';

export const OG_IMAGE = `${SITE_URL}/images/gonzalo-lobos-og-1200x630.jpg`;
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const PROFILE_IMAGE = `${SITE_URL}/images/gonzalo-lobos-og.jpg`;

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const LINKEDIN_URL = 'https://www.linkedin.com/in/gonzalo-lobos-ram%C3%ADrez/';
export const GITHUB_URL = 'https://github.com/lobosgonza';

const KNOWS_ABOUT = [
	'E-commerce',
	'Paid Media',
	'Google Ads',
	'Search Engine Marketing (SEM)',
	'Meta Ads',
	'Conversion Rate Optimization (CRO)',
	'Google Analytics 4',
	'Google Tag Manager',
	'Looker Studio',
	'Technical SEO',
	'React',
	'Tailwind CSS',
	'Frontend Web Development',
	'Sales Automation',
];

const stripHtml = (value) =>
	String(value || '')
		.replace(/<[^>]+>/g, ' ')
		.replace(/&nbsp;/gi, ' ')
		.replace(/\s+/g, ' ')
		.trim();

// Solo URLs públicas reales (excluye WhatsApp, mailto, tel, etc.)
const isPublicWebUrl = (url) => /^https?:\/\//i.test(url || '') && !/whatsapp\.com|wa\.me/i.test(url);

export function normalizeLang(lang) {
	return SUPPORTED_LANGS.includes(lang) ? lang : DEFAULT_LANG;
}

export function getHtmlLang(lang) {
	return normalizeLang(lang) === 'en' ? 'en-US' : 'es-CL';
}

export function getPageSeo(lang) {
	const locale = normalizeLang(lang);

	return {
		lang: locale,
		htmlLang: getHtmlLang(locale),
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
	const description = i18n.t('seo.description', { lng: locale });
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
				familyName: 'Lobos Ramírez',
				jobTitle,
				description,
				url: SITE_URL,
				mainEntityOfPage: { '@id': `${pageUrl}#profilepage` },
				image: {
					'@type': 'ImageObject',
					'@id': `${SITE_URL}/#personimage`,
					url: PROFILE_IMAGE,
					contentUrl: PROFILE_IMAGE,
					caption: i18n.t('about.imageAlt', { lng: locale }),
				},
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Santiago',
					addressRegion: 'Región Metropolitana',
					addressCountry: 'CL',
				},
				nationality: { '@type': 'Country', name: 'Chile' },
				knowsLanguage: ['es', 'en'],
				alumniOf: [
					{ '@type': 'CollegeOrUniversity', name: 'Universidad Adolfo Ibáñez' },
					{ '@type': 'CollegeOrUniversity', name: 'Instituto Profesional ARCOS' },
				],
				worksFor: {
					'@type': 'Organization',
					name: 'Expansis Pro',
					url: 'https://www.expansispro.com/',
				},
				sameAs: [LINKEDIN_URL, GITHUB_URL],
				knowsAbout: KNOWS_ABOUT,
				hasCredential: credentialItems.map((item) => ({
					'@type': 'EducationalOccupationalCredential',
					name: item.title,
					credentialCategory: 'certification',
					...(isPublicWebUrl(item.url) ? { url: item.url } : {}),
					recognizedBy: { '@type': 'Organization', name: item.issuer },
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
				description,
				inLanguage: htmlLang,
				dateModified: LAST_MODIFIED,
				isPartOf: { '@id': WEBSITE_ID },
				mainEntity: { '@id': PERSON_ID },
				about: { '@id': PERSON_ID },
				primaryImageOfPage: {
					'@type': 'ImageObject',
					url: OG_IMAGE,
					width: OG_IMAGE_WIDTH,
					height: OG_IMAGE_HEIGHT,
				},
				hasPart: { '@id': `${pageUrl}#projects` },
			},
			{
				'@type': 'ItemList',
				'@id': `${pageUrl}#projects`,
				name: i18n.t('projects.title', { lng: locale }),
				itemListOrder: 'https://schema.org/ItemListOrderAscending',
				numberOfItems: projectItems.length,
				itemListElement: projectItems.map((project, index) => {
					const hasSite = isPublicWebUrl(project.liveUrl);
					return {
						'@type': 'ListItem',
						position: index + 1,
						item: {
							'@type': 'CreativeWork',
							name: project.title,
							description: stripHtml(project.description),
							genre: project.category,
							inLanguage: htmlLang,
							creator: { '@id': PERSON_ID },
							url: hasSite ? project.liveUrl : `${pageUrl}#projects`,
							image: project.image ? `${SITE_URL}${project.image}` : OG_IMAGE,
						},
					};
				}),
			},
		],
	};
}

// JSON seguro para <script type="application/ld+json"> (evita cierre prematuro con "</script>")
export function serializeSchema(lang) {
	return JSON.stringify(buildSchemaGraph(lang)).replace(/</g, '\\u003c');
}

function getHeadDescriptors(lang) {
	const seo = getPageSeo(lang);

	return [
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
		{ type: 'meta', props: { property: 'og:image:type', content: 'image/jpeg' } },
		{ type: 'meta', props: { property: 'og:image:width', content: String(OG_IMAGE_WIDTH) } },
		{ type: 'meta', props: { property: 'og:image:height', content: String(OG_IMAGE_HEIGHT) } },
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
	];
}

function upsertHeadElement({ type, props }) {
	let selector;
	if (type === 'link') {
		selector = props.hreflang
			? `link[rel="${props.rel}"][hreflang="${props.hreflang}"]`
			: `link[rel="${props.rel}"]:not([hreflang])`;
	} else {
		const key = props.name ? 'name' : 'property';
		selector = `meta[${key}="${props[key]}"]`;
	}

	let el = document.head.querySelector(selector);
	if (!el) {
		el = document.createElement(type);
		document.head.appendChild(el);
	}
	Object.entries(props).forEach(([attr, value]) => el.setAttribute(attr, value));
}

// Cliente: sincroniza <head> al cambiar de idioma sin recargar
export function applyDocumentSeo(lang) {
	if (typeof document === 'undefined') return;

	const seo = getPageSeo(lang);
	document.title = seo.title;
	document.documentElement.lang = seo.htmlLang;
	getHeadDescriptors(lang).forEach(upsertHeadElement);
}

// Build estático: mismos descriptores que el cliente (fuente única de verdad)
export function getPrerenderHeadElements(lang) {
	return new Set(getHeadDescriptors(lang));
}
