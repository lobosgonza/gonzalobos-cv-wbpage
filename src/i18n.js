import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importa tus archivos de traducción
import enTranslation from './data/en/translation.json';
import esTranslation from './data/es/es.json';

i18n
    .use(LanguageDetector) // Detecta el idioma del navegador del usuario
    .use(initReactI18next) // Pasa i18n a react-i18next
    .init({
        resources: {
            en: {
                translation: enTranslation
            },
            es: {
                translation: esTranslation
            }
        },
        fallbackLng: 'es', // Idioma por defecto si la detección falla
        interpolation: {
            escapeValue: false // React ya se encarga de la protección contra XSS
        }
    });

export default i18n;