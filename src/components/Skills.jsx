import '../styles/Skills.css'

const groups = [
  { category: 'Languages', skills: ['Java', 'Dart', 'Python', 'C'] },
  { category: 'Android (Native)', skills: ['Android SDK', 'MVVM', 'Dagger 2', 'Retrofit / OkHttp', 'Coroutines', 'Paging 3', 'WorkManager'] },
  { category: 'Flutter', skills: ['Riverpod', 'Dio', 'go_router', 'Feature-first Architecture', 'i18n / RTL'] },
  { category: 'Platform & DevOps', skills: ['Gradle (multi-flavor)', 'Fastlane', 'CI/CD', 'Play Console & Play API', 'Firebase (FCM, Analytics)', 'Git'] },
  { category: 'Integrations', skills: ['9 Payment Gateways', 'SignalR', 'MikroTik Java API', 'ESC/POS & Sunmi Printing'] },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head">
          <span className="section-index">03</span>
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="skills-table">
          {groups.map((g) => (
            <div className="skill-row" key={g.category}>
              <h3 className="skill-cat">{g.category}</h3>
              <div className="skill-tags">
                {g.skills.map((s) => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="skills-note">
          I build and maintain white-label mobile platforms at scale — a single Java Android codebase
          shipping 1,000+ branded apps, and a 135K-LOC Flutter school ERP — owning the build tooling,
          release automation and hardware integrations end to end.
        </p>
      </div>
    </section>
  )
}
