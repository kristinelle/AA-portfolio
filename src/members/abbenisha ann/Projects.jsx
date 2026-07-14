import { useState } from 'react'
import { projects } from './data.js'
import { ProjectImage } from './Media.jsx'
import ProjectModal from './ProjectModal.jsx'

function ProjectCard({ project, onOpen }) {
  return (
    <article className="aa-card">
      <div className="aa-card-media">
        <ProjectImage
          path={project.thumbnail}
          alt={project.title}
          label="Project Thumbnail"
          className="aa-card-thumb"
        />
        <span className="aa-card-overlay" aria-hidden="true" />
      </div>

      <div className="aa-card-body">
        <h3 className="aa-card-title">{project.title}</h3>
        <p className="aa-card-text">{project.shortDescription}</p>

        <ul className="aa-chip-list">
          {project.technologies.slice(0, 4).map((tech) => (
            <li key={tech} className="aa-badge">
              {tech}
            </li>
          ))}
          {project.technologies.length > 4 && (
            <li className="aa-badge aa-badge-muted">
              +{project.technologies.length - 4}
            </li>
          )}
        </ul>

        <button
          className="aa-btn aa-btn-primary"
          onClick={() => onOpen(project)}
          aria-label={`View details of ${project.title}`}
        >
          View Details
          <span className="aa-btn-arrow" aria-hidden="true">
            →
          </span>
        </button>
      </div>
    </article>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="aa-section">
      <h2 className="aa-section-title">Projects</h2>
      <p className="aa-section-sub">
        Open a project to read the full write-up, features, screenshots and demo.
      </p>

      <div className="aa-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setSelected} />
        ))}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
