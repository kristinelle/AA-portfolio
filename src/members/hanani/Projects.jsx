import { useState } from 'react'
import { projects } from './data.js'
import { Heading } from './About.jsx'

export default function Projects() {
  const [openTitle, setOpenTitle] = useState(null)

  return (
    <section id="hanani-projects">
      <Heading>Projects</Heading>

      <div className="hnn-projects-grid">
        {projects.map((project) => {
          const isOpen = openTitle === project.title
          return (
            <div
              key={project.title}
              className={`hnn-project${isOpen ? ' open' : ''}`}
              onClick={() => setOpenTitle(isOpen ? null : project.title)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setOpenTitle(isOpen ? null : project.title)
                }
              }}
            >
              <h3>{project.title}</h3>
              <div className="hnn-project-tag">{project.tagline}</div>
              <p>{project.description}</p>
              <div className="hnn-tech-row">
                {project.tech.map((t) => (
                  <span className="hnn-tech-pill" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
