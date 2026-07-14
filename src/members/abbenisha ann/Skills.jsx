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
    <section id="skills" className="aa-section">
      <h2 className="aa-section-title">Skills</h2>
      <p className="aa-section-sub">Select a category to filter.</p>

      <div className="aa-tabs" role="tablist" aria-label="Skill categories">
        {categories.map((category) => (
          <button
            key={category}
            role="tab"
            aria-selected={activeCategory === category}
            className={`aa-tab ${activeCategory === category ? 'aa-tab-active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="aa-skill-groups">
        {visibleGroups.map((group) => (
          <div key={group.category} className="aa-panel aa-skill-group">
            <h4 className="aa-panel-title">{group.category}</h4>
            <ul className="aa-chip-list">
              {group.skills.map((skill) => (
                <li key={skill} className="aa-skill-chip">
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
