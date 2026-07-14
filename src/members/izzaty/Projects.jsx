import { useState } from 'react'
import { projects } from './data.js'

function ProjectCard({ project, onOpen }) {
  return (
    <article className="ib-card">
      <div className="ib-card-body">
        <h3 className="ib-card-title">{project.title}</h3>
        <p className="ib-card-text">{project.shortDescription}</p>

        <div className="ib-card-tech">
          <ul className="ib-chip-list" style={{ marginBottom: '20px' }}>
            {project.technologies.map((tech) => (
              <li key={tech} className="ib-badge ib-badge-muted">
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <button
          className="ib-btn ib-btn-primary"
          onClick={() => onOpen(project)}
          aria-label={`View details of ${project.title}`}
          style={{ width: '100%', justifyContent: 'center' }}
        >
          View Details
          <span style={{ transition: 'transform 0.2s' }}>→</span>
        </button>
      </div>
    </article>
  )
}

function ProjectModal({ project, onClose }) {
  return (
    <div className="ib-modal-overlay" onClick={onClose}>
      <div className="ib-modal" onClick={(e) => e.stopPropagation()}>
        <div className="ib-modal-header">
          <h3 className="ib-modal-title">{project.title}</h3>
          <button className="ib-modal-close" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
        </div>

        <div className="ib-modal-body">
          <div className="ib-modal-section">
            <h4 className="ib-modal-section-title">Overview</h4>
            {project.overview.map((para, i) => (
              <p key={i} style={{ fontSize: '14.5px', color: '#cbd5e1', lineHeight: '1.6' }}>
                {para}
              </p>
            ))}
          </div>

          <div className="ib-modal-section">
            <h4 className="ib-modal-section-title">Key Features</h4>
            <ul className="ib-modal-bullets">
              {project.features.map((feat, i) => (
                <li key={i} className="ib-modal-bullet-item">
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          <div className="ib-modal-section">
            <h4 className="ib-modal-section-title">My Contributions</h4>
            <ul className="ib-modal-bullets">
              {project.contributions.map((con, i) => (
                <li key={i} className="ib-modal-bullet-item">
                  {con}
                </li>
              ))}
            </ul>
          </div>

          <div className="ib-modal-section">
            <h4 className="ib-modal-section-title">Challenges Faced</h4>
            <ul className="ib-modal-bullets">
              {project.challenges.map((chal, i) => (
                <li key={i} className="ib-modal-bullet-item">
                  {chal}
                </li>
              ))}
            </ul>
          </div>

          <div className="ib-modal-section">
            <h4 className="ib-modal-section-title">Lessons Learned</h4>
            <ul className="ib-modal-bullets">
              {project.lessons.map((les, i) => (
                <li key={i} className="ib-modal-bullet-item">
                  {les}
                </li>
              ))}
            </ul>
          </div>

          <div className="ib-modal-section">
            <h4 className="ib-modal-section-title">Technologies Used</h4>
            <ul className="ib-chip-list">
              {project.technologies.map((tech) => (
                <li key={tech} className="ib-skill-chip">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="ib-section">
      <h2 className="ib-section-title">Academic &amp; Technical Projects</h2>
      <p className="ib-section-sub">
        Explore detailed summaries of systems I have conceptualized, designed, and developed.
      </p>

      <div className="ib-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setSelected} />
        ))}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
