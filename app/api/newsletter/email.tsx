'use client' // Required for client-side rendering in Next.js

import { useState } from 'react'
import emailjs from 'emailjs-com'

// Correct environment variable names for client-side use
const serviceid = process.env.NEXT_PUBLIC_SERVICE_ID || ''
const templateid = process.env.NEXT_PUBLIC_TEMPLATE_ID || ''
const user_id = process.env.NEXT_PUBLIC_EMAILJS_API_KEY || ''

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        serviceid, // EmailJS service ID
        templateid, // EmailJS template ID
        e.target,
        user_id // EmailJS API key (public key)
      )
      .then(
        (result) => {
          alert('Message Sent Successfully!')
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          })
        },
        (error) => {
          console.error('Error:', error)
          alert('An error occurred. Please try again.')
        }
      )

    // Reset the form after submission

    e.target.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mb-4 rounded border border-primary-500 p-2 dark:bg-gray-800"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mb-4 rounded border border-primary-500 p-2 dark:bg-gray-800"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="rounded border border-primary-500 p-2 dark:bg-gray-800"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
        </div>

        {/* Message Field */}
        <div className="flex h-full flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            className="h-full resize-none rounded border border-primary-500 p-2 dark:bg-gray-800"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>
      </div>

      {/* Align submit button to the right */}
      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          className="rounded bg-primary-500 p-3 text-white hover:bg-primary-600 dark:hover:bg-primary-400"
        >
          Send Message
        </button>
      </div>
    </form>
  )
}

export default ContactForm
