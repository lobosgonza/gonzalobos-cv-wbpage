/** @type {import('tailwindcss').Config} */
module.exports = {
  // AÑADE ESTA LÍNEA PARA ACTIVAR EL MODO OSCURO MANUALMENTE
  darkMode: 'class',

  // 1. CONTENT: Le decimos a Tailwind qué archivos escanear
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],

  // 2. THEME: Aquí personalizamos el diseño
  theme: {
    // 'extend' nos permite AÑADIR nuestras personalizaciones sin borrar las de Tailwind
    extend: {

      // 3. COLORS: Tu paleta de colores personalizada
      colors: {
        'primary': '#2563EB',   // Un azul oscuro y profesional para acentos y botones
        'secondary': '#D32F2F', // Un rojo elegante como segundo acento (opcional)
        'background-light': '#F8F9FA', // Fondo para el modo claro (un gris muy suave)
        'background-dark': '#121212',  // Fondo para el modo oscuro (un negro no tan puro)
        'text-light': '#E0E0E0',       // Texto principal para modo oscuro
        'text-dark': '#212121',        // Texto principal para modo claro
      },

      // 4. FONTS: Tus tipografías personalizadas
      fontFamily: {
        // Esta será la fuente por defecto para todo el cuerpo del texto (párrafos)
        // La puedes usar con la clase 'font-sans'
        sans: ['Inter', 'sans-serif'],

        // Esta es una fuente opcional para títulos grandes y destacados
        // La puedes usar con la clase 'font-display'
        display: ['Montserrat', 'sans-serif'],
      }
    },
  },

  // 5. PLUGINS: Aquí se pueden añadir plugins de Tailwind en el futuro
  plugins: [],
}