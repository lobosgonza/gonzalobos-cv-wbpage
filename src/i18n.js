import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './data/en/translation.json';
import esTranslation from './data/es/translation.json';

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: { translation: enTranslation },
			es: { translation: esTranslation },
		},
		supportedLngs: ['es', 'en'],
		nonExplicitSupportedLngs: true, // es-CL → es, en-US → en
		fallbackLng: 'es',
		// La URL (/es o /en) es la única fuente de verdad del idioma.
		// Sin caché en localStorage/cookie para no contradecir la ruta indexada.
		detection: {
			order: ['path', 'htmlTag'],
			lookupFromPathIndex: 0,
			caches: [],
		},
		interpolation: {
			escapeValue: false,
		},
		react: {
			useSuspense: false,
		},
	});

export default i18n;
