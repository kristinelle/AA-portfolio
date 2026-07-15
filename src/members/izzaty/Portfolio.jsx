import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import About from './About.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import './portfolio.css'

// Pre-generate star particle positions (pure during render)
const STAR_COUNT = 800
const STAR_POSITIONS = new Float32Array(STAR_COUNT * 3)
for (let i = 0; i < STAR_COUNT * 3; i++) {
  // Scatter stars wide across the screen and depth
  STAR_POSITIONS[i] = (Math.random() - 0.5) * 35
}

function StarryBackground() {
  const points = useRef()

  // Slowly rotate the starry sky for organic drifting effect
  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.getElapsedTime() * 0.015
      points.current.rotation.x = state.clock.getElapsedTime() * 0.008
    }
  })

  return (
    <group>
      <ambientLight intensity={0.6} />
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[STAR_POSITIONS, 3]}
          />
        </bufferGeometry>
        {/* Subtle, soft glowing white star particles */}
        <pointsMaterial
          size={0.05}
          color="#ffffff"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>
    </group>
  )
}

export default function Portfolio() {
  return (
    <main className="ib-portfolio">
      {/* Immersive background starry scene */}
      <div className="ib-bg-canvas">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <StarryBackground />
        </Canvas>
      </div>

      <header className="ib-hero">
        <div style={{ zIndex: 10, position: 'relative' }}>
          <p className="ib-hero-eyebrow">PERSONAL PORTFOLIO</p>
          <h1 className="ib-hero-name">IZZATY BALQIS BINTI SUHAIMI</h1>
          <p className="ib-hero-tagline">Building Immersive Experiences &amp; Interactive Multimedia Systems</p>
          <p className="ib-hero-desc">
            A motivated Computer Science student specializing in Graphics and Multimedia Software at Universiti Teknologi Malaysia, with a strong passion for software development, multimedia technologies, artificial intelligence, and interactive systems. Skilled in building web-based platforms, visualization tools, and image processing applications using modern programming languages and frameworks. Recognized for leadership, teamwork, communication, and problem-solving abilities through active involvement in university organizations, technical projects, and event management.
          </p>

          <div className="ib-hero-actions">
            <a href="#projects" className="ib-btn ib-btn-primary">
              View My Work
            </a>
            <a href="#contact" className="ib-btn ib-btn-ghost">
              Contact Me
            </a>
          </div>
        </div>
      </header>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
