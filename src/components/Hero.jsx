import '../styles/Hero.css'
import profileImg from '../assets/toha1.png'

const techStack = ['Java', 'Dart', 'Android SDK', 'Flutter', 'Riverpod', 'Gradle', 'Fastlane', 'Firebase']

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    const offset = 80
    if (element) {
      const top = element.offsetTop - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-bg-decoration">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for Opportunities
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Tanvir Toha</span>
          </h1>
          <p className="hero-subtitle">
            Android Platform Engineer
            <br />
            <span className="subtitle-accent">White-label Mobile Platforms · Flutter &amp; Android</span>
          </p>
          <p className="hero-description">
            I build production platforms for ISP and education clients — including a white-label
            Android platform that ships 1,000+ separately branded apps to Google Play from a single
            Java codebase, with the build tooling, release automation, payment and hardware
            integrations that keep it shipping.
          </p>

          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
            <a href={`${import.meta.env.BASE_URL}resume.pdf`} className="btn btn-outline" download="TanviruzzamanToha_Resume.pdf">
              Resume
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">1,000+</span>
              <span className="stat-label">Apps Shipped to Play</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">9</span>
              <span className="stat-label">Payment Gateways</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>

          <div className="tech-stack">
            {techStack.map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>

        <div className="hero-image">
          <div className="image-ring ring-3"></div>
          <div className="image-ring ring-2"></div>
          <div className="image-ring ring-1"></div>
          <div className="image-wrapper">
            <img src={profileImg} alt="Tanvir Toha" className="profile-image" />
          </div>
          <div className="image-company-badge">
            <span>SoftifyBD LTD</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
        <p>Scroll to explore</p>
        <div className="arrow">↓</div>
      </div>
    </section>
  )
}
