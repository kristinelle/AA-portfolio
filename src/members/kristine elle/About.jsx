import { useState } from 'react'
import { profile } from './data.js'

const ACHIEVEMENTS_PREVIEW = 2
const LEADERSHIP_PREVIEW = 2

function Heading({ children }) {
  return (
    <h2 className="ke-heading">
      {children}
      <span className="ke-heading-line" />
    </h2>
  )
}

function ShowMoreButton({ isOpen, hiddenCount, onClick }) {
  return (
    <button type="button" className="ke-show-more-btn" onClick={onClick}>
      {isOpen ? 'Show less' : hiddenCount ? `Show ${hiddenCount} more` : 'Show more'}
      <span className={`ke-show-more-icon ${isOpen ? 'ke-show-more-icon-open' : ''}`}>↓</span>
    </button>
  )
}

function LeadershipItem({ role }) {
  return (
    <div className="ke-leader-item">
      <strong>{role}</strong>
    </div>
  )
}

export default function About() {
  const [showAllAchievements, setShowAllAchievements] = useState(false)
  const [showAllLeadership, setShowAllLeadership] = useState(false)

  const visibleAchievements = profile.achievements.slice(0, ACHIEVEMENTS_PREVIEW)
  const hiddenAchievements = profile.achievements.slice(ACHIEVEMENTS_PREVIEW)

  const visibleLeadership = profile.leadership.slice(0, LEADERSHIP_PREVIEW)
  const hiddenLeadership = profile.leadership.slice(LEADERSHIP_PREVIEW)

  return (
    <section id="kristine-about" className="ke-section">
      <Heading>About Me</Heading>

      <div className="ke-about-grid">
        <div className="ke-card ke-intro-card">
          <h3>Who I Am</h3>
          <p>{profile.intro}</p>
        </div>

        <div className="ke-card ke-edu-card">
          <h3>Education</h3>
          {profile.education.map((edu) => (
            <div key={edu.school} className="ke-edu-item">
              <strong>{edu.school}</strong>
              <div className="ke-edu-detail">{edu.detail}</div>
              <div className="ke-edu-note">{edu.note}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="ke-about-grid ke-grid-sec">
        <div className="ke-card ke-achieve-card">
          <h3>Achievements</h3>
          <ul>
            {visibleAchievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {hiddenAchievements.length > 0 && (
            <>
              <ul className={`ke-collapsible ${showAllAchievements ? 'ke-collapsible-open' : ''}`}>
                {hiddenAchievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ShowMoreButton
                isOpen={showAllAchievements}
                hiddenCount={hiddenAchievements.length}
                onClick={() => setShowAllAchievements((v) => !v)}
              />
            </>
          )}
        </div>

        <div className="ke-card ke-leader-card">
          <h3>Leadership & Involvement</h3>
          {visibleLeadership.map((item) => (
            <LeadershipItem key={item.role} role={item.role} />
          ))}

          {hiddenLeadership.length > 0 && (
            <>
              <div className={`ke-collapsible ${showAllLeadership ? 'ke-collapsible-open' : ''}`}>
                {hiddenLeadership.map((item) => (
                  <LeadershipItem key={item.role} role={item.role} />
                ))}
              </div>
              <ShowMoreButton
                isOpen={showAllLeadership}
                hiddenCount={hiddenLeadership.length}
                onClick={() => setShowAllLeadership((v) => !v)}
              />
            </>
          )}
        </div>
      </div>

      <div className="ke-card ke-future-card">
        <h3>Looking Ahead</h3>
        <p>{profile.aspirations}</p>
      </div>
    </section>
  )
}

export { Heading }
