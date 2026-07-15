import { Link } from 'react-router-dom'
import { getTeamPhoto, getInitials } from '../assets/team/teamPhotos.js'

export default function TeamCard({ member, index }) {
  const photo = typeof member.photo === 'string' && (member.photo.startsWith('/') || member.photo.startsWith('data:') || member.photo.startsWith('http'))
    ? member.photo
    : getTeamPhoto(member.photo)

  return (
    <Link
      to={member.route}
      className="team-card"
      // Staggers the entrance animation so the cards fan in one after another.
      style={{ '--delay': `${index * 90}ms` }}
      aria-label={`View ${member.name}'s portfolio`}
    >
      <div className="team-avatar">
        {photo ? (
          <img src={photo} alt={member.name} className="team-avatar-img" />
        ) : (
          <span className="team-avatar-initials" aria-hidden="true">
            {getInitials(member.name)}
          </span>
        )}
      </div>

      <h3 className="team-name">{member.name}</h3>
      <p className="team-role">{member.role}</p>
      <p className="team-programme">{member.programme}</p>
      <p className="team-bio">{member.shortDescription}</p>

      <span className="team-cta">
        View Portfolio
        <span className="team-cta-arrow" aria-hidden="true">
          →
        </span>
      </span>
    </Link>
  )
}
