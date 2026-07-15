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
    <section id="kristine-contact" className="ke-section">
      <Heading>Get In Touch</Heading>

      <div className="ke-contact-grid">
        <div className="ke-contact-info">
          <div className="ke-card ke-contact-card">
            <p>
              Feel free to reach out for UI/UX collaborations, design advice, or just to say hi!
            </p>
            <p style={{ marginTop: 12 }}>
              Email: <strong>{contact.email}</strong>
            </p>
          </div>
          <div className="ke-social-links">
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="ke-social-btn">
              LinkedIn ↗
            </a>
            <a href={contact.github} target="_blank" rel="noreferrer" className="ke-social-btn">
              GitHub ↗
            </a>
          </div>
        </div>

        <form className="ke-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" placeholder="Your message" rows={4} required />
          <button type="submit" className="ke-submit-btn">Send Message</button>
          {status && <div className="ke-form-status">{status}</div>}
        </form>
      </div>
    </section>
  )
}
