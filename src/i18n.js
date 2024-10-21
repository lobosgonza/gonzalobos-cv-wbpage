// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from './locales/en/translation.json';
import translationEs from './locales/es/translation.json';

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: translationEn },
        es: { translation: translationEs },
    },
    lng: 'en', // Idioma por defecto
    fallbackLng: 'en', // Si falta una traducción, usa este idioma
    interpolation: { escapeValue: false }, // Permite usar HTML en los textos
});

export default i18n;