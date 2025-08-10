// src/components/Navbar.jsx
import React, { useState } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar({ onToggleTheme, theme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-[#0f172a] text-gray-900 dark:text-white sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-xl font-bold transition-colors duration-300 group hover:text-purple-500">
          Brayan <span className="group-hover:text-purple-700 text-purple-500">Portafolio</span>
        </h1>

        {/* Botón de menú en móvil */}
        <div className="flex items-center md:hidden space-x-4">
          {/* Botón modo claro/oscuro */}
          <button onClick={onToggleTheme} className="text-lg">
            {theme === 'dark' ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon />
            )}
          </button>
          {/* Botón hamburguesa */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menú en pantallas grandes */}
        <div className="hidden md:flex items-center space-x-9">
          <a href="#about" className="hover:text-purple-400 transition-colors">Sobre Mí</a>
          <a href="#skills" className="hover:text-purple-400 transition-colors">Habilidades</a>
          <a href="#projects" className="hover:text-purple-400 transition-colors">Proyectos</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">Contacto</a>
          <button onClick={onToggleTheme} className="text-lg ml-6 flex items-center">
            {theme === 'dark' ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon />
            )}
          </button>
        </div>
      </div>

      {/* Menú desplegable en móvil con animación */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center bg-white dark:bg-[#0f172a] py-4 space-y-4">
          <a onClick={() => setMenuOpen(false)} href="#about" className="hover:text-purple-400 transition-colors">Sobre Mí</a>
          <a onClick={() => setMenuOpen(false)} href="#skills" className="hover:text-purple-400 transition-colors">Habilidades</a>
          <a onClick={() => setMenuOpen(false)} href="#projects" className="hover:text-purple-400 transition-colors">Proyectos</a>
          <a onClick={() => setMenuOpen(false)} href="#contact" className="hover:text-purple-400 transition-colors">Contacto</a>
        </div>
      </div>
    </nav>
  );
}
