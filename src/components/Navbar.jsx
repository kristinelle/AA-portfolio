import { NavLink } from 'react-router-dom'
import { site, teamMembers } from '../data/site.js'
import './layout.css'

const linkClass = ({ isActive }) => `layout-link ${isActive ? 'layout-link-active' : ''}`

export default function Navbar() {
  return (
    <header className="layout-nav">
      <NavLink to="/" className="layout-brand">
        <span className="layout-dot" aria-hidden="true" />
        {site.groupName}
      </NavLink>

      <nav className="layout-links" aria-label="Main navigation">
        <NavLink to="/" end className={linkClass}>
          Home
        </NavLink>

        {teamMembers.map((member) => (
          <NavLink key={member.id} to={member.route} className={linkClass}>
            {member.name.split(' ')[0]}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
