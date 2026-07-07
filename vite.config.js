import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { vitePrerenderPlugin } from 'vite-prerender-plugin';
import path from 'path';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        plugins: [
            react(),
            // Integración del nuevo plugin
            vitePrerenderPlugin({
                // Tu index.html usa <div id="root">, así que apuntamos ahí
                renderTarget: '#root',
                // Ruta absoluta hacia el script que crearemos en el siguiente paso
                prerenderScript: path.resolve(process.cwd(), 'src/prerender.jsx'),
                // Forzamos a que genere también de forma explícita tus rutas de idioma
                additionalPrerenderRoutes: ['/es', '/en']
            })
        ],
        define: {
            'process.env.REACT_APP_EMAILJS_SERVICE_ID': JSON.stringify(env.REACT_APP_EMAILJS_SERVICE_ID),
            'process.env.REACT_APP_EMAILJS_TEMPLATE_ID': JSON.stringify(env.REACT_APP_EMAILJS_TEMPLATE_ID),
            'process.env.REACT_APP_EMAILJS_PUBLIC_KEY': JSON.stringify(env.REACT_APP_EMAILJS_PUBLIC_KEY),
        },
    };
});