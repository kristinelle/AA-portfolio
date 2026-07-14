import { skills } from './data.js'
import { Heading } from './About.jsx'

export default function Skills() {
  return (
    <section id="hanani-skills">
      <Heading>Skills</Heading>

      <div className="hnn-skills-grid">
        {skills.map((skill) => (
          <div className="hnn-skill" key={skill.name}>
            <div className="hnn-skill-inner">
              <div className="hnn-skill-face front">
                <span>{skill.name}</span>
              </div>
              <div className="hnn-skill-face back">
                <p>{skill.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
