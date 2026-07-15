import './portfolio.css'

// Skills lists separated into marquee rows for alternating scrolls
const row0 = ['Java', 'C++', 'Python', 'JavaScript', 'PHP', 'HTML', 'CSS']
const row1 = ['MySQL', 'Node.js', 'Pandas', 'NumPy']
const row2 = ['Figma', 'Unity', 'Google Colab', 'Git', 'GitHub']

function MarqueeRow({ items, direction }) {
  // Multiply items list to guarantee seamless overflow loop across screens
  const doubledItems = [...items, ...items, ...items, ...items]

  return (
    <div className="ib-marquee-row">
      <div className={`ib-marquee-inner ${direction === 'left' ? 'scroll-left' : 'scroll-right'}`}>
        <div className="ib-marquee-group">
          {doubledItems.map((skill, idx) => (
            <span key={idx} className="ib-skill-chip" style={{ fontSize: '15px', padding: '8px 18px' }}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="ib-section">
      <h2 className="ib-section-title">Technical Skills</h2>
      <p className="ib-section-sub">An interactive scroll of tools, platforms, and languages.</p>

      <div className="ib-panel ib-marquee-container">
        <MarqueeRow items={row0} direction="right" />
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
      </div>
    </section>
  )
}
