import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    emailjs.sendForm('service_jhrkaoa', 'template_4arejad', form.current, 'soWz-mxtAizGFq8sw')
      .then(() => {
        setLoading(false);
        setStatus('¡Mensaje enviado con éxito!');
        form.current.reset();
      }, () => {
        setLoading(false);
        setStatus('❌ Ocurrió un error. Intenta de nuevo.');
      });
  };

  return (
    <section id="contact" className="relative z-10 py-20 px-6 bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-500">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Contacto</h2>

      <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto flex flex-col gap-4">
        <input type="text" name="from_name" placeholder="Tu nombre" required className="p-3 rounded bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition" />
        <input type="email" name="from_email" placeholder="Tu correo" required className="p-3 rounded bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition" />
        <textarea name="message" placeholder="Tu mensaje" required className="p-3 rounded bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"></textarea>

        <button type="submit" disabled={loading} className={`bg-purple-600 hover:bg-purple-700 text-white rounded py-2 px-4 transition flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}>
          {loading ? (
            <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
            </svg>
          ) : null}
          {loading ? 'Enviando...' : 'Enviar mensaje'}
        </button>

        {status && (
          <p className={`text-center font-semibold ${status.includes('éxito') ? 'text-green-500' : 'text-red-500'} animate-fade-in`}>
            {status}
          </p>
        )}
      </form>

      <div className="flex justify-center gap-6 text-3xl mt-10">
        <a href="https://github.com/BrayanAriasPayanene" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/brayandavidariaspayanene" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
          <FaLinkedin />
        </a>
        <a href="mailto:correo@ejemplo.com" className="hover:text-red-400 transition">
          <FaEnvelope />
        </a>
        <a href="https://wa.me/3102787261" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
          <FaWhatsapp />
        </a>
      </div>
    </section>
  );
}
