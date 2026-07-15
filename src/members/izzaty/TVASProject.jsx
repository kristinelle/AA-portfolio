import { Link } from 'react-router-dom'
import { projects } from './data.js'
import './portfolio.css'

export default function TVASProject() {
  const project = projects.find(p => p.id === 'utm-tvas')

  return (
    <main className="ib-portfolio" style={{ padding: '40px 24px 120px' }}>
      <div className="ib-section" style={{ maxWidth: '900px' }}>
        <Link to="/member/izzaty" className="ib-btn ib-btn-ghost" style={{ marginBottom: '32px' }}>
          ← Back to Portfolio
        </Link>

        <header style={{ marginBottom: '40px' }}>
          <span className="ib-hero-eyebrow">Academic Case Study</span>
          <h1 className="ib-hero-name" style={{ fontSize: 'clamp(32px, 5vw, 56px)', textAlign: 'left', margin: '16px 0' }}>
            {project.title}
          </h1>
          <p className="ib-hero-tagline" style={{ margin: '0 0 24px', textAlign: 'left' }}>
            {project.shortDescription}
          </p>
        </header>

        <div className="ib-about-grid">
          <div className="ib-panel">
            <h3 className="ib-panel-title">My Role</h3>
            <p style={{ fontSize: '15px', color: '#cbd5e1', fontWeight: '500', marginBottom: '24px' }}>
              {project.role}
            </p>

            <h3 className="ib-panel-title">Overview</h3>
            {project.overview.map((para, i) => (
              <p key={i} style={{ lineHeight: '1.7', color: '#cbd5e1', marginBottom: '20px' }}>
                {para}
              </p>
            ))}

            <h3 className="ib-panel-title ib-panel-title-spaced">Key Features</h3>
            <ul className="ib-list" style={{ gap: '12px' }}>
              {project.features.map((feat, idx) => (
                <li key={idx} className="ib-list-item">
                  <span className="ib-list-role">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="ib-panel" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <h3 className="ib-panel-title">Technologies</h3>
              <ul className="ib-chip-list">
                {project.technologies.map((tech) => (
                  <li key={tech} className="ib-skill-chip">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="ib-panel-title">Contributions</h3>
              <ul className="ib-modal-bullets">
                {project.contributions.map((con, idx) => (
                  <li key={idx} className="ib-modal-bullet-item">
                    {con}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="ib-panel-title">Project Links</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {project.figmaLink && (
                  <a
                    href={project.figmaLink}
                    target="_blank"
                    rel="noreferrer"
                    className="ib-btn ib-btn-primary"
                    style={{ textDecoration: 'none', justifyContent: 'center' }}
                  >
                    View Figma Prototype ↗
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="ib-btn ib-btn-ghost"
                    style={{ textDecoration: 'none', justifyContent: 'center' }}
                  >
                    View Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
