import { useState, useRef, useMemo, useEffect, useCallback } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { skillGroups } from './data.js'
import { Heading } from './About.jsx'

const ALL = 'All'

const CATEGORY_COLORS = {
  'Programming Languages': '#f472b6',
  Software: '#60a5fa',
  'Technical Skills': '#34d399',
  'Soft Skills': '#fbbf24',
  Languages: '#a78bfa',
}
const FALLBACK_COLOR = '#e5e7eb'

const _dummy = new THREE.Object3D()

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(ALL)
  const [hoveredName, setHoveredName] = useState(null)
  const labelRef = useRef(null)

  const categories = [ALL, ...skillGroups.map((group) => group.category)]

  const flatSkills = useMemo(() => {
    return skillGroups.flatMap((g) =>
      g.skills.map((name) => ({ name, category: g.category }))
    )
  }, [])

  const visibleSkills = useMemo(() => {
    if (activeCategory === ALL) return flatSkills
    return flatSkills.filter((s) => s.category === activeCategory)
  }, [activeCategory, flatSkills])

  const groups = useMemo(() => groupByCategory(visibleSkills), [visibleSkills])
  const activeCategories = useMemo(() => Object.keys(groups), [groups])

  const handleHover = useCallback((payload) => {
    setHoveredName(payload ? payload.name : null)
  }, [])

  return (
    <section id="kristine-skills" className="ke-section">
      <Heading>Skills &amp; Expertise</Heading>
      <p className="ke-skills-sub">Select a category to filter my skillset.</p>

      <div className="ke-tabs" role="tablist" aria-label="Skill categories">
        {categories.map((category) => (
          <button
            key={category}
            role="tab"
            aria-selected={activeCategory === category}
            className={`ke-tab ${activeCategory === category ? 'ke-tab-active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="skill-cloud-wrapper" style={{ position: 'relative', width: '100%', height: '520px' }}>
        <Canvas camera={{ position: [0, 0, 13], fov: 48 }} dpr={[1, 2]}>
          <ambientLight intensity={0.6} />
          <pointLight position={[6, 6, 6]} intensity={1} />
          <pointLight position={[-6, -4, -4]} intensity={0.4} color="#f472b6" />
          <SkillCloudScene groups={groups} onHover={handleHover} labelRef={labelRef} />
        </Canvas>

        <div
          ref={labelRef}
          className="skill-cloud-label"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            pointerEvents: 'none',
            opacity: 0,
            padding: '4px 10px',
            borderRadius: 6,
            background: 'rgba(20, 10, 25, 0.88)',
            color: '#fff',
            fontSize: 13,
            whiteSpace: 'nowrap',
            transition: 'opacity 0.15s ease',
            zIndex: 10,
          }}
        >
          {hoveredName ?? ''}
        </div>

        <div
          className="skill-cloud-legend"
          style={{ position: 'absolute', bottom: 12, left: 12, display: 'flex', flexWrap: 'wrap', gap: 12 }}
        >
          {activeCategories.map((category) => (
            <span key={category} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#e5e7eb' }}>
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: CATEGORY_COLORS[category] ?? FALLBACK_COLOR,
                  display: 'inline-block',
                }}
              />
              {category}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCloudScene({ groups, onHover, labelRef }) {
  const rootRef = useRef(null)
  const { gl, size, camera } = useThree()
  const pointer = useRef({ x: 0, y: 0 })
  const hoveredRef = useRef(null)

  useEffect(() => {
    const element = gl.domElement
    function handlePointerMove(event) {
      const rect = element.getBoundingClientRect()
      pointer.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      pointer.current.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1)
    }
    element.addEventListener('pointermove', handlePointerMove)
    return () => element.removeEventListener('pointermove', handlePointerMove)
  }, [gl])

  useFrame((_, delta) => {
    const root = rootRef.current
    if (!root) return

    const idleSpeed = 0.05
    const parallaxInfluence = 0.12
    root.rotation.y += (idleSpeed + pointer.current.x * parallaxInfluence) * delta
    root.rotation.x = THREE.MathUtils.lerp(root.rotation.x, pointer.current.y * 0.15, 0.04)

    if (hoveredRef.current && labelRef.current) {
      const worldPos = hoveredRef.current.worldPos.clone()
      root.localToWorld(worldPos)
      const projected = worldPos.project(camera)
      const x = (projected.x * 0.5 + 0.5) * size.width
      const y = (-projected.y * 0.5 + 0.5) * size.height
      labelRef.current.style.transform = `translate(${x}px, ${y - 26}px)`
      labelRef.current.style.opacity = '1'
    } else if (labelRef.current) {
      labelRef.current.style.opacity = '0'
    }
  })

  const handleNodeHover = useCallback((payload) => {
    hoveredRef.current = payload
    onHover(payload)
  }, [onHover])

  return (
    <group ref={rootRef}>
      {Object.entries(groups).map(([category, categorySkills], groupIndex) => (
        <CategoryOrbit
          key={category}
          category={category}
          skills={categorySkills}
          groupIndex={groupIndex}
          totalGroups={Object.keys(groups).length}
          onHover={handleNodeHover}
        />
      ))}
    </group>
  )
}

function CategoryOrbit({ category, skills, groupIndex, totalGroups, onHover }) {
  const meshRef = useRef(null)
  const pausedIndexRef = useRef(-1)
  const color = CATEGORY_COLORS[category] ?? FALLBACK_COLOR
  const count = skills.length

  const nodeParams = useMemo(() => {
    const shellRadius = 3.4 + groupIndex * 1.1
    const tilt = (groupIndex / totalGroups) * Math.PI * 0.6
    return skills.map((skill, i) => ({
      skill,
      baseAngle: (i / count) * Math.PI * 2 + groupIndex,
      speed: 0.15 + (i % 3) * 0.05,
      radius: shellRadius + (i % 2) * 0.3,
      tilt,
      frozenAngle: 0,
    }))
  }, [skills, count, groupIndex, totalGroups])

  const nodePosition = useCallback((param, angle) => {
    return new THREE.Vector3(
      Math.cos(angle) * param.radius,
      Math.sin(angle * 0.7 + param.tilt) * (param.radius * 0.3),
      Math.sin(angle) * param.radius
    )
  }, [])

  useFrame(({ clock }) => {
    const mesh = meshRef.current
    if (!mesh) return
    const t = clock.getElapsedTime()

    for (let i = 0; i < count; i++) {
      const param = nodeParams[i]
      const isPaused = pausedIndexRef.current === i
      const angle = isPaused ? param.frozenAngle : param.baseAngle + t * param.speed
      if (!isPaused) param.frozenAngle = angle

      const pos = nodePosition(param, angle)
      _dummy.position.copy(pos)
      const scale = isPaused ? 1.5 : 1
      _dummy.scale.setScalar(scale)
      _dummy.rotation.set(t * 0.6, t * 0.4, 0)
      _dummy.updateMatrix()
      mesh.setMatrixAt(i, _dummy.matrix)
    }
    mesh.instanceMatrix.needsUpdate = true
  })

  const handlePointerOver = useCallback((event) => {
    event.stopPropagation()
    const i = event.instanceId
    if (i == null) return
    pausedIndexRef.current = i
    document.body.style.cursor = 'pointer'
    const param = nodeParams[i]
    onHover({ name: param.skill.name, worldPos: nodePosition(param, param.frozenAngle) })
  }, [nodeParams, nodePosition, onHover])

  const handlePointerOut = useCallback((event) => {
    event.stopPropagation()
    pausedIndexRef.current = -1
    document.body.style.cursor = 'auto'
    onHover(null)
  }, [onHover])

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}>
      <icosahedronGeometry args={[0.22, 0]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.35} roughness={0.4} metalness={0.15} />
    </instancedMesh>
  )
}

function groupByCategory(skills) {
  const groups = {}
  for (const skill of skills) {
    if (!groups[skill.category]) groups[skill.category] = []
    groups[skill.category].push(skill)
  }
  return groups
}
