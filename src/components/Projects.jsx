// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";

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

// Variantes de movimiento infinito
const sliderVariants = {
  animate: {
    x: ["0%", "-100%"], // de inicio a fin
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 25, // velocidad (ajústala a tu gusto)
        ease: "linear",
      },
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 py-20 bg-white dark:bg-gray-900 dark:text-white transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Mis Proyectos
        </h2>

        {/* Carrusel infinito */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6"
            variants={sliderVariants}
            animate="animate"
          >
            {/* Duplicamos el array para lograr el loop */}
            {[...projects, ...projects].map((p, i) => (
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
