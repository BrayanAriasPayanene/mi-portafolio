// tailwind.config.js
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // opcional: unifica tonos si quieres que "dark" use exactamente los mismos grises ajustando aquí
        'bg-default': 'var(--tw-bg-opacity)', 
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [],
}
