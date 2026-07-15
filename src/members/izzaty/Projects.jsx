import { useState } from 'react'
import { projects } from './data.js'
import emomazeOverview from './asset/EMOmaze/Overview.png'
import ProjectModal from './ProjectModal.jsx'

function ProjectCard({ project, index, onClick }) {
  const cardStyle = project.id === 'emomaze'
    ? {
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url(${emomazeOverview})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {}

  return (
    <article
      className="ib-project-card"
      onClick={() => onClick(project)}
      style={{ cursor: 'pointer', ...cardStyle }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick(project)}
      aria-label={`View details for ${project.title}`}
    >
      <div className="ib-project-card-header">
        <span className="ib-project-card-number">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="ib-project-card-body">
        <h3 className="ib-project-card-title">{project.title}</h3>

        <div className="ib-project-card-tags">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="ib-project-card-tag">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="ib-project-card-tag" style={{ background: 'rgba(255,255,255,0.05)', color: '#94a3b8' }}>
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Slide-up overlay containing description on hover */}
      <div className="ib-project-card-overlay">
        <p className="ib-project-card-desc">{project.shortDescription}</p>
        <span className="ib-project-card-link">
          Explore Case Study →
        </span>
      </div>
    </article>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const handleOpen  = (project) => setSelectedProject(project)
  const handleClose = ()        => setSelectedProject(null)

  return (
    <section id="projects" className="ib-section">
      <h2 className="ib-section-title">Selected Projects</h2>

      <div className="ib-project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onClick={handleOpen}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={handleClose}
      />
    </section>
  )
}
