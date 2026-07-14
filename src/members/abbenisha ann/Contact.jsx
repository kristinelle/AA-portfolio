import { useState } from 'react'
import { contact } from './data.js'

const EMPTY_FORM = { name: '', email: '', message: '' }

const details = [
  { label: 'Name', value: contact.name },
  { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { label: 'Phone', value: contact.phone, href: `tel:${contact.phone.replace(/[^+\d]/g, '')}` },
  { label: 'Location', value: contact.location },
]

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const validate = () => {
    const found = {}
    if (!form.name.trim()) found.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) found.email = 'Please enter a valid email.'
    if (!form.message.trim()) found.message = 'Please write a message.'
    return found
  }

    // Open mail client with prefilled body
  const handleSubmit = (e) => {
    e.preventDefault()

    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return

    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`

    setForm(EMPTY_FORM)
  }

  return (
    <section id="contact" className="aa-section">
      <h2 className="aa-section-title">Contact</h2>
      <p className="aa-section-sub">
        Open to internships, collaborations and anything involving 3D, XR or AI.
      </p>

      <div className="aa-contact-grid">
        <div className="aa-panel">
          <h4 className="aa-panel-title">Contact Information</h4>

          <ul className="aa-details">
            {details.map((item) => (
              <li key={item.label} className="aa-detail">
                <span className="aa-detail-label">{item.label}</span>
                {item.href ? (
                  <a className="aa-link" href={item.href}>
                    {item.value}
                  </a>
                ) : (
                  <span className="aa-detail-value">{item.value}</span>
                )}
              </li>
            ))}
          </ul>

          <h4 className="aa-panel-title aa-panel-title-spaced">Social</h4>
          <ul className="aa-socials">
            {contact.socials.map((social) => (
              <li key={social.label}>
                <a className="aa-social" href={social.url} target="_blank" rel="noreferrer">
                  <span className="aa-social-label">{social.label}</span>
                  <span className="aa-social-handle">@{social.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="aa-panel">
          <h4 className="aa-panel-title">Send a Message</h4>

          <form className="aa-form" onSubmit={handleSubmit} noValidate>
            <label className="aa-field">
              <span className="aa-field-label">Name</span>
              <input
                className="aa-input"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />
              {errors.name && <span className="aa-error">{errors.name}</span>}
            </label>

            <label className="aa-field">
              <span className="aa-field-label">Email</span>
              <input
                className="aa-input"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
              {errors.email && <span className="aa-error">{errors.email}</span>}
            </label>

            <label className="aa-field">
              <span className="aa-field-label">Message</span>
              <textarea
                className="aa-input aa-textarea"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here"
              />
              {errors.message && <span className="aa-error">{errors.message}</span>}
            </label>

            <button className="aa-btn aa-btn-primary" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
