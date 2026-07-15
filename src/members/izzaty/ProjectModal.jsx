import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import overviewImg from './asset/EMOmaze/Overview.png'
import demoVid    from './asset/EMOmaze/EMOmaze Demonstration.mp4'
import './ProjectModal.css'

// ─── Static extra content keyed by project id ─────────────────────────────────
function EMOmazeExtra() {
  return (
    <>
      <div className="ibm-hero-img">
        <img src={overviewImg} alt="EMOmaze Room gameplay overview" />
      </div>

      <section className="ibm-section">
        <h4 className="ibm-sub-heading">Key Implementations</h4>
        <ul className="ibm-feature-list">
          <li>
            <span className="ibm-feat-label">Blendshape Emotion Classifier</span>
            <span className="ibm-feat-desc">
              Integrated MediaPipe facial landmark coordinates with blendshape‑based scoring thresholds to map
              specific facial configurations into directional movement commands.
            </span>
          </li>
          <li>
            <span className="ibm-feat-label">Drift &amp; Movement Physics</span>
            <span className="ibm-feat-desc">
              Configured Unity CharacterController physics, integrating drift variables and collision bounds to
              ensure smooth navigation in tight corridors.
            </span>
          </li>
          <li>
            <span className="ibm-feat-label">LAN Multiplayer Setup</span>
            <span className="ibm-feat-desc">
              Implemented Mirror LAN multiplayer support, synchronizing movement states and scoreboard stats
              across connected hosts.
            </span>
          </li>
        </ul>
      </section>

      <section className="ibm-section">
        <h4 className="ibm-sub-heading">Performance Optimization</h4>
        <p className="ibm-body-text">
          Optimized frame rendering using Unity Occlusion Culling pipelines, resulting in a{' '}
          <strong>33% FPS improvement</strong>. This keeps landmark tracking smooth on low‑specification
          systems.
        </p>
      </section>

      <section className="ibm-section">
        <h4 className="ibm-sub-heading">Demonstration Video</h4>
        <div className="ibm-video-wrap">
          <video src={demoVid} controls preload="metadata">
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </>
  )
}

function TVASExtra({ project }) {
  return (
    <>
      <section className="ibm-section">
        <h4 className="ibm-sub-heading">My Role</h4>
        <p className="ibm-body-text" style={{ fontWeight: 500 }}>{project.role}</p>
      </section>

      <section className="ibm-section">
        <h4 className="ibm-sub-heading">Overview</h4>
        {project.overview?.map((para, i) => (
          <p key={i} className="ibm-body-text">{para}</p>
        ))}
      </section>

      <section className="ibm-section">
        <h4 className="ibm-sub-heading">Key Features</h4>
        <ul className="ibm-bullet-list">
          {project.features?.map((feat, i) => <li key={i}>{feat}</li>)}
        </ul>
      </section>

      <section className="ibm-section">
        <h4 className="ibm-sub-heading">Contributions</h4>
        <ul className="ibm-bullet-list">
          {project.contributions?.map((con, i) => <li key={i}>{con}</li>)}
        </ul>
      </section>

      <div className="ibm-links">
        {project.figmaLink && (
          <a href={project.figmaLink} target="_blank" rel="noreferrer" className="ibm-btn ibm-btn-primary">
            View Figma Prototype ↗
          </a>
        )}
        {project.demoLink && (
          <a href={project.demoLink} target="_blank" rel="noreferrer" className="ibm-btn ibm-btn-ghost">
            View Live Demo ↗
          </a>
        )}
      </div>
    </>
  )
}

function AuroraExtra({ project }) {
  return (
    <>
      <section className="ibm-section">
        <h4 className="ibm-sub-heading">Key Features</h4>
        <ul className="ibm-feature-list">
          {project.features?.map((feat, i) => {
            const [label, ...rest] = feat.split(': ')
            return (
              <li key={i}>
                <span className="ibm-feat-label">{label}</span>
                {rest.length > 0 && (
                  <span className="ibm-feat-desc">{rest.join(': ')}</span>
                )}
              </li>
            )
          })}
        </ul>
      </section>

      <section className="ibm-section">
        <h4 className="ibm-sub-heading">Performance Metrics (Octree Occlusion)</h4>
        <p className="ibm-body-text" style={{ fontSize: '13px', marginBottom: '12px' }}>
          Measured on the real Museum_Main scene across four camera poses.
          "OFF" = frustum-pass count; "ON" = with Octree occlusion active.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table className="ibm-table">
            <thead>
              <tr>
                <th>Camera Pose</th><th>OFF</th><th>ON</th><th>Culled</th><th>Reduction</th>
              </tr>
            </thead>
            <tbody>
              {project.performanceMetrics?.map((row, i) => (
                <tr key={i} className={row.pose === 'AVERAGE' ? 'ibm-row-highlight' : ''}>
                  <td>{row.pose}</td>
                  <td>{row.off}</td>
                  <td>{row.on}</td>
                  <td>{row.culled}</td>
                  <td style={{ color: 'var(--ibm-purple-soft)' }}>{row.reduction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="ibm-section">
        <h4 className="ibm-sub-heading">Controls Reference</h4>
        <div style={{ overflowX: 'auto' }}>
          <table className="ibm-table">
            <thead>
              <tr><th style={{ width: '32%' }}>Key / Trigger</th><th>Action</th></tr>
            </thead>
            <tbody>
              {project.controls?.map((ctrl, i) => (
                <tr key={i}>
                  <td style={{ color: 'var(--ibm-purple-muted)', fontWeight: 600 }}>{ctrl.key}</td>
                  <td>{ctrl.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="ibm-links">
        <a href={project.demo} target="_blank" rel="noreferrer" className="ibm-btn ibm-btn-primary">
          View Demonstration Video ↗
        </a>
      </div>
    </>
  )
}

// ─── Main modal ───────────────────────────────────────────────────────────────
export default function ProjectModal({ project, isOpen, onClose }) {
  // Lock background scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // ESC to close
  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  return createPortal(
    <div
      className="ibm-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={onClose}
    >
      <div className="ibm-panel" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="ibm-close" onClick={onClose} aria-label="Close modal">✕</button>

        {/* Header */}
        <span className="ibm-eyebrow">
          {project.id === 'emomaze'
            ? 'Academic Case Study'
            : project.id === 'utm-tvas'
            ? 'Academic Case Study'
            : 'Metaverse & Cloud Case Study'}
        </span>
        <h2 className="ibm-title">{project.title}</h2>
        <p className="ibm-subtitle">{project.shortDescription}</p>

        {/* Tech chips */}
        <div className="ibm-tech-row">
          {project.technologies.map((t) => (
            <span key={t} className="ibm-chip">{t}</span>
          ))}
        </div>

        {/* Per-project detail sections */}
        {project.id === 'emomaze'       && <EMOmazeExtra />}
        {project.id === 'utm-tvas'      && <TVASExtra project={project} />}
        {project.id === 'aurora-museum' && <AuroraExtra project={project} />}
      </div>
    </div>,
    document.body
  )
}
