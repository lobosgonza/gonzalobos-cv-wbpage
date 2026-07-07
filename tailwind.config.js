/** @type {import('tailwindcss').Config} */
module.exports = {
  // Eliminamos darkMode para comprometernos con una sola atmósfera monolítica premium

  // 1. CONTENT: Le decimos a Tailwind qué archivos escanear
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],

  // 2. THEME: Aquí personalizamos el diseño estructural
  theme: {
    // 'extend' nos permite añadir nuestras personalizaciones sin pisar el core de Tailwind
    extend: {

      // 3. COLORS: Tu nueva paleta de arquitectura moderna
      colors: {
        'primary': '#0d9488',          // Jade Sagrado: señales de giro, enlaces y acentos técnicos
        'concrete': '#eae7e2',         // Cemento crudo: el tono de fondo rústico para todo el sitio
        'structural': '#1a1816',       // Negro piedra: para bloques masivos, botones y textos principales
        'stone-card': '#ffffff',       // Blanco puro: para destacar las tarjetas del fondo texturizado
      },

      // 4. FONTS: La tipografía como elemento de construcción masivo
      // Dentro de tailwind.config.js -> theme -> extend
      fontFamily: {
        // Cuerpo de texto limpio y matemático
        sans: ['Inter', 'sans-serif'],

        // Títulos: Elige 'Oswald' o 'Bebas Neue'. Ambas son verticales y comprimidas.
        display: ['Oswald', 'sans-serif'],

        // Detalles técnicos e ingeniería
        mono: ['Space Mono', 'monospace'],
      }
    },
  },

  // 5. PLUGINS
  plugins: [],
}