import { education, leadership, awards } from './data.js'

export default function About() {
  return (
    <section id="about" className="ib-section">
      <h2 className="ib-section-title">About Me &amp; Achievements</h2>
      <p className="ib-section-sub">A summary of my academic history, leadership roles, and global exposures.</p>

      <div className="ib-about-grid">
        <div className="ib-panel">
          <h3 className="ib-panel-title">Education</h3>
          <ul className="ib-timeline">
            {education.map((item) => (
              <li key={item.institution} className="ib-timeline-item">
                <p className="ib-timeline-period">{item.period}</p>
                <p className="ib-timeline-heading">{item.institution}</p>
                <p className="ib-timeline-detail">{item.qualification}</p>
                <span className="ib-badge">{item.result}</span>
              </li>
            ))}
          </ul>

          <h3 className="ib-panel-title ib-panel-title-spaced">Honours &amp; Awards</h3>
          <ul className="ib-timeline">
            {awards.map((award) => (
              <li key={award.title} className="ib-timeline-item">
                <p className="ib-timeline-period">{award.period}</p>
                <p className="ib-timeline-heading">{award.title}</p>
                <p className="ib-timeline-detail">{award.institution}</p>
                <p className="ib-timeline-detail" style={{ fontSize: '13.5px', marginTop: '4px' }}>
                  {award.details}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="ib-panel">
          <h3 className="ib-panel-title">Leadership &amp; Involvement</h3>
          <ul className="ib-list">
            {leadership.map((item, idx) => (
              <li key={idx} className="ib-list-item">
                <span className="ib-list-role">{item.role}</span>
                <span className="ib-list-org">{item.organization}</span>
                <span className="ib-list-period">{item.period}</span>
                <p className="ib-list-details">{item.details}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
