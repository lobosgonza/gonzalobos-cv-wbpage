import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 1. AHORA AMBOS IMPORTAN EL MISMO NOMBRE DE ARCHIVO
import enTranslation from './data/en/translation.json';
import esTranslation from './data/es/translation.json'; // <-- CORREGIDO

i18n
    .use(LanguageDetector) // Detecta el idioma del navegador
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
        supportedLngs: ['es', 'en'], // Idiomas soportados
        fallbackLng: 'es', // Idioma de respaldo (puedes dejar 'es' o 'en')
        interpolation: {
            escapeValue: false
        },
        // 2. AÑADIR ESTO para evitar un error común de "React Suspense"
        react: {
            useSuspense: false
        }
    });

export default i18n;