import { skills } from './data.js'
import { Heading } from './About.jsx'

function ShellIcon({ id }) {
  return (
    <svg viewBox="0 0 60 60" className="hnn-skill-icon">
      <defs>
        <radialGradient id={`shell-${id}`} cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#bff4ec" />
          <stop offset="60%" stopColor="#2dd4bf" />
          <stop offset="100%" stopColor="#0f766e" />
        </radialGradient>
      </defs>
      <path
        fill={`url(#shell-${id})`}
        d="M30 6 C 44 6, 54 20, 54 34 C 54 46, 44 54, 30 54 C 16 54, 6 46, 6 34 C 6 20, 16 6, 30 6 Z"
      />
      <path fill="none" stroke="#0f766e" strokeWidth="1.6" d="M30 12 L30 50 M22 16 C 18 26, 18 42, 26 50 M38 16 C 42 26, 42 42, 34 50 M16 22 C 14 30, 16 40, 22 48 M44 22 C 46 30, 44 40, 38 48" />
    </svg>
  )
}

function FishIcon({ id }) {
  return (
    <svg viewBox="0 0 60 60" className="hnn-skill-icon">
      <defs>
        <radialGradient id={`fish-${id}`} cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#cffafe" />
          <stop offset="55%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0369a1" />
        </radialGradient>
      </defs>
      <path
        fill={`url(#fish-${id})`}
        d="M8 30 C 16 16, 34 12, 44 20 L 54 12 L 50 26 L 54 30 L 50 34 L 54 48 L 44 40 C 34 48, 16 44, 8 30 Z"
      />
      <circle cx="20" cy="27" r="2.3" fill="#082f49" />
      <path fill="none" stroke="#082f49" strokeWidth="1.4" d="M22 30 C 28 33, 34 33, 40 30" />
    </svg>
  )
}

function SnailIcon({ id }) {
  return (
    <svg viewBox="0 0 60 60" className="hnn-skill-icon">
      <defs>
        <radialGradient id={`snail-${id}`} cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#fef9c3" />
          <stop offset="55%" stopColor="#facc15" />
          <stop offset="100%" stopColor="#a16207" />
        </radialGradient>
        <radialGradient id={`snail-body-${id}`} cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#d9fef4" />
          <stop offset="100%" stopColor="#5eead4" />
        </radialGradient>
      </defs>
      <path
        fill={`url(#snail-body-${id})`}
        d="M10 46 C 6 40, 8 32, 16 30 C 12 30, 10 26, 14 24 C 18 30, 24 40, 34 42 L 30 48 C 22 50, 14 50, 10 46 Z"
      />
      <circle cx="34" cy="28" r="15" fill={`url(#snail-${id})`} />
      <path fill="none" stroke="#78350f" strokeWidth="1.4" d="M34 28 m-9 0 a9 9 0 1 1 18 0 a6 6 0 1 1 -12 0 a3.4 3.4 0 1 1 6.8 0" />
      <circle cx="12" cy="20" r="1.8" fill="#78350f" />
      <path fill="none" stroke="#78350f" strokeWidth="1.4" d="M14 24 C 12 22, 12 20, 12 20" />
    </svg>
  )
}

function StarfishIcon({ id }) {
  return (
    <svg viewBox="0 0 60 60" className="hnn-skill-icon">
      <defs>
        <radialGradient id={`star-${id}`} cx="40%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#ffe4e6" />
          <stop offset="55%" stopColor="#fb7185" />
          <stop offset="100%" stopColor="#9f1239" />
        </radialGradient>
      </defs>
      <path
        fill={`url(#star-${id})`}
        d="M30 4 L36 22 L54 22 L39 33 L45 51 L30 40 L15 51 L21 33 L6 22 L24 22 Z"
      />
      <circle cx="30" cy="26" r="2" fill="#9f1239" />
      <circle cx="34" cy="30" r="1.4" fill="#9f1239" />
      <circle cx="26" cy="30" r="1.4" fill="#9f1239" />
    </svg>
  )
}

function CoralIcon({ id }) {
  return (
    <svg viewBox="0 0 60 60" className="hnn-skill-icon">
      <defs>
        <linearGradient id={`coral-${id}`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#f0abfc" />
        </linearGradient>
      </defs>
      <path
        fill="none"
        stroke={`url(#coral-${id})`}
        strokeWidth="5"
        strokeLinecap="round"
        d="M30 54 L30 32 M30 38 C 22 34, 20 24, 24 16 M30 34 C 38 30, 40 20, 36 12 M30 44 C 40 42, 46 34, 44 26"
      />
    </svg>
  )
}

function PearlIcon({ id }) {
  return (
    <svg viewBox="0 0 60 60" className="hnn-skill-icon">
      <defs>
        <radialGradient id={`pearl-${id}`} cx="38%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#a5f3fc" />
          <stop offset="100%" stopColor="#0e7490" />
        </radialGradient>
        <radialGradient id={`clam-${id}`} cx="50%" cy="0%" r="100%">
          <stop offset="0%" stopColor="#5eead4" />
          <stop offset="100%" stopColor="#0f766e" />
        </radialGradient>
      </defs>
      <path fill={`url(#clam-${id})`} d="M6 40 C 6 22, 18 10, 30 10 C 42 10, 54 22, 54 40 C 40 34, 20 34, 6 40 Z" />
      <circle cx="30" cy="38" r="9" fill={`url(#pearl-${id})`} />
    </svg>
  )
}

const ICONS = [ShellIcon, FishIcon, SnailIcon, StarfishIcon, CoralIcon, PearlIcon]

export default function Skills() {
  return (
    <section id="hanani-skills">
      <Heading>Skills</Heading>

      <div className="hnn-skills-grid">
        {skills.map((skill, i) => {
          const Icon = ICONS[i % ICONS.length]
          return (
            <div className="hnn-skill" key={skill.name} style={{ animationDelay: `${i * 0.6}s` }}>
              <span className="hnn-skill-tooltip">My Skill</span>
              <div className="hnn-skill-inner">
                <div className="hnn-skill-face front">
                  <Icon id={i} />
                  <span>{skill.name}</span>
                </div>
                <div className="hnn-skill-face back">
                  <p>{skill.detail}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
