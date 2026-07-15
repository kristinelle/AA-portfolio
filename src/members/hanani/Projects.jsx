import { useState } from 'react'
import { createPortal } from 'react-dom'
import { projects } from './data.js'
import { Heading } from './About.jsx'

// Position/rotation for each frame based on its distance from the active one —
// this is what gives the "walking down a gallery corridor" feel.
function frameStyle(offset) {
  const clamped = Math.max(-3, Math.min(3, offset))
  const rotateY = clamped * -26
  const translateZ = -Math.abs(clamped) * 90
  const translateX = clamped * 190
  const scale = 1 - Math.abs(clamped) * 0.13
  const hidden = Math.abs(clamped) > 2.4
  return {
    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
    opacity: hidden ? 0 : 1 - Math.abs(clamped) * 0.2,
    zIndex: 10 - Math.abs(clamped),
    pointerEvents: hidden ? 'none' : 'auto',
  }
}

// Rendered via a portal straight onto <body> so it can never get trapped
// behind a section's stacking context, no matter what else is on the page.
function ProjectModal({ project, onClose }) {
  if (!project) return null

  return createPortal(
    <div className="hnn-modal-overlay" onClick={onClose}>
      <div className="hnn-modal" onClick={(e) => e.stopPropagation()}>
        <button className="hnn-modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="hnn-modal-cover">
          <span>{project.title}</span>
        </div>

        <div className="hnn-modal-body">
          <h3>{project.title}</h3>
          <div className="hnn-project-tag">{project.tagline}</div>

          {/* Add .mp4 files to src/members/hanani/assets/demo/, import them at
              the top of data.js, and set project.video to the import. For
              YouTube instead, set videoType to 'youtube' and video to the ID. */}
          {project.video ? (
            project.videoType === 'youtube' ? (
              <div className="hnn-modal-video">
                <iframe
                  src={`https://www.youtube.com/embed/${project.video}`}
                  title={`${project.title} demo video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="hnn-modal-video">
                <video controls src={project.video} />
              </div>
            )
          ) : (
            <div className="hnn-modal-video-placeholder">Demo video coming soon</div>
          )}

          <p>{project.longDescription || project.description}</p>

          <div className="hnn-tech-row">
            {project.tech.map((t) => (
              <span className="hnn-tech-pill" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

// A little shark that swims across the gallery. Click it and it drags you
// to a random project and opens it up.
function GalleryShark({ onCatch }) {
  return (
    <button className="hnn-shark" onClick={onCatch} aria-label="Surprise me with a project">
      <svg viewBox="0 0 140 70" xmlns="http://www.w3.org/2000/svg">
        <path
          className="hnn-shark-body"
          d="M4 40 C 10 20, 40 8, 75 12 C 100 14, 118 24, 132 34 L 118 30 L 128 40 L 116 40 C 104 48, 80 56, 55 54 C 30 52, 12 48, 4 40 Z"
        />
        <path className="hnn-shark-fin" d="M55 12 L 66 -6 L 74 14 Z" />
        <path className="hnn-shark-tail" d="M6 38 L -10 26 L -8 42 L -10 54 Z" />
        <circle className="hnn-shark-eye" cx="94" cy="24" r="2.4" />
      </svg>
    </button>
  )
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeProject, setActiveProject] = useState(null)

  function goTo(i) {
    setActiveIndex((i + projects.length) % projects.length)
  }

  function handleSharkClick() {
    const next = Math.floor(Math.random() * projects.length)
    setActiveIndex(next)
    setActiveProject(projects[next])
  }

  return (
    <section id="hanani-projects">
      <Heading>Project Gallery</Heading>
      <p className="hnn-gallery-hint">
        Swim through the gallery — click the centre frame to dive into details, or let the shark surprise you.
      </p>

      <div className="hnn-gallery">
        <GalleryShark onCatch={handleSharkClick} />

        <button className="hnn-gallery-nav prev" onClick={() => goTo(activeIndex - 1)} aria-label="Previous project">
          ‹
        </button>

        <div className="hnn-gallery-stage">
          {projects.map((project, i) => {
            const offset = i - activeIndex
            const isActive = offset === 0
            return (
              <div
                key={project.title}
                className={`hnn-gallery-frame${isActive ? ' active' : ''}`}
                style={frameStyle(offset)}
                onClick={() => (isActive ? setActiveProject(project) : goTo(i))}
              >
                <div className="hnn-gallery-frame-cover">
                  <span>{project.title}</span>
                </div>
                <div className="hnn-gallery-frame-body">
                  <h3>{project.title}</h3>
                  <div className="hnn-project-tag">{project.tagline}</div>
                  {isActive && (
                    <button
                      className="hnn-view-details"
                      onClick={(e) => {
                        e.stopPropagation()
                        setActiveProject(project)
                      }}
                    >
                      View Details →
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <button className="hnn-gallery-nav next" onClick={() => goTo(activeIndex + 1)} aria-label="Next project">
          ›
        </button>
      </div>

      <div className="hnn-gallery-dots">
        {projects.map((p, i) => (
          <button
            key={p.title}
            className={`hnn-gallery-dot${i === activeIndex ? ' active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to ${p.title}`}
          />
        ))}
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}
