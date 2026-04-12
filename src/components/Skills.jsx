import '../styles/Skills.css'

export default function Skills() {
  const skillCategories = [
    {
      icon: '📱',
      category: 'Mobile Development',
      skills: ['Flutter', 'Dart', 'Native Android', 'Java']
    },
    {
      icon: '🏗️',
      category: 'Architecture & Patterns',
      skills: ['Clean Architecture', 'MVVM', 'Riverpod', 'Modular Design']
    },
    {
      icon: '🔗',
      category: 'Backend & Integration',
      skills: ['REST APIs', 'Payment Gateway', 'Python', 'Git']
    },
    {
      icon: '🛠️',
      category: 'Platforms & Tools',
      skills: ['Mac OS', 'Wwise', 'Firebase', 'API Gateway']
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
              Specialized in building scalable Flutter and Native Android applications using
              Clean Architecture and Riverpod for state management. Experienced in developing
              multi-role portals (Admin, Manager, Client) with RESTful API and payment gateway
              integration for real-world production environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
