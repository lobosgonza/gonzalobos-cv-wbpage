import i18n from './i18n';

export const SITE_URL = 'https://gonzalobos.com';
export const SITE_NAME = 'Gonzalo Lobos';
export const OG_IMAGE = `${SITE_URL}/images/gonzalo-lobos-og.jpg`;
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const KNOWS_ABOUT = [
	'E-commerce',
	'Paid Media',
	'Google Ads',
	'Meta Ads',
	'Technical SEO',
	'CRO',
	'Google Analytics 4',
	'Google Tag Manager',
	'React',
	'Web Development',
	'AI Automation',
];

const stripHtml = (value) =>
	String(value || '')
		.replace(/<[^>]+>/g, ' ')
		.replace(/&nbsp;/gi, ' ')
		.replace(/\s+/g, ' ')
		.trim();

export function getHtmlLang(lang) {
	return lang === 'en' ? 'en-US' : 'es-CL';
}

export function getPageSeo(lang) {
	const locale = lang === 'en' ? 'en' : 'es';
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
	const locale = lang === 'en' ? 'en' : 'es';
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
				jobTitle,
				url: SITE_URL,
				image: OG_IMAGE,
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Santiago',
					addressCountry: 'CL',
				},
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
				sameAs: ['https://www.linkedin.com/in/gonzalo-lobos-ramírez/', 'https://github.com/lobosgonza'],
				knowsAbout: KNOWS_ABOUT,
				hasCredential: credentialItems.map((item) => ({
					'@type': 'EducationalOccupationalCredential',
					name: item.title,
					credentialCategory: 'certification',
					url: item.url,
					recognizedBy: {
						'@type': 'Organization',
						name: item.issuer,
					},
				})),
			},
			{
				'@type': 'WebSite',
				'@id': WEBSITE_ID,
				url: pageUrl,
				name: SITE_NAME,
				inLanguage: htmlLang,
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
				isPartOf: { '@id': WEBSITE_ID },
				mainEntity: { '@id': PERSON_ID },
				about: { '@id': PERSON_ID },
			},
			{
				'@type': 'ItemList',
				'@id': `${pageUrl}#projects`,
				name: i18n.t('projects.title', { lng: locale }),
				itemListOrder: 'https://schema.org/ItemListOrderAscending',
				numberOfItems: projectItems.length,
				itemListElement: projectItems.map((project, index) => ({
					'@type': 'ListItem',
					position: index + 1,
					item: {
						'@type': ['CreativeWork', 'WebSite'],
						name: project.title,
						description: stripHtml(project.description),
						genre: project.category,
						url: project.liveUrl || pageUrl,
						image: project.image ? `${SITE_URL}${project.image}` : OG_IMAGE,
					},
				})),
			},
		],
	};
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
	upsertMetaByName('twitter:card', 'summary_large_image');
	upsertMetaByName('twitter:title', seo.title);
	upsertMetaByName('twitter:description', seo.description);
	upsertMetaByName('twitter:image', seo.image);
	upsertMetaByName('twitter:image:alt', seo.imageAlt);

	upsertMetaByProperty('og:title', seo.title);
	upsertMetaByProperty('og:description', seo.description);
	upsertMetaByProperty('og:image', seo.image);
	upsertMetaByProperty('og:image:alt', seo.imageAlt);
	upsertMetaByProperty('og:url', seo.canonical);
	upsertMetaByProperty('og:type', 'website');
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
		{ type: 'link', props: { rel: 'canonical', href: seo.canonical } },
		{ type: 'link', props: { rel: 'alternate', hreflang: 'es', href: `${SITE_URL}/es` } },
		{ type: 'link', props: { rel: 'alternate', hreflang: 'en', href: `${SITE_URL}/en` } },
		{ type: 'link', props: { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}/es` } },
		{ type: 'meta', props: { property: 'og:title', content: seo.title } },
		{ type: 'meta', props: { property: 'og:description', content: seo.description } },
		{ type: 'meta', props: { property: 'og:image', content: seo.image } },
		{ type: 'meta', props: { property: 'og:image:alt', content: seo.imageAlt } },
		{ type: 'meta', props: { property: 'og:url', content: seo.canonical } },
		{ type: 'meta', props: { property: 'og:type', content: 'website' } },
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
