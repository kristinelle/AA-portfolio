import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const COLORS = ['#38bdf8', '#2dd4bf', '#5eead4', '#f472b6', '#22d3ee']


function Fish({ seed }) {
  const group = useRef()

  const cfg = useMemo(() => {
    const rand = (min, max) => min + Math.random() * (max - min)
    return {
      radiusX: rand(1.1, 1.7),
      radiusZ: rand(0.4, 0.9),
      speed: rand(0.18, 0.32),
      phase: rand(0, Math.PI * 2),
      bobSpeed: rand(1.2, 2.2),
      bobAmount: rand(0.08, 0.18),
      y: rand(-0.6, 0.7),
      scale: rand(0.16, 0.26),
      color: COLORS[seed % COLORS.length],
      direction: seed % 2 === 0 ? 1 : -1,
    }
  }, [seed])

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.elapsedTime * cfg.speed * cfg.direction + cfg.phase
    const x = Math.cos(t) * cfg.radiusX
    const z = Math.sin(t) * cfg.radiusZ
    const y = cfg.y + Math.sin(state.clock.elapsedTime * cfg.bobSpeed + cfg.phase) * cfg.bobAmount

    group.current.position.set(x, y, z)


    const nextT = t + 0.05
    const nx = Math.cos(nextT) * cfg.radiusX
    const nz = Math.sin(nextT) * cfg.radiusZ
    group.current.rotation.y = Math.atan2(nx - x, nz - z)

    group.current.children[1].rotation.y = Math.sin(state.clock.elapsedTime * 6 + cfg.phase) * 0.5
  })

  return (
    <group ref={group} scale={cfg.scale}>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[0.5, 1.6, 10]} />
        <meshStandardMaterial color={cfg.color} emissive={cfg.color} emissiveIntensity={0.25} roughness={0.4} />
      </mesh>
      <mesh position={[0, 0, 0.9]} rotation={[0, 0, Math.PI / 2]} scale={[0.6, 0.9, 0.6]}>
        <coneGeometry args={[0.4, 0.7, 4]} />
        <meshStandardMaterial color={cfg.color} emissive={cfg.color} emissiveIntensity={0.2} roughness={0.5} />
      </mesh>
    </group>
  )
}

function Bubbles() {
  const points = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(24 * 3)
    for (let i = 0; i < 24; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 2.4
      arr[i * 3 + 1] = (Math.random() - 0.5) * 3
      arr[i * 3 + 2] = (Math.random() - 0.5) * 1.5
    }
    return arr
  }, [])

  useFrame((state, delta) => {
    if (!points.current) return
    const pos = points.current.geometry.attributes.position
    for (let i = 0; i < pos.count; i++) {
      let y = pos.getY(i) + delta * 0.22
      if (y > 1.6) y = -1.6
      pos.setY(i, y)
    }
    pos.needsUpdate = true
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#5eead4" size={0.035} transparent opacity={0.45} />
    </points>
  )
}

export default function FishSchoolCompanion() {
  return (
    <Canvas
      camera={{ position: [0, 0.3, 3.6], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      style={{ pointerEvents: 'none' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[2, 2, 2]} intensity={1.4} color="#38bdf8" />
      <Bubbles />
      {Array.from({ length: 6 }).map((_, i) => (
        <Fish key={i} seed={i} />
      ))}
    </Canvas>
  )
}
