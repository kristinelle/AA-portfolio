import { profile } from './data.js'
import FishSchoolCompanion from './FishSchoolCompanion.jsx'

// Heading with custom underline
function Heading({ children }) {
  return (
    <h2 className="hnn-heading">
      {children}
      <svg viewBox="0 0 200 14" preserveAspectRatio="none">
        <path d="M2 8 C 50 2, 150 12, 198 6" />
      </svg>
    </h2>
  )
}

// One entry on the timeline: a glowing dot, a connecting line down to the
// next entry, a coloured period label, a title, description, and an
// optional badge pill (e.g. a CGPA).
function TimelineItem({ period, title, description, badge }) {
  return (
    <div className="hnn-timeline-item">
      <span className="hnn-timeline-dot" aria-hidden="true" />
      <span className="hnn-timeline-period">{period}</span>
      <h4 className="hnn-timeline-title">{title}</h4>
      {description && <p className="hnn-timeline-desc">{description}</p>}
      {badge && <span className="hnn-timeline-badge">{badge}</span>}
    </div>
  )
}

function TimelineBlock({ label, items }) {
  return (
    <div className="hnn-timeline-block">
      <div className="hnn-timeline-label-row">
        <span className="hnn-timeline-label">{label}</span>
        <span className="hnn-timeline-label-line" aria-hidden="true" />
      </div>
      <div className="hnn-timeline">
        {items.map((item) => (
          <TimelineItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="hanani-about">
      <Heading>About Me</Heading>

      <div className="hnn-card hnn-who-card">
        <h3>Who I Am</h3>
        <p>{profile.intro}</p>
      </div>

      <div className="hnn-timeline-wrap">
        <div className="hnn-timeline-columns">
          <TimelineBlock label="Education" items={profile.education} />
          <TimelineBlock label="Honours & Awards" items={profile.achievements} />
          <TimelineBlock label="Leadership & Involvement" items={profile.leadership} />
        </div>

        {/* A small school of fish keeps the timeline company as you scroll —
            hidden on narrow screens where there's no room for it. */}
        <div className="hnn-timeline-companion" aria-hidden="true">
          <FishSchoolCompanion />
        </div>
      </div>

      <div className="hnn-card" style={{ marginTop: 20 }}>
        <h3>Looking Ahead</h3>
        <p>{profile.aspirations}</p>
      </div>
    </section>
  )
}

export { Heading }
