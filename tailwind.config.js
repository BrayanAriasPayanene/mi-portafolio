/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <-- Esto es obligatorio
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- Asegúrate que esté bien la ruta
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
