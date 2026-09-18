import '../styles/DailyWork.css'

const items = [
  {
    title: 'Ship & onboard tenants',
    desc: 'Scaffold and publish new white-label app flavors for ISP and school clients — icons, resources, keystores, version bumps and signed release builds to Google Play.',
    tags: ['gradle', 'play api', 'keystores'],
  },
  {
    title: 'Release automation',
    desc: 'Maintain the Python + Fastlane pipeline: multi-flavor Gradle builds, streaming build logs, batched Play Store uploads and clean .aab artifact policies.',
    tags: ['python', 'fastlane', 'ci/cd'],
  },
  {
    title: 'Feature development',
    desc: 'Build and refine modules across two Flutter products — dashboards, attendance, marksheets, bill collection and quick-action flows on a feature-first architecture.',
    tags: ['flutter', 'riverpod', 'dio'],
  },
  {
    title: 'Fix & harden',
    desc: 'Track down build failures, UI overflow and payment/bill bugs, and keep large dependency sets compliant through new Android target-SDK requirements.',
    tags: ['debug', 'target-sdk', 'perf'],
  },
]

export default function DailyWork() {
  return (
    <section id="daily" className="section daily">
      <div className="container">
        <div className="section-head">
          <span className="section-index">02</span>
          <h2 className="section-title">What I do daily</h2>
        </div>

        <ol className="daily-list">
          {items.map((it, i) => (
            <li className="daily-item" key={it.title}>
              <span className="daily-num">0{i + 1}</span>
              <div className="daily-body">
                <h3 className="daily-title">{it.title}</h3>
                <p className="daily-desc">{it.desc}</p>
              </div>
              <div className="daily-tags">
                {it.tags.map((t) => (
                  <span className="daily-tag" key={t}>{t}</span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
