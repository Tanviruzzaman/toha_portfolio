import '../styles/Projects.css'

const projects = [
  {
    title: 'ISP Digital — White-label ISP Platform',
    type: 'Platform',
    description: 'A single Java codebase shipping 1,000+ separately branded, separately signed apps to Google Play, with three role-based apps in one binary. Nine payment gateways behind a common abstraction, real-time MikroTik bandwidth monitoring over SignalR, and Bluetooth ESC/POS + Sunmi thermal receipt printing. Top contributor: 363 of 730 commits.',
    tech: ['Android SDK', 'Java', 'MVVM', 'Dagger 2', 'Firebase', 'SignalR'],
  },
  {
    title: 'Edufy — School Management Platform',
    type: 'Platform',
    description: 'A 135K-LOC Flutter school ERP with 40+ modules, shipping as 300 white-label apps. Admin, Teacher and Student roles cover notices, leave approval, discipline, documents, attendance and marksheets — built feature-first with Riverpod, Dio and go_router, a token interceptor, session invalidation, encrypted storage and 5-language i18n including RTL.',
    tech: ['Flutter', 'Dart', 'Riverpod', 'Dio', 'go_router', 'i18n / RTL'],
  },
  {
    title: 'Release Automation Pipeline',
    type: 'Tooling',
    description: 'A Python + Fastlane pipeline — keystore generation, flavor scaffolding, icon/resource generation, batched Gradle builds and direct Play Store upload — that cut new-tenant onboarding from a manual multi-hour process to a single command, turning a 300-app release into one unattended run.',
    tech: ['Python', 'Fastlane', 'Gradle', 'Google Play API'],
  },
  {
    title: 'Build-time Firebase Config Resolver',
    type: 'Tooling',
    description: 'A Gradle task that auto-selects the correct google-services.json from 37 Firebase projects per applicationId and fails the build on an unregistered app — eliminating a recurring class of production bugs where a mismatched config silently broke push notifications and login for an entire tenant.',
    tech: ['Gradle', 'Java', 'Firebase', 'Build Tooling'],
  },
]

export default function Projects() {
  return (
    <section id="work" className="section work">
      <div className="container">
        <div className="section-head">
          <span className="section-index">04</span>
          <h2 className="section-title">Selected work</h2>
        </div>

        <div className="work-list">
          {projects.map((p, i) => (
            <article className="work-item" key={p.title}>
              <span className="work-num">0{i + 1}</span>
              <div className="work-main">
                <div className="work-heading">
                  <h3 className="work-title">{p.title}</h3>
                  <span className="work-type">{p.type}</span>
                </div>
                <p className="work-desc">{p.description}</p>
                <div className="work-tech">
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="work-foot">
          These are private, production platforms — code lives on a company GitLab.{' '}
          <a className="link-arrow" href="https://github.com/Tanviruzzaman" target="_blank" rel="noopener noreferrer">
            More on GitHub <span className="arrow">↗</span>
          </a>
        </p>
      </div>
    </section>
  )
}
