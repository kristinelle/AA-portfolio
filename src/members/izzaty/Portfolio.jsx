import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import About from './About.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import { profile } from './data.js'
import './portfolio.css'

const PARTICLE_COUNT = 350
const PARTICLE_POSITIONS = new Float32Array(PARTICLE_COUNT * 3)
for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
  PARTICLE_POSITIONS[i] = (Math.random() - 0.5) * 12
}

function FloatingShapes() {
  const points = useRef()

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.getElapsedTime() * 0.05
      points.current.rotation.x = state.clock.getElapsedTime() * 0.03
    }
  })

  return (
    <group>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={2} color="#06b6d4" />
      <pointLight position={[-3, -3, 2]} intensity={1.5} color="#a855f7" />

      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-2, 0, 0]}>
          <dodecahedronGeometry args={[0.9, 0]} />
          <meshStandardMaterial color="#06b6d4" roughness={0.2} metalness={0.8} wireframe />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[2.2, 0.8, -1]}>
          <octahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial color="#a855f7" roughness={0.1} metalness={0.9} />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={1} floatIntensity={2.5}>
        <mesh position={[0, -1.2, 1]}>
          <torusGeometry args={[0.6, 0.2, 16, 100]} />
          <meshStandardMaterial color="#3b82f6" roughness={0.3} metalness={0.7} />
        </mesh>
      </Float>

      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[PARTICLE_POSITIONS, 3]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.06} color="#06b6d4" transparent opacity={0.6} sizeAttenuation />
      </points>
    </group>
  )
}

export default function Portfolio() {
  const [is3DActive, setIs3DActive] = useState(true)

  return (
    <main className="ib-portfolio">
      <header className="ib-hero">
        {is3DActive && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 1,
              opacity: 0.65,
              pointerEvents: 'none',
            }}
          >
            <Canvas camera={{ position: [0, 0, 6.5], fov: 50 }}>
              <FloatingShapes />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
            </Canvas>
          </div>
        )}

        <div style={{ zIndex: 10, position: 'relative' }}>
          <p className="ib-hero-eyebrow">Personal Portfolio</p>
          <h1 className="ib-hero-name">{profile.name}</h1>
          <p className="ib-hero-tagline">{profile.tagline}</p>
          <p className="ib-hero-desc">{profile.summary[0]}</p>

          <div className="ib-hero-actions">
            <a href="#projects" className="ib-btn ib-btn-primary">
              View My Work
            </a>
            <a href="#contact" className="ib-btn ib-btn-ghost">
              Contact Me
            </a>
            <button
              onClick={() => setIs3DActive(!is3DActive)}
              className="ib-btn ib-btn-ghost"
              style={{ fontSize: '12px', padding: '10px 18px' }}
            >
              Toggle 3D: {is3DActive ? 'ON' : 'OFF'}
            </button>
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
