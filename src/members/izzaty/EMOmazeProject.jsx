import { Link } from 'react-router-dom'
import overviewImg from './asset/EMOmaze/Overview.png'
import demoVid from './asset/EMOmaze/EMOmaze Demonstration.mp4'
import './portfolio.css'

export default function EMOmazeProject() {
  return (
    <main className="ib-portfolio" style={{ padding: '40px 24px 120px' }}>
      <div className="ib-section" style={{ maxWidth: '900px' }}>
        <Link to="/izzaty" className="ib-btn ib-btn-ghost" style={{ marginBottom: '32px' }}>
          ← Back to Portfolio
        </Link>

        <header style={{ marginBottom: '40px' }}>
          <span className="ib-hero-eyebrow">Academic Case Study</span>
          <h1 className="ib-hero-name" style={{ fontSize: 'clamp(32px, 5vw, 56px)', textAlign: 'left', margin: '16px 0' }}>
            EMOmaze Room
          </h1>
          <p className="ib-hero-tagline" style={{ margin: '0 0 24px', textAlign: 'left' }}>
            A Real‑Time Facial‑Expression‑Controlled 3D Maze Navigation Game in Unity.
          </p>
        </header>

        {/* Project Hero Banner */}
        <div className="ib-panel" style={{ padding: '0', overflow: 'hidden', marginBottom: '40px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <img 
            src={overviewImg} 
            alt="EMOmaze Room Gameplay Overview" 
            style={{ width: '100%', height: 'auto', display: 'block' }} 
          />
        </div>

        <div className="ib-about-grid">
          {/* Main Case Study Text */}
          <div className="ib-panel">
            <h3 className="ib-panel-title">Project Abstract</h3>
            <p style={{ lineHeight: '1.7', color: '#cbd5e1', marginBottom: '20px' }}>
              EMOmaze Room is a hands-free 3D navigation game built in Unity 2022.3.20f1. 
              Instead of traditional keyboard inputs, players steer a character avatar using only facial expressions captured dynamically via webcam. The system detects face landmarks in real-time using Google MediaPipe and classifies them into emotions like Happy, Sad, Angry, and Surprise.
            </p>

            <h3 className="ib-panel-title ib-panel-title-spaced">Key Implementations</h3>
            <ul className="ib-list" style={{ gap: '16px' }}>
              <li className="ib-list-item">
                <span className="ib-list-role">Blendshape Emotion Classifier</span>
                <span className="ib-list-details">
                  Integrated MediaPipe facial landmark coordinates with blendshape-based scoring thresholds to map specific facial configurations into directional movement commands.
                </span>
              </li>
              <li className="ib-list-item">
                <span className="ib-list-role">Drift &amp; Movement Physics</span>
                <span className="ib-list-details">
                  Configured Unity CharacterController physics, integrating drift variables and collision bounds to ensure smooth navigation in tight corridors.
                </span>
              </li>
              <li className="ib-list-item">
                <span className="ib-list-role">LAN Multiplayer Setup</span>
                <span className="ib-list-details">
                  Implemented Mirror LAN multiplayer support, synchronizing movement states and scoreboard stats across connected hosts.
                </span>
              </li>
            </ul>
          </div>

          {/* Technical Specs & Demo */}
          <div className="ib-panel" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <h3 className="ib-panel-title">Technologies</h3>
              <ul className="ib-chip-list">
                {['Unity 2022.3.20f1', 'MediaPipe', 'Mirror Networking', 'C#', 'Blendshape Classifier'].map((tech) => (
                  <li key={tech} className="ib-skill-chip">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="ib-panel-title">Performance Optimization</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#94a3b8' }}>
                Optimized frame rendering using Unity Occlusion Culling pipelines, resulting in a <strong>33% FPS improvement</strong>. This keeps landmark tracking smooth on low-specification systems.
              </p>
            </div>

            <div>
              <h3 className="ib-panel-title">Demonstration Video</h3>
              <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                <video 
                  src={demoVid} 
                  controls 
                  style={{ width: '100%', display: 'block' }} 
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
