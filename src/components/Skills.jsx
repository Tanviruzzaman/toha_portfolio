import '../styles/Skills.css'

export default function Skills() {
  const skillCategories = [
    {
      icon: '💻',
      category: 'Languages',
      skills: ['Java', 'Dart', 'Python', 'C']
    },
    {
      icon: '🤖',
      category: 'Android (Native)',
      skills: ['Android SDK', 'MVVM', 'Dagger 2', 'Retrofit / OkHttp', 'Coroutines', 'Paging 3', 'WorkManager']
    },
    {
      icon: '📱',
      category: 'Flutter',
      skills: ['Riverpod', 'Dio', 'go_router', 'Feature-first Architecture', 'i18n / RTL']
    },
    {
      icon: '⚙️',
      category: 'Platform & DevOps',
      skills: ['Gradle (multi-flavor)', 'Fastlane', 'CI/CD', 'Play Console & Play API', 'Firebase (FCM, Analytics)', 'Git']
    },
    {
      icon: '🔗',
      category: 'Integrations',
      skills: ['9 Payment Gateways', 'SignalR', 'MikroTik Java API', 'ESC/POS & Sunmi Printing']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2>Skills &amp; Expertise</h2>
          <div className="header-line"></div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, index) => (
            <div key={index} className="skill-category">
              <div className="skill-category-header">
                <div className="skill-category-icon">{cat.icon}</div>
                <h3 className="category-title">{cat.category}</h3>
              </div>
              <div className="skills-list">
                {cat.skills.map((skill, idx) => (
                  <div key={idx} className="skill-tag">{skill}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-highlight">
          <div className="highlight-card">
            <h3>Technical Proficiency</h3>
            <p>
              I build and maintain white-label mobile platforms at scale — a single Java Android
              codebase shipping 1,000+ separately branded apps, and a 135K-LOC Flutter school ERP
              on a feature-first architecture. I own the build tooling and release automation
              (multi-flavor Gradle, Python + Fastlane, direct Play API publishing), integrate
              payment gateways and router/POS hardware, and keep large dependency sets compliant
              through Android 14/15/16 target-SDK migrations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
