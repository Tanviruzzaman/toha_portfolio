import '../styles/About.css'

const facts = [
  ['Role', 'Android Platform Engineer'],
  ['Company', 'Softify BD Ltd'],
  ['Based in', 'Narayanganj, Dhaka, BD'],
  ['Education', 'B.Sc. Software Engineering, DIU'],
  ['Focus', 'White-label platforms · Release automation'],
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-head">
          <span className="section-index">01</span>
          <h2 className="section-title">About</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p className="about-lead">
              I build production mobile platforms for ISP and education clients — and I care about the
              parts that make them ship reliably at scale.
            </p>
            <p>
              I'm the lead contributor on a white-label Android platform that ships 1,000+ separately
              branded, separately signed apps to Google Play from a single Java codebase, along with
              the Gradle tooling, Fastlane release automation, and payment and hardware integrations
              that keep it moving.
            </p>
            <p>
              Day to day I work across native Android and a 135K-LOC Flutter school ERP — multi-flavor
              builds, a Python + Fastlane release pipeline, nine payment gateways, MikroTik router
              monitoring over SignalR, and thermal/POS printing.
            </p>

            <div className="about-social">
              <a className="link-arrow" href="https://github.com/Tanviruzzaman" target="_blank" rel="noopener noreferrer">
                GitHub <span className="arrow">↗</span>
              </a>
              <a className="link-arrow" href="https://www.linkedin.com/in/tanviruzzaman-toha-730b8b1b9" target="_blank" rel="noopener noreferrer">
                LinkedIn <span className="arrow">↗</span>
              </a>
              <a className="link-arrow" href="mailto:toha@softifybd.com">
                Email <span className="arrow">↗</span>
              </a>
            </div>
          </div>

          <dl className="about-facts">
            {facts.map(([k, v]) => (
              <div className="fact-row" key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
