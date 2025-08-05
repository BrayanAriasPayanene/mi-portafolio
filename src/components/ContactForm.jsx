import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_jhrkaoa'; // Verifica que este sea el ID correcto de tu servicio en EmailJS
const TEMPLATE_ID = 'template_4arejad'; // Corregido a 'template_4arejad'
const PUBLIC_KEY = 'soWz-mxtAizGFq8sw'; // Verifica que este sea tu Public Key

export default function ContactForm() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('Error al enviar', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-500"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Contáctame</h2>

      <form ref={formRef} onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1">Nombre</label>
          <input
            type="text"
            name="from_name"
            placeholder="Tu nombre"
            required
            className="w-full border rounded px-3 py-2 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Correo</label>
          <input
            type="email"
            name="from_email"
            placeholder="Tu correo"
            required
            className="w-full border rounded px-3 py-2 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Mensaje</label>
          <textarea
            name="message"
            placeholder="Tu mensaje"
            rows="5"
            required
            className="w-full border rounded px-3 py-2 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading && (
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              ></path>
            </svg>
          )}
          {loading ? 'Enviando...' : 'Enviar mensaje'}
        </button>

        {status === 'success' && (
          <p className="text-green-500 font-medium mt-2">¡Mensaje enviado correctamente!</p>
        )}
        {status === 'error' && (
          <p className="text-red-500 font-medium mt-2">Ocurrió un error. Intenta de nuevo.</p>
        )}
      </form>
    </section>
  );
}