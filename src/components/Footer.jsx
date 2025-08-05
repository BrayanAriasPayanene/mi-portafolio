// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="text-center py-6 px-4 border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      <p className="text-sm">&copy; {new Date().getFullYear()} Brayan Arias. Todos los derechos reservados.</p>
    </footer>
  );
}
