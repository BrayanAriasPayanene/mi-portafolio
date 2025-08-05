// src/components/Contact.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-500"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Contacto</h2>
      <div className="flex flex-wrap justify-center gap-6 text-3xl">
        <a
          href="https://github.com/BrayanAriasPayanene"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/brayandavidariaspayanene"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:correo@ejemplo.com" className="hover:text-red-400 transition">
          <FaEnvelope />
        </a>
        <a
          href="https://wa.me/573102787261"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition"
        >
          <FaWhatsapp />
        </a>
      </div>
    </section>
  );
}
