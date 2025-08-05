// src/components/ContactForm.jsx
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_jhrkaoa'      // tu service_id
const TEMPLATE_ID = 'plantilla_4arejad'     // reemplaza con tu template_id
const PUBLIC_KEY = 'soWz-mxtAizGFq8sw'        // reemplaza con tu public key

export default function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      setStatus('success')
      setFormData({ from_name: '', from_email: '', message: '' })
    } catch (error) {
      console.error('Error al enviar', error)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-500">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Contáctame</h2>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1">Nombre</label>
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Correo</label>
          <input
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Mensaje</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full border rounded px-3 py-2 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition disabled:opacity-50"
        >
          {loading ? 'Enviando...' : 'Enviar mensaje'}
        </button>

        {status === 'success' && <p className="text-green-500">¡Mensaje enviado correctamente!</p>}
        {status === 'error' && <p className="text-red-500">Ocurrió un error. Intenta de nuevo.</p>}
      </form>
    </section>
  )
}
