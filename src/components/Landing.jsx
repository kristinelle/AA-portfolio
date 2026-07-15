import Scene from '../three/Scene.jsx'
import TeamCard from './TeamCard.jsx'
import { site, teamMembers } from '../data/site.js'
import './landing.css'

export default function Landing() {
  return (
    <main className="landing">
      <section className="landing-hero">
        <p className="landing-eyebrow">{site.groupName}</p>

        <h1 className="landing-title">{site.portfolioTitle}</h1>

        <p className="landing-tagline">{site.tagline}</p>
        <p className="landing-intro">{site.intro}</p>

        <div className="landing-actions">
          <a href="#about-us" className="btn btn-primary">
            Meet the Team
          </a>
          <a href="#scene" className="btn btn-ghost">
            Explore the Scene
          </a>
        </div>
      </section>

      <section id="scene" className="landing-scene">
        <Scene />
      </section>

      <section id="about-us" className="about-us">
        <h2 className="about-us-title">About Us</h2>
        <p className="about-us-sub">
          Meet the people behind this interactive 3D portfolio. Click any member to explore their
          complete portfolio, projects, skills and achievements.
        </p>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </section>
    </main>
  )
}
