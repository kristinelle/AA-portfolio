import { useState } from 'react'
import { skillGroups } from './data.js'

const ALL = 'All'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(ALL)

  const categories = [ALL, ...skillGroups.map((group) => group.category)]
  const visibleGroups =
    activeCategory === ALL
      ? skillGroups
      : skillGroups.filter((group) => group.category === activeCategory)

  return (
    <section id="skills" className="ib-section">
      <h2 className="ib-section-title">Technical Skills</h2>
      <p className="ib-section-sub">Select a category to filter my skillset.</p>

      <div className="ib-tabs" role="tablist" aria-label="Skill categories">
        {categories.map((category) => (
          <button
            key={category}
            role="tab"
            aria-selected={activeCategory === category}
            className={`ib-tab ${activeCategory === category ? 'ib-tab-active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="ib-skill-groups">
        {visibleGroups.map((group) => (
          <div key={group.category} className="ib-panel">
            <h4 className="ib-panel-title">{group.category}</h4>
            <ul className="ib-chip-list">
              {group.skills.map((skill) => (
                <li key={skill} className="ib-skill-chip">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
