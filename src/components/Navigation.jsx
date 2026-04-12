import { useState } from 'react'
import '../styles/Navigation.css'

export default function Navigation({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    const offset = 80
    if (element) {
      const top = element.offsetTop - offset
      window.scrollTo({ top, behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <a href="#home" onClick={() => scrollToSection('hero')} className="brand-link">
            Tanvir Toha
          </a>
        </div>

        <button
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <button onClick={() => scrollToSection('hero')} className="nav-link">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('about')} className="nav-link">
              About
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('skills')} className="nav-link">
              Skills
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('projects')} className="nav-link">
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </button>
          </li>
          <li>
            <a href="/resume.pdf" className="nav-link resume-link" download>
              Download Resume
            </a>
          </li>
          <li>
            <button
              className="dark-toggle"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
