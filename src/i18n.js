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
		nonExplicitSupportedLngs: true,
		load: 'languageOnly',
		fallbackLng: 'es',
		// Recursos empaquetados: inicialización síncrona para que el primer render
		// del cliente use el mismo idioma que el HTML prerenderizado (hidratación sin desajustes).
		initAsync: false,
		detection: {
			// La URL (/es o /en) manda; el navegador solo se usa como último recurso.
			order: ['path', 'htmlTag', 'navigator'],
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