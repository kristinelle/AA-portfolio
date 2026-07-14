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

  const handleSubmit = (e) => {
    e.preventDefault()

    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`

    setForm(EMPTY_FORM)
  }

  return (
    <section id="contact" className="ib-section" style={{ paddingBottom: '60px' }}>
      <h2 className="ib-section-title">Get In Touch</h2>
      <p className="ib-section-sub">
        Feel free to reach out for collaborations, project discussions, or inquiries.
      </p>

      <div className="ib-contact-grid">
        <div className="ib-panel">
          <h4 className="ib-panel-title">Contact Details</h4>
          <ul className="ib-details">
            {details.map((item) => (
              <li key={item.label} className="ib-detail">
                <span className="ib-detail-label">{item.label}</span>
                {item.href ? (
                  <a className="ib-link" href={item.href}>
                    {item.value}
                  </a>
                ) : (
                  <span className="ib-detail-value">{item.value}</span>
                )}
              </li>
            ))}
          </ul>

          <h4 className="ib-panel-title ib-panel-title-spaced">Social Networks</h4>
          <ul className="ib-socials">
            {contact.socials.map((social) => (
              <li key={social.label}>
                <a className="ib-social" href={social.url} target="_blank" rel="noreferrer">
                  <span className="ib-social-label">{social.label}</span>
                  <span className="ib-social-handle">@{social.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="ib-panel">
          <h4 className="ib-panel-title">Send a Quick Message</h4>
          <form className="ib-form" onSubmit={handleSubmit} noValidate>
            <label className="ib-field">
              <span className="ib-field-label">Your Name</span>
              <input
                className="ib-input"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
              {errors.name && <span className="ib-error">{errors.name}</span>}
            </label>

            <label className="ib-field">
              <span className="ib-field-label">Your Email</span>
              <input
                className="ib-input"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
              {errors.email && <span className="ib-error">{errors.email}</span>}
            </label>

            <label className="ib-field">
              <span className="ib-field-label">Message</span>
              <textarea
                className="ib-input ib-textarea"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
              />
              {errors.message && <span className="ib-error">{errors.message}</span>}
            </label>

            <button className="ib-btn ib-btn-primary" type="submit" style={{ justifyContent: 'center' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
