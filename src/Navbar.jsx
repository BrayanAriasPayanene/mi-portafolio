import React from 'react';

function Navbar({ onToggleTheme, theme }) {
  return (
    <nav className="navbar">
      <span className="logo">Mi Portafolio</span>
      <button onClick={onToggleTheme} className="theme-toggle">
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </nav>
  );
}

export default Navbar;