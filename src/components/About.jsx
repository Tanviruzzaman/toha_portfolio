import '../styles/About.css'
import aboutImg from '../assets/toha2.png'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="header-line"></div>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src={aboutImg} alt="About Tanvir" className="about-img" />
          </div>

          <div className="about-text">
            <p>
              I'm a confident, innovative, and hard-working Mobile Application Developer
              with a strong focus on Flutter and Native Android development. Based in
              Narayanganj, Dhaka, I work at SoftifyBD LTD building scalable, user-centric
              mobile applications.
            </p>

            <p>
              I specialize in Clean Architecture with Riverpod for state management,
              RESTful API integration, payment gateway integration, and multi-role app
              portals. I hold a B.Sc in Software Engineering from Daffodil International
              University and continuously enhance my architectural expertise.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="icon">📱</span>
                <h3>Mobile First</h3>
                <p>Flutter & Native Android expert</p>
              </div>
              <div className="highlight-item">
                <span className="icon">🏗️</span>
                <h3>Clean Architecture</h3>
                <p>Scalable, maintainable codebases</p>
              </div>
              <div className="highlight-item">
                <span className="icon">🔗</span>
                <h3>Integrated</h3>
                <p>REST APIs & payment gateways</p>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/Tanviruzzaman" target="_blank" rel="noopener noreferrer" className="social-link">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/tanviruzzaman-toha-730b8b1b9" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
              <a href="mailto:toha@softifybd.com" className="social-link">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
