import { Link } from 'react-router-dom'
import { projects } from './data.js'
import './portfolio.css'

export default function AuroraProject() {
  const project = projects.find(p => p.id === 'aurora-museum')

  return (
    <main className="ib-portfolio" style={{ padding: '40px 24px 120px' }}>
      <div className="ib-section" style={{ maxWidth: '900px' }}>
        <Link to="/member/izzaty" className="ib-btn ib-btn-ghost" style={{ marginBottom: '32px' }}>
          ← Back to Portfolio
        </Link>

        <header style={{ marginBottom: '40px' }}>
          <span className="ib-hero-eyebrow">Metaverse &amp; Cloud Case Study</span>
          <h1 className="ib-hero-name" style={{ fontSize: 'clamp(32px, 5vw, 56px)', textAlign: 'left', margin: '16px 0' }}>
            {project.title}
          </h1>
          <p className="ib-hero-tagline" style={{ margin: '0 0 24px', textAlign: 'left' }}>
            Optimized AI-Powered Metaverse Application with Firebase
          </p>
        </header>

        <div className="ib-about-grid" style={{ marginBottom: '48px' }}>
          <div className="ib-panel">
            <h3 className="ib-panel-title">Overview</h3>
            <p style={{ lineHeight: '1.7', color: '#cbd5e1', marginBottom: '20px' }}>
              {project.longDescription}
            </p>

            <h3 className="ib-panel-title ib-panel-title-spaced">Key Features</h3>
            <ul className="ib-list" style={{ gap: '12px' }}>
              {project.features.map((feat, idx) => {
                const parts = feat.split(': ')
                return (
                  <li key={idx} className="ib-list-item">
                    <span className="ib-list-role">{parts[0]}</span>
                    <span className="ib-list-details" style={{ margin: 0 }}>{parts[1]}</span>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="ib-panel" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <h3 className="ib-panel-title">Technologies</h3>
              <ul className="ib-chip-list">
                {project.technologies.map((tech) => (
                  <li key={tech} className="ib-skill-chip">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="ib-panel-title">Project Links</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="ib-btn ib-btn-primary"
                  style={{ textDecoration: 'none', justifyContent: 'center' }}
                >
                  View Demonstration Video ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics Section */}
        <div className="ib-panel" style={{ marginBottom: '48px' }}>
          <h3 className="ib-panel-title">Performance Metrics (Octree Occlusion)</h3>
          <p style={{ fontSize: '14px', color: '#cbd5e1', marginBottom: '20px', lineHeight: '1.6' }}>
            Measured on the real Museum_Main scene across four camera poses. 
            "OFF" indicates the frustum-pass count (what Unity renders regardless); 
            "ON" is the count with frustum-and-octree occlusion culling active.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', color: '#cbd5e1', fontSize: '14.5px', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '12px 8px', color: 'var(--purple-soft)' }}>Camera Pose</th>
                  <th style={{ padding: '12px 8px', color: 'var(--purple-soft)' }}>OFF</th>
                  <th style={{ padding: '12px 8px', color: 'var(--purple-soft)' }}>ON</th>
                  <th style={{ padding: '12px 8px', color: 'var(--purple-soft)' }}>Culled</th>
                  <th style={{ padding: '12px 8px', color: 'var(--purple-soft)' }}>Reduction</th>
                </tr>
              </thead>
              <tbody>
                {project.performanceMetrics.map((row, idx) => {
                  const isAvg = row.pose === 'AVERAGE'
                  return (
                    <tr key={idx} style={{ 
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                      fontWeight: isAvg ? '700' : 'normal',
                      background: isAvg ? 'rgba(168, 85, 247, 0.08)' : 'transparent'
                    }}>
                      <td style={{ padding: '12px 8px' }}>{row.pose}</td>
                      <td style={{ padding: '12px 8px' }}>{row.off}</td>
                      <td style={{ padding: '12px 8px' }}>{row.on}</td>
                      <td style={{ padding: '12px 8px' }}>{row.culled}</td>
                      <td style={{ padding: '12px 8px', color: 'var(--purple-muted)' }}>{row.reduction}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Controls Reference Section */}
        <div className="ib-panel">
          <h3 className="ib-panel-title">Controls Reference</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', color: '#cbd5e1', fontSize: '14.5px', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '12px 8px', color: 'var(--purple-soft)', width: '30%' }}>Key / Action Trigger</th>
                  <th style={{ padding: '12px 8px', color: 'var(--purple-soft)' }}>Action Description</th>
                </tr>
              </thead>
              <tbody>
                {project.controls.map((ctrl, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <td style={{ padding: '12px 8px', fontWeight: '600', color: 'var(--purple-muted)' }}>{ctrl.key}</td>
                    <td style={{ padding: '12px 8px' }}>{ctrl.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}
