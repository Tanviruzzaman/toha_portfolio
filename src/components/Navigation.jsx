import { useState, useEffect } from 'react'
import '../styles/Navigation.css'

const links = [
  { id: 'about', label: 'About' },
  { id: 'daily', label: 'Daily' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav-inner">
        <button className="nav-brand" onClick={() => go('hero')}>
          Tanvir&nbsp;Toha<span className="brand-dot">.</span>
        </button>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.id}>
              <button className="nav-link" onClick={() => go(l.id)}>{l.label}</button>
            </li>
          ))}
          <li>
            <a
              className="nav-resume"
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="TanviruzzamanToha_Resume.pdf"
            >
              Résumé <span className="arrow">↗</span>
            </a>
          </li>
        </ul>

        <button
          className={`nav-toggle ${isOpen ? 'is-open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span><span></span>
        </button>
      </div>

      <div className={`nav-overlay ${isOpen ? 'is-open' : ''}`}>
        {links.map((l, i) => (
          <button key={l.id} className="overlay-link" onClick={() => go(l.id)}>
            <span className="overlay-index">0{i + 1}</span>{l.label}
          </button>
        ))}
        <a
          className="overlay-link"
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          download="TanviruzzamanToha_Resume.pdf"
          onClick={() => setIsOpen(false)}
        >
          <span className="overlay-index">↗</span>Résumé
        </a>
      </div>
    </nav>
  )
}
