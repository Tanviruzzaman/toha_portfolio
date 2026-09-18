import '../styles/Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Tanvir Toha</h3>
            <p>Android Platform Engineer | Flutter & Android</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="https://github.com/Tanviruzzaman" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/tanviruzzaman-toha-730b8b1b9" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="mailto:toha@softifybd.com">Email</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Skills</h4>
            <ul>
              <li>Native Android (Java)</li>
              <li>Flutter & Dart</li>
              <li>Gradle & Fastlane</li>
              <li>CI/CD & Play API</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Tanvir Toha. All rights reserved.</p>
          <p>Deployed on <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub Pages</a></p>
        </div>
      </div>
    </footer>
  )
}
