import { Link, useLocation } from 'react-router-dom'
import { teamMembers } from '../data/site.js'
import './landing.css'
import './pending.css'

/* Neutral landing spot for a member whose Portfolio page is not wired up yet.
   When a member is ready, they set `ready: true` in site.js and add their own
   <Route> in App.jsx — nothing here needs to change. */
export default function MemberPending() {
  const { pathname } = useLocation()
  const member = teamMembers.find((entry) => entry.route === pathname)

  return (
    <main className="pending">
      <h1 className="pending-title">{member ? member.name : 'Portfolio'}</h1>
      {member && <p className="pending-role">{member.role}</p>}
      <p className="pending-note">This portfolio has not been published yet.</p>

      <Link to="/" className="btn btn-primary">
        Back to the team
      </Link>
    </main>
  )
}
