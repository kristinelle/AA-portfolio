import About from './About.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import { profile } from './data.js'
import './portfolio.css'

export default function Portfolio() {
  return (
    <main className="aa-portfolio">
      <header className="aa-hero">
        <p className="aa-hero-eyebrow">Personal Portfolio</p>
        <h1 className="aa-hero-name">{profile.name}</h1>
        <p className="aa-hero-tagline">{profile.tagline}</p>
      </header>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
