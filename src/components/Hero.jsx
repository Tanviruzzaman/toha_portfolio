import '../styles/Hero.css'
import profileImg from '../assets/toha1.png'

const stats = [
  { n: '1,000+', l: 'apps shipped to play' },
  { n: '9', l: 'payment gateways' },
  { n: '3+', l: 'years experience' },
]

export default function Hero() {
  const go = (id) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <div className="hero-top">
          <span className="eyebrow">Portfolio — 2026</span>
          <span className="hero-status">
            <span className="status-dot"></span> Available for opportunities
          </span>
        </div>

        <h1 className="hero-title display-xl">
          Android<br />Platform<br />Engineer<span className="title-dot">.</span>
        </h1>

        <div className="hero-lower">
          <div className="hero-lead-col">
            <p className="hero-lead">
              I'm <strong>Tanvir&nbsp;Toha</strong> — I build white-label mobile platforms that ship
              <strong> 1,000+</strong> separately branded apps to Google&nbsp;Play from a single Java
              codebase, with the tooling and automation that keep them shipping.
            </p>
            <div className="hero-actions">
              <button className="btn" onClick={() => go('work')}>
                View work <span className="arrow">↓</span>
              </button>
              <button className="btn btn-ghost" onClick={() => go('contact')}>
                Get in touch
              </button>
            </div>
          </div>

          <div className="hero-photo">
            <img src={profileImg} alt="Tanvir Toha" />
            <span className="hero-photo-tag">Softify&nbsp;BD Ltd</span>
          </div>
        </div>

        <div className="hero-stats">
          {stats.map((s) => (
            <div className="hero-stat" key={s.l}>
              <span className="hero-stat-n">{s.n}</span>
              <span className="hero-stat-l">{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
