import '../styles/Projects.css'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Edufy — Education Management System',
      description: 'Multi-role app with Admin, Student, and Teacher portals. Students access class & exam routines, leave applications, discipline history, and payment receipts. Built with Flutter Clean Architecture and Riverpod.',
      technologies: ['Flutter', 'Dart', 'Riverpod', 'Clean Architecture', 'REST API'],
      link: '#',
      type: 'Featured'
    },
    {
      id: 2,
      title: 'ISP Digital — ISP Management System',
      description: 'Full-featured ISP platform with Admin, MAC (Manager/Accountant), and Client portals. Includes bill collection, POS printer integration, live zone-wise analytics, fund recharge, and payment gateway.',
      technologies: ['Flutter', 'Android', 'Payment Gateway', 'REST API', 'Analytics'],
      link: '#',
      type: 'Featured'
    },
    {
      id: 3,
      title: 'Admin & Billing Portal',
      description: 'Comprehensive admin module featuring bill collection, billing lists, POS printer integration, task management, support ticketing, live zone-wise client analytics, and accounting reports.',
      technologies: ['Flutter', 'Dart', 'MVVM', 'REST API', 'Analytics'],
      link: '#',
      type: 'Module'
    },
    {
      id: 4,
      title: 'Client Payment Portal',
      description: 'Client-facing module with invoice and payment history, online payment processing, package management, ping testing, news and events feed, and profile management.',
      technologies: ['Flutter', 'Riverpod', 'Payment Gateway', 'Clean Architecture'],
      link: '#',
      type: 'Module'
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
