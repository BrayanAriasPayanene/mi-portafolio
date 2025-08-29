// src/components/Projects.jsx
import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  { 
    title: 'Portafolio',
    description: 'Diseño personal con React y Tailwind CSS inspirado en el cosmos.',
    image: '/portafolio.jpg.PNG',
    link: 'https://mi-portafolio-iota-two.vercel.app/',
  },
  {
    title: 'Contador de Clics',
    description: 'App para contar clics usando React funcional y hooks.',
    image: '/contador.jpg.PNG',
    link: 'https://contador-de-clics-beryl.vercel.app/',
  },
  {
    title: 'CRUD Finanzauto',
    description: 'Gestión de clientes con React, hooks y almacenamiento local.',
    image: '/crud-finanzauto.jpg.PNG',
    link: 'https://crud-finanzauto.vercel.app/crear',
  },
  {
    title: 'Tienda tecnológica',
    description: 'Aplicación de gestión de inventario y clientes con React y Hooks.',
    image: '/tecnologica.jpg',
    link: 'https://inventario-frontend-eight.vercel.app/',
  },
  {
    title: 'Api Clima',
    description: 'Aplicación web que consume datos de una API de clima en tiempo real.',
    image: '/api-clima.jpg',
    link: 'https://api-clima-3d.vercel.app/',
  },
];

export default function Projects() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 320; // ajustado para alinear con las cards
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  // Autoplay cada 4 segundos (se detiene en hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      scroll('right');
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      id="projects"
      className="relative z-10 py-20 bg-white dark:bg-gray-900 dark:text-white transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Mis Proyectos
        </h2>

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Botón izquierda */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700/60 hover:bg-gray-800 text-white rounded-full p-2 z-10"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Contenedor de proyectos con scroll oculto */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          >
            {projects.map((p, i) => (
              <a
                key={i}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[280px] sm:min-w-[320px] lg:min-w-[360px] bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.05] hover:shadow-2xl transition-transform duration-500"
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
                  <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                    {p.description}
                  </p>
                  <span className="inline-block px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-medium">
                    Ver Proyecto
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Botón derecha */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700/60 hover:bg-gray-800 text-white rounded-full p-2 z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
