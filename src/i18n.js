import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// 1. IMPORTA EL NUEVO DETECTOR
import LanguageDetector from 'i18next-browser-languagedetector';

// Importa tus traducciones
import enTranslation from './data/en/translation.json';
import esTranslation from './data/es/es.json';

i18n
    // 2. USA EL DETECTOR
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslation
            },
            es: {
                translation: esTranslation
            }
        },

        // 3. DEFINE LOS IDIOMAS QUE SOPORTAS
        // Esto es útil para que el detector sepa qué idiomas puede usar.
        supportedLngs: ['es', 'en'],

        // 4. ELIMINAMOS "lng: 'es',"
        // Ya no forzamos el español. El detector elegirá.

        // 5. MANTENEMOS EL FALLBACK
        // Si el navegador está en 'fr' (francés), como no lo soportas,
        // usará 'en' (inglés) como respaldo.
        fallbackLng: 'en',

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;