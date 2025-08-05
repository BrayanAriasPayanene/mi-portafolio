// src/components/Navbar.jsx
import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar({ onToggleTheme, theme }) {
  return (
    <nav className="p-4 flex justify-between items-center bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white sticky top-0 z-50 transition-colors">
      <h1 className="text-xl font-bold">Brayan Arias</h1>
      <div className="flex space-x-4 items-center">
        <a href="#about" className="hover:text-purple-400 transition-colors">Sobre Mí</a>
        <a href="#skills" className="hover:text-purple-400 transition-colors">Habilidades</a>
        <a href="#projects" className="hover:text-purple-400 transition-colors">Proyectos</a>
        <a href="#contact" className="hover:text-purple-400 transition-colors">Contacto</a>
        <button 
        onClick={onToggleTheme} 
        className="text-yellow-400 hover:text-yellow-500 transition">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
}