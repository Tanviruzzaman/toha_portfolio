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
              I'm an Android Platform Engineer at Softify BD Ltd, based in Narayanganj, Dhaka,
              working on production platforms for ISP and education clients. I'm the lead
              contributor on a white-label Android platform that ships 1,000+ separately
              branded, separately signed apps to Google Play from a single Java codebase —
              along with the Gradle tooling, Fastlane release automation, payment and hardware
              integrations that keep it shipping.
            </p>

            <p>
              My day-to-day spans multi-flavor Gradle builds, a Python + Fastlane release
              pipeline, 9 integrated payment gateways, MikroTik router monitoring over SignalR,
              and thermal/POS printing — plus a 135K-LOC Flutter school ERP built on a
              feature-first architecture with Riverpod. I hold a B.Sc in Software Engineering
              from Daffodil International University.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="icon">📱</span>
                <h3>Platform Scale</h3>
                <p>1,000+ white-label apps, one codebase</p>
              </div>
              <div className="highlight-item">
                <span className="icon">⚙️</span>
                <h3>Release Automation</h3>
                <p>Python + Fastlane, unattended Play deploys</p>
              </div>
              <div className="highlight-item">
                <span className="icon">🔗</span>
                <h3>Integrated</h3>
                <p>9 payment gateways, MikroTik & POS hardware</p>
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
