import { useNavigate } from 'react-router-dom'
import { projects } from './data.js'
import emomazeOverview from './asset/EMOmaze/Overview.png'

function ProjectCard({ project, index }) {
  const navigate = useNavigate()

  const handleAction = () => {
    navigate(`/project/${project.id}`)
  }

  // Set card background image for EMOmaze to show its gameplay preview
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
      onClick={handleAction}
      style={{ cursor: 'pointer', ...cardStyle }}
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
  return (
    <section id="projects" className="ib-section">
      <h2 className="ib-section-title">Selected Projects</h2>

      <div className="ib-project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
