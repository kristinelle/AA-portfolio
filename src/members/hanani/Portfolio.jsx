import { profile } from './data.js'
import About from './About.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import './portfolio.css'

const BUBBLES = [
  { left: '6%', size: 10, delay: '0s', duration: '11s' },
  { left: '16%', size: 6, delay: '2.5s', duration: '9s' },
  { left: '28%', size: 14, delay: '1s', duration: '13s' },
  { left: '42%', size: 8, delay: '4s', duration: '10s' },
  { left: '58%', size: 12, delay: '0.5s', duration: '12s' },
  { left: '71%', size: 7, delay: '3s', duration: '9.5s' },
  { left: '84%', size: 11, delay: '5s', duration: '14s' },
  { left: '93%', size: 6, delay: '1.8s', duration: '10.5s' },
]

function ScrollButton({ targetId, children, variant }) {
  function handleClick(e) {
    e.preventDefault()
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <a href={`#${targetId}`} className={`hnn-cta hnn-cta-${variant}`} onClick={handleClick}>
      {children}
    </a>
  )
}

export default function Portfolio() {
  return (
    <div className="portfolio-hanani">
      <div className="hnn-bg-tint" aria-hidden="true"></div>
      <div className="hnn-orb hnn-orb-a" aria-hidden="true"></div>
      <div className="hnn-orb hnn-orb-b" aria-hidden="true"></div>
      <div className="hnn-orb hnn-orb-c" aria-hidden="true"></div>

      <div className="hnn-bubbles" aria-hidden="true">
        {BUBBLES.map((b, i) => (
          <span
            key={i}
            className="hnn-bubble"
            style={{
              left: b.left,
              width: b.size,
              height: b.size,
              animationDelay: b.delay,
              animationDuration: b.duration,
            }}
          />
        ))}
      </div>

      <section className="hnn-hero">
        <span className="hnn-badge">Personal Portfolio</span>
        <h1>{profile.name}</h1>
        <p className="hnn-tagline">{profile.tagline}</p>
        <p className="hnn-hero-intro">{profile.intro}</p>

        <div className="hnn-hero-ctas">
          <ScrollButton targetId="hanani-projects" variant="primary">
            View My Work
          </ScrollButton>
          <ScrollButton targetId="hanani-contact" variant="secondary">
            Contact Me
          </ScrollButton>
        </div>

        {/* Water-line under the hero */}
        <svg className="hnn-wave" viewBox="0 0 1600 100" preserveAspectRatio="none" aria-hidden="true">
          <path
            className="hnn-wave-path hnn-wave-back"
            d="M0 50 C 100 20, 200 80, 300 50 C 400 20, 500 80, 600 50 C 700 20, 800 80, 900 50 C 1000 20, 1100 80, 1200 50 C 1300 20, 1400 80, 1500 50 L 1600 100 L 0 100 Z
               M1600 50 C 1700 20, 1800 80, 1900 50 C 2000 20, 2100 80, 2200 50 C 2300 20, 2400 80, 2500 50 C 2600 20, 2700 80, 2800 50 C 2900 20, 3000 80, 3100 50 L 3200 100 L 1600 100 Z"
          />
          <path
            className="hnn-wave-path hnn-wave-front"
            d="M0 60 C 120 90, 220 30, 340 60 C 460 90, 560 30, 680 60 C 800 90, 900 30, 1020 60 C 1140 90, 1240 30, 1360 60 C 1480 90, 1580 30, 1600 60 L 1600 100 L 0 100 Z
               M1600 60 C 1720 90, 1820 30, 1940 60 C 2060 90, 2160 30, 2280 60 C 2400 90, 2500 30, 2620 60 C 2740 90, 2840 30, 2960 60 C 3080 90, 3180 30, 3200 60 L 3200 100 L 1600 100 Z"
          />
        </svg>
      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
