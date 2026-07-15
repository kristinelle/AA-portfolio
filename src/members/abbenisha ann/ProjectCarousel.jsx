import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { RoundedBox, useTexture } from '@react-three/drei'
import { getAsset } from './assets.js'

const RADIUS = 3
const CARD_W = 2.7
const CARD_H = 1.52

const FALLBACK =
  'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='

function Card({ project, angle, isFront, onClick }) {
  const texture = useTexture(getAsset(project.thumbnail) ?? FALLBACK)

  return (
    <group
      position={[Math.sin(angle) * RADIUS, 0, Math.cos(angle) * RADIUS]}
      rotation={[0, angle, 0]}
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
      onPointerOver={() => (document.body.style.cursor = 'pointer')}
      onPointerOut={() => (document.body.style.cursor = 'auto')}
    >
      <RoundedBox args={[CARD_W + 0.14, CARD_H + 0.14, 0.06]} radius={0.05} position={[0, 0, -0.04]}>
        <meshBasicMaterial color={isFront ? '#10b981' : '#243b35'} />
      </RoundedBox>
      <mesh>
        <planeGeometry args={[CARD_W, CARD_H]} />
        <meshBasicMaterial map={texture} toneMapped={false} transparent opacity={isFront ? 1 : 0.55} />
      </mesh>
    </group>
  )
}

// The ring rotates so the active card is always at the front. Rotation follows
// `active` alone, so buttons, dots and card clicks can never fall out of sync.
function Ring({ projects, active, onSelect }) {
  const group = useRef()
  const targetY = useRef(0)
  const prev = useRef(active)
  const step = (Math.PI * 2) / projects.length

  useEffect(() => {
    let d = active - prev.current
    d = ((d % projects.length) + projects.length) % projects.length
    if (d > projects.length / 2) d -= projects.length
    targetY.current -= d * step
    prev.current = active
  }, [active, projects.length, step])

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += (targetY.current - group.current.rotation.y) * 0.12
    }
  })

  return (
    <group ref={group}>
      {projects.map((project, i) => (
        <Card
          key={project.id}
          project={project}
          angle={i * step}
          isFront={i === active}
          onClick={() => onSelect(i)}
        />
      ))}
    </group>
  )
}

export default function ProjectCarousel({ projects, onOpen }) {
  const [active, setActive] = useState(0)

  const select = (index) => {
    if (index === active) onOpen(projects[index])
    else setActive(index)
  }
  const move = (dir) => setActive((a) => (a + dir + projects.length) % projects.length)
  const current = projects[active]

  return (
    <div className="aa-carousel">
      <div className="aa-carousel-stage">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
          <ambientLight intensity={1} />
          <Suspense fallback={null}>
            <Ring projects={projects} active={active} onSelect={select} />
          </Suspense>
        </Canvas>

        <button className="aa-carousel-nav aa-carousel-prev" onClick={() => move(-1)} aria-label="Previous project">
          ‹
        </button>
        <button className="aa-carousel-nav aa-carousel-next" onClick={() => move(1)} aria-label="Next project">
          ›
        </button>
      </div>

      <div className="aa-carousel-info">
        <h3 className="aa-carousel-title">{current.title}</h3>
        <p className="aa-carousel-text">{current.shortDescription}</p>
        <button className="aa-btn aa-btn-primary" onClick={() => onOpen(current)}>
          View Details
          <span className="aa-btn-arrow" aria-hidden="true">→</span>
        </button>
      </div>

      <div className="aa-carousel-dots" role="tablist" aria-label="Projects">
        {projects.map((project, i) => (
          <button
            key={project.id}
            role="tab"
            aria-selected={i === active}
            aria-label={project.title}
            className={`aa-carousel-dot ${i === active ? 'aa-carousel-dot-active' : ''}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  )
}
