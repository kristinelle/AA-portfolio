import { useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import { skillGroups } from './data.js'

const ALL = 'All'

const CATEGORY_COLOR = {
  'Programming Languages': '#10b981',
  Frameworks: '#6ee7b7',
  Tools: '#f8b4d9',
  'Professional Skills': '#f472b6',
}

// Place the skills evenly around a circle so they form a rotating ring.
function Ring({ skills, radius }) {
  return (
    <group rotation={[0.2, 0, 0]}>
      {skills.map((item, i) => {
        const angle = (i / skills.length) * Math.PI * 2
        return (
          <Html
            key={`${item.category}-${item.skill}`}
            position={[Math.sin(angle) * radius, 0, Math.cos(angle) * radius]}
            center
            distanceFactor={10}
          >
            <span className="aa-skill3d-chip" style={{ '--chip': CATEGORY_COLOR[item.category] }}>
              {item.skill}
            </span>
          </Html>
        )
      })}
    </group>
  )
}

export default function Skills3D({ activeCategory = ALL }) {
  const skills = useMemo(() => {
    const groups =
      activeCategory === ALL
        ? skillGroups
        : skillGroups.filter((group) => group.category === activeCategory)
    return groups.flatMap((group) =>
      group.skills.map((skill) => ({ skill, category: group.category })),
    )
  }, [activeCategory])

  const radius = Math.max(2.6, skills.length * 0.42)
  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  return (
    <div className="aa-skills3d">
      <Canvas camera={{ position: [0, 1, radius + 5], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.9} />
        <Ring skills={skills} radius={radius} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableDamping
          autoRotate={!reduceMotion}
          autoRotateSpeed={0.9}
          rotateSpeed={0.5}
        />
      </Canvas>
      <span className="aa-skills3d-hint">Drag to rotate</span>
    </div>
  )
}
