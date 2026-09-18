import '../styles/Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <span className="footer-name">Tanvir Toha<span className="brand-dot">.</span></span>
          <div className="footer-links">
            <a href="https://github.com/Tanviruzzaman" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/tanviruzzaman-toha-730b8b1b9" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:toha@softifybd.com">Email</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} Tanvir Toha — Android Platform Engineer</span>
          <span>Narayanganj, Dhaka · BD</span>
        </div>
      </div>
    </footer>
  )
}
