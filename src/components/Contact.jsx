import '../styles/Contact.css'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name || 'someone'}`)
    const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`)
    window.location.href = `mailto:toha@softifybd.com?subject=${subject}&body=${body}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-head">
          <span className="section-index">05</span>
          <h2 className="section-title">Contact</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-left">
            <p className="contact-statement display-lg">
              Let's build something<span className="title-dot">.</span>
            </p>
            <a className="contact-email" href="mailto:toha@softifybd.com">toha@softifybd.com</a>
            <div className="contact-socials">
              <a className="link-arrow" href="https://www.linkedin.com/in/tanvir-toha-506806306" target="_blank" rel="noopener noreferrer">
                LinkedIn <span className="arrow">↗</span>
              </a>
              <a className="link-arrow" href="https://github.com/Tanviruzzaman" target="_blank" rel="noopener noreferrer">
                GitHub <span className="arrow">↗</span>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@email.com" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="What's on your mind?" rows="4"></textarea>
            </div>
            <button type="submit" className="btn">
              {submitted ? 'Opening your mail app…' : 'Send message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
