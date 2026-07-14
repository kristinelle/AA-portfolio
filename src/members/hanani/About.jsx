import { profile } from './data.js'

// Small reusable heading with the brush-stroke underline signature element.
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

export default function About() {
  return (
    <section id="hanani-about">
      <Heading>About Me</Heading>

      <div className="hnn-about-grid">
        <div className="hnn-card">
          <h3>Who I Am</h3>
          <p>{profile.intro}</p>
        </div>

        <div className="hnn-card">
          <h3>Education</h3>
          {profile.education.map((edu) => (
            <p key={edu.school}>
              <strong>{edu.school}</strong>
              <br />
              {edu.detail}
              <br />
              {edu.note}
            </p>
          ))}

          <h3 style={{ marginTop: 20 }}>Achievements</h3>
          <ul>
            {profile.achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hnn-card" style={{ marginTop: 20 }}>
        <h3>Leadership & Organization Involvement</h3>
        {profile.leadership.map((item) => (
          <p key={item.role} style={{ marginBottom: 12 }}>
            <strong>{item.role}</strong>
            <br />
            {item.detail}
          </p>
        ))}
      </div>

      <div className="hnn-card" style={{ marginTop: 20 }}>
        <h3>Looking Ahead</h3>
        <p>{profile.aspirations}</p>
      </div>
    </section>
  )
}

export { Heading }
