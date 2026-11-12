// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import i18n from './i18n.js';
import App from './App.jsx';
import './index.css';

// Fija el idioma según la ruta ANTES del primer render para que coincida con el HTML prerenderizado.
const pathLang = window.location.pathname.split('/')[1];
const initialLang = pathLang === 'en' ? 'en' : 'es';
if (i18n.resolvedLanguage !== initialLang) {
	i18n.changeLanguage(initialLang);
}

const container = document.getElementById('root');
const app = (
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// Si existe HTML prerenderizado (/es, /en) se hidrata en lugar de re-renderizar desde cero:
// evita el parpadeo del contenido, mejora LCP/CLS y conserva el DOM que ya indexó Google.
if (container.hasChildNodes()) {
	ReactDOM.hydrateRoot(container, app);
} else {
	ReactDOM.createRoot(container).render(app);
}
