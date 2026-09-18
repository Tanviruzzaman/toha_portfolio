import '../styles/Projects.css'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'ISP Digital — White-label ISP Platform',
      description: 'A single Java codebase shipping 1,000+ separately branded, separately signed apps to Google Play, with three role-based apps in one binary (subscriber, ISP admin, MAC reseller). I integrated 9 payment gateways behind a common abstraction, real-time MikroTik bandwidth monitoring over SignalR, and Bluetooth ESC/POS + Sunmi thermal receipt printing. Top contributor: 363 of 730 commits.',
      technologies: ['Android SDK', 'Java', 'MVVM', 'Dagger 2', 'Retrofit', 'Firebase', 'SignalR', 'MikroTik'],
      link: '#',
      type: 'Featured'
    },
    {
      id: 2,
      title: 'Edufy — School Management Platform',
      description: 'A 135K-LOC Flutter school ERP with 40+ modules, shipping as 300 white-label apps. Admin, Teacher and Student roles cover notices, leave approval, discipline records, document management, attendance and marksheets. Built feature-first with Riverpod, Dio and go_router, a token interceptor, session invalidation and encrypted storage, plus 5-language i18n including RTL (Bangla, Arabic, Urdu, Turkish).',
      technologies: ['Flutter', 'Dart', 'Riverpod', 'Dio', 'go_router', 'i18n / RTL', 'REST API'],
      link: '#',
      type: 'Featured'
    },
    {
      id: 3,
      title: 'Release Automation Pipeline',
      description: 'A Python + Fastlane pipeline (keystore generation, flavor scaffolding, icon/resource generation, batched Gradle builds and direct Play Store upload) that cut new-tenant onboarding and app updates from a manual multi-hour process to a single command — turning a 300-app release into one unattended run.',
      technologies: ['Python', 'Fastlane', 'Gradle', 'Google Play API', 'CI/CD'],
      link: '#',
      type: 'Tooling'
    },
    {
      id: 4,
      title: 'Build-time Firebase Config Resolver',
      description: 'A Gradle task that hooks into processGoogleServices to auto-select the correct google-services.json from 37 Firebase projects per applicationId, and fails the build on an unregistered app — eliminating a recurring class of production bugs where a mismatched config silently broke push notifications and login for an entire tenant.',
      technologies: ['Gradle', 'Java', 'Firebase', 'Build Tooling'],
      link: '#',
      type: 'Tooling'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <div className="header-line"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card-top"></div>
              <div className="project-card-body">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="project-badge">{project.type}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">
                  Explore Project →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <p>More projects available on <a href="https://github.com/Tanviruzzaman" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </div>
      </div>
    </section>
  )
}
