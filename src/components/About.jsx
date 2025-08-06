import React from 'react';
import { motion as Motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <Motion.section
      id="about"
      className="py-16 px-4 bg-white dark:bg-[#0f172a] text-gray-900 dark:text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-5xl mx-auto">
        <Motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Sobre Mí
        </Motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          
          <Motion.img
            src="/Fto.jpg.jpeg"
            alt="Foto de Brayan"
            className="w-48 h-48 rounded-full object-cover border-4 border-purple-500 shadow-lg hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />

          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h3 className="text-2xl font-semibold mb-4">Brayan Arias</h3>
            <p className="mb-6">Desarrollador Frontend con enfoque en React, Tailwind y experiencias web modernas.</p>
            
            <ul className="space-y-2 text-sm">
              <li><span className="font-semibold">Nombre completo:</span> Brayan Arias</li>
              <li><span className="font-semibold">Edad:</span> 27 años</li>
              <li><span className="font-semibold">Nacionalidad:</span> Colombiano</li>
              <li><span className="font-semibold">Idiomas:</span> Español, Inglés básico</li>
              <li><span className="font-semibold">Ciudad:</span> Bogotá, Colombia</li>
              <li><span className="font-semibold">Teléfono:</span> +57 3102787261</li>
              <li><span className="font-semibold">Email:</span> bra201315@hotmail.com</li>
            </ul>

            {/* Botón de descarga del CV */}
            <Motion.a
              href="/BrayanAriasCV.pdf.pdf"
              download
              className="inline-block mt-6 px-6 py-3 bg-purple-500 text-white font-semibold rounded-full shadow-md hover:bg-purple-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Descargar CV
            </Motion.a>
          </Motion.div>
        </div>
      </div>
    </Motion.section>
  );
}
