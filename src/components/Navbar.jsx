// src/components/Navbar.jsx
import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar({ onToggleTheme, theme }) {
  return (
    <nav className="bg-white dark:bg-[#0f172a] text-gray-900 dark:text-white sticky top-0 z-50 transition-colors">

      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold transition-colors duration-300 group hover:text-purple-500">
          Brayan <span className="group-hover:text-purple-700 text-purple-500">Portafolio</span>
        </h1>

        {/* Menú + botón tema */}
        <div className="flex items-center space-x-9 ml-auto">
          <a href="#about" className="hover:text-purple-400 transition-colors">Sobre Mí</a>
          <a href="#skills" className="hover:text-purple-400 transition-colors">Habilidades</a>
          <a href="#projects" className="hover:text-purple-400 transition-colors">Proyectos</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">Contacto</a>
          <button
            onClick={onToggleTheme}
            className="text-lg ml-6 flex items-center"
          >
            {theme === 'dark' ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

