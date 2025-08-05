// src/components/Projects.jsx
import React from 'react';

const projects = [
  { 
    title: 'Portafolio',
    description: 'Diseño personal con React y Tailwind CSS inspirado en el cosmos.',
    image: '/portafolio.jpg.PNG',
    link: 'https://tu-dominio.com/portafolio',
  },
  {
    title: 'Contador de Clics',
    description: 'App para contar clics usando React funcional y hooks.',
    image: '/contador.jpg.PNG',
    link: 'https://tu-dominio.com/contador',
  },
  {
    title: 'CRUD Finanzauto',
    description: 'Gestión de clientes con React, hooks y almacenamiento local.',
    image: '/crud-finanzauto.jpg.PNG',
    link: 'https://tu-dominio.com/crud-finanzauto',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 dark:text-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Mis Proyectos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {p.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {p.description}
                </p>
                <span className="inline-block px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-medium">
                  Ver Proyecto
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  ); // 👈 este paréntesis cerraba el return y te faltaba
}
