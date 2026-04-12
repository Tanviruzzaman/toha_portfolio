import '../styles/Contact.css'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you can add email service integration (EmailJS, Formspree, etc.)
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    
    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <div className="header-line"></div>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities. 
              Feel free to reach out through any of the channels below.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <span className="icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:toha@softifybd.com">toha@softifybd.com</a>
                </div>
              </div>

              <div className="contact-method">
                <span className="icon">💼</span>
                <div>
                  <h4>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/tanviruzzaman-toha-730b8b1b9" target="_blank" rel="noopener noreferrer">
                    Tanvir Toha
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <span className="icon">💻</span>
                <div>
                  <h4>GitHub</h4>
                  <a href="https://github.com/Tanviruzzaman" target="_blank" rel="noopener noreferrer">
                    Tanviruzzaman
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                ✓ Thank you! I'll get back to you soon.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
