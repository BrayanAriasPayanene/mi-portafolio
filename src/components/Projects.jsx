// src/components/Projects.jsx
import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'Portafolio',
      description: 'Diseño personal con React y Tailwind CSS inspirado en el cosmos.',
      image: '/portafolio.jpg.PNG',
      link: 'https://tusitio.com/portafolio',
    },
    {
      title: 'Contador de Clics',
      description: 'App básica para contar clics usando componentes funcionales en React.',
      image: '/contador.jpg.PNG',
      link: 'https://tusitio.com/contador-de-clics',
    },
    {
      title: 'CRUD Finanzauto',
      description: 'Gestión de clientes con React, hooks y localStorage.',
      image: '/crud-finanzauto.jpg.PNG',
      link: 'https://tusitio.com/crud-finanzauto',
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-500"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Proyectos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 w-full"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-purple-500 hover:text-purple-700 font-semibold"
              >
                Ver Proyecto
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
