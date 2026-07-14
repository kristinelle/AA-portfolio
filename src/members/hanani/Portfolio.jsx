import { profile } from './data.js'
import About from './About.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import './portfolio.css'

export default function Portfolio() {
  return (
    <div className="portfolio-hanani">
      <section className="hnn-hero">
        <span className="hnn-role">{profile.role}</span>
        <h1>{profile.name}</h1>
        <p className="hnn-tagline">{profile.tagline}</p>
      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
