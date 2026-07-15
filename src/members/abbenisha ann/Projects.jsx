import { useState } from 'react'
import { projects } from './data.js'
import ProjectModal from './ProjectModal.jsx'
import ProjectCarousel from './ProjectCarousel.jsx'

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="aa-section">
      <h2 className="aa-section-title">Projects</h2>
      <p className="aa-section-sub">
        Rotate the 3D gallery and open a project for the full write-up, screenshots and demo.
      </p>

      <ProjectCarousel projects={projects} onOpen={setSelected} />

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
