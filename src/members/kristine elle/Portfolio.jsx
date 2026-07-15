import { profile } from './data.js'
import About from './About.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import Reveal from './Reveal.jsx'
import SpaceBackground from './SpaceBackground.jsx'
import './portfolio.css'

export default function Portfolio() {
  return (
    <>
      <SpaceBackground />
      <div className="portfolio-kristine">
        <section className="ke-hero">
          <span className="ke-role">{profile.role}</span>
          <h1>{profile.name}</h1>
          <p className="ke-tagline">{profile.tagline}</p>
        </section>

        <Reveal><About /></Reveal>
        <Reveal><Skills /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><Contact /></Reveal>
      </div>
    </>
  )
}
