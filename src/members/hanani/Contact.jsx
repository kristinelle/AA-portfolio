import { useState } from 'react'
import { contact } from './data.js'
import { Heading } from './About.jsx'

export default function Contact() {
  const [status, setStatus] = useState('')
 
  function handleSubmit(e) {
    e.preventDefault()
    setStatus("Thanks! I'll get back to you soon.")
    e.target.reset()
  }

  return (
    <section id="hanani-contact">
      <Heading>Get In Touch</Heading>

      <div className="hnn-contact-grid">
        <div>
          <div className="hnn-card" style={{ marginBottom: 16 }}>
            <p>
              Reach me directly at <strong>{contact.email}</strong>, or find me on:
            </p>
          </div>
          <div className="hnn-social-links">
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href={contact.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>

        <form className="hnn-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" placeholder="Your message" rows={4} required />
          <button type="submit">Send Message</button>
          <div className="hnn-form-status">{status}</div>
        </form>
      </div>
    </section>
  )
}
