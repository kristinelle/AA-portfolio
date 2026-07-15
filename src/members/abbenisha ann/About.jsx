import { profile, education, careerInterests, achievements } from './data.js'

export default function About() {
  return (
    <section id="about" className="aa-section">
      <h2 className="aa-section-title">About Me</h2>

      <div className="aa-intro">
        <h3 className="aa-intro-name">{profile.name}</h3>
        <p className="aa-intro-role">{profile.role}</p>
        {profile.summary.map((paragraph) => (
          <p key={paragraph} className="aa-intro-text">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="aa-about-grid">
        <div className="aa-panel">
          <h4 className="aa-panel-title">Education</h4>
          <ul className="aa-timeline">
            {education.map((item) => (
              <li key={item.institution} className="aa-timeline-item">
                <p className="aa-timeline-period">{item.period}</p>
                <p className="aa-timeline-heading">{item.institution}</p>
                <p className="aa-timeline-detail">{item.qualification}</p>
                <span className="aa-badge">{item.result}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="aa-panel">
          <h4 className="aa-panel-title">Career Interests</h4>
          <ul className="aa-chip-list">
            {careerInterests.map((interest) => (
              <li key={interest} className="aa-badge">
                {interest}
              </li>
            ))}
          </ul>

          <h4 className="aa-panel-title aa-panel-title-spaced">Achievements</h4>
          <ul className="aa-achievements">
            {achievements.map((item) => (
              <li key={item.title + item.detail} className="aa-achievement">
                <span className="aa-achievement-title">{item.title}</span>
                <span className="aa-achievement-detail">{item.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
