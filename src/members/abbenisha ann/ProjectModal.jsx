import { useEffect, useRef } from 'react'
import { ProjectImage, ProjectVideo } from './Media.jsx'

// Bullet section with fallback text
function BulletSection({ title, items }) {
  return (
    <>
      <h4 className="aa-modal-heading">{title}</h4>
      {items.length > 0 ? (
        <ul className="aa-feature-list">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="aa-modal-empty">To be added.</p>
      )}
    </>
  )
}

export default function ProjectModal({ project, onClose }) {
  const closeButton = useRef(null)

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Focus close button for accessibility
    closeButton.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose])

  return (
    <div className="aa-backdrop" onClick={onClose} role="presentation">
      <div
        className="aa-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="aa-modal-title"
      >
        <button
          ref={closeButton}
          className="aa-modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          &times;
        </button>

        <div className="aa-modal-hero-wrap">
          <ProjectImage
            path={project.thumbnail}
            alt={project.title}
            label="Project Cover Image"
            className="aa-modal-hero"
          />
          <h3 id="aa-modal-title" className="aa-modal-title">
            {project.title}
          </h3>
        </div>

        <div className="aa-modal-body">
          <h4 className="aa-modal-heading">Overview</h4>
          {project.overview.map((paragraph) => (
            <p key={paragraph} className="aa-modal-text">
              {paragraph}
            </p>
          ))}

          <BulletSection title="Key Features" items={project.features} />

          <h4 className="aa-modal-heading">Technologies</h4>
          <ul className="aa-chip-list">
            {project.technologies.map((tech) => (
              <li key={tech} className="aa-badge">
                {tech}
              </li>
            ))}
          </ul>

          <BulletSection title="My Contributions" items={project.contributions} />
          <BulletSection title="Challenges" items={project.challenges} />
          <BulletSection title="Lessons Learned" items={project.lessons} />

          <h4 className="aa-modal-heading">Screenshots</h4>
          <div className="aa-gallery">
            {project.screenshots.map((shot, index) => (
              <ProjectImage
                key={shot}
                path={shot}
                alt={`${project.title} screenshot ${index + 1}`}
                label="Project Screenshot"
                className="aa-gallery-item"
              />
            ))}
          </div>

          <h4 className="aa-modal-heading">Video Demonstration</h4>
          <ProjectVideo path={project.video} title={project.title} />

          <button className="aa-btn aa-btn-primary aa-modal-done" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
