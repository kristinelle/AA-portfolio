import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import './scene.css'



const EMERALD = '#10b981'
const ROSE = '#f472b6'

function useGridTexture() {
  return useMemo(() => {
    const size = 256
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size

    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#0f172a'
    ctx.fillRect(0, 0, size, size)

    ctx.strokeStyle = EMERALD
    ctx.lineWidth = 5
    for (let i = 0; i <= size; i += 64) {
      ctx.beginPath()
      ctx.moveTo(i, 0)
      ctx.lineTo(i, size)
      ctx.moveTo(0, i)
      ctx.lineTo(size, i)
      ctx.stroke()
    }

    ctx.globalAlpha = 0.4
    ctx.fillStyle = ROSE
    ctx.fillRect(64, 64, 64, 64)
    ctx.fillStyle = EMERALD
    ctx.fillRect(128, 128, 64, 64)

    const texture = new THREE.CanvasTexture(canvas)
    texture.wrapS = THREE.RepeatWrapping
    texture.wrapT = THREE.RepeatWrapping
    texture.repeat.set(2, 2)
    texture.anisotropy = 8
    return texture
  }, [])
}

function Shape({ position, spin, floatOffset, paused, color, texture, children }) {
  const mesh = useRef()
  const scaleTarget = useMemo(() => new THREE.Vector3(), [])
  const [hovered, setHovered] = useState(false)
  const [boosted, setBoosted] = useState(false)

  useFrame((state, delta) => {
    if (!mesh.current) return

    if (!paused) {
      const speed = boosted ? spin * 3.5 : spin
      mesh.current.rotation.x += delta * speed
      mesh.current.rotation.y += delta * speed * 1.3

      const t = state.clock.elapsedTime + floatOffset
      mesh.current.position.y = position[1] + Math.sin(t) * 0.25
    }

    // Hover feedback stays responsive even while the animation is paused.
    const target = hovered ? 1.22 : 1
    scaleTarget.setScalar(target)
    mesh.current.scale.lerp(scaleTarget, 0.14)
  })

  return (
    <mesh
      ref={mesh}
      position={position}
      castShadow
      receiveShadow
      onPointerOver={(e) => {
        e.stopPropagation()
        setHovered(true)
        document.body.style.cursor = 'pointer'
      }}
      onPointerOut={() => {
        setHovered(false)
        document.body.style.cursor = 'auto'
      }}
      onClick={(e) => {
        e.stopPropagation()
        setBoosted((current) => !current)
      }}
    >
      {children}
      <meshStandardMaterial
        color={color}
        map={texture}
        roughness={boosted ? 0.15 : 0.28}
        metalness={0.65}
        emissive={hovered ? EMERALD : '#000000'}
        emissiveIntensity={hovered ? 0.55 : 0}
      />
    </mesh>
  )
}

function Rig({ paused }) {
  const group = useRef()
  const accentLight = useRef()
  const texture = useGridTexture()
  const keys = useRef({ left: false, right: false, up: false, down: false })

  useEffect(() => {
    const map = {
      ArrowLeft: 'left',
      ArrowRight: 'right',
      ArrowUp: 'up',
      ArrowDown: 'down',
    }

    const setKey = (e, value) => {
      const key = map[e.key]
      if (!key) return
      e.preventDefault()
      keys.current[key] = value
    }

    const onDown = (e) => setKey(e, true)
    const onUp = (e) => setKey(e, false)

    window.addEventListener('keydown', onDown)
    window.addEventListener('keyup', onUp)
    return () => {
      window.removeEventListener('keydown', onDown)
      window.removeEventListener('keyup', onUp)
    }
  }, [])

  useFrame((state, delta) => {
    if (!group.current) return

    const { left, right, up, down } = keys.current
    if (left) group.current.rotation.y -= delta * 1.2
    if (right) group.current.rotation.y += delta * 1.2
    if (up) group.current.rotation.x -= delta * 0.8
    if (down) group.current.rotation.x += delta * 0.8

    if (accentLight.current) {
      accentLight.current.intensity = 28 + Math.sin(state.clock.elapsedTime * 1.6) * 12
    }
  })

  return (
    <group ref={group}>
      <ambientLight intensity={0.35} />
      <directionalLight
        position={[5, 6, 4]}
        intensity={2.4}
        color="#ffffff"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight ref={accentLight} position={[-4, 2, 3]} intensity={28} color={EMERALD} />
      {/* Rose rim light, to separate the shapes from the dark background. */}
      <pointLight position={[4, -2, -3]} intensity={14} color={ROSE} />

      <Shape position={[0, 0, 0]} spin={0.4} floatOffset={0} paused={paused} color="#10b981">
        <torusKnotGeometry args={[0.9, 0.3, 180, 28]} />
      </Shape>

      <Shape position={[-2.9, 0.6, -0.6]} spin={0.6} floatOffset={1.4} paused={paused} color="#6ee7b7">
        <icosahedronGeometry args={[0.75, 0]} />
      </Shape>

      <Shape position={[2.9, 0.4, -0.4]} spin={0.5} floatOffset={2.6} paused={paused} color="#f8b4d9">
        <octahedronGeometry args={[0.8, 0]} />
      </Shape>

      <Shape position={[-1.8, -1.6, 1.2]} spin={0.7} floatOffset={3.7} paused={paused} color="#f472b6">
        <dodecahedronGeometry args={[0.6, 0]} />
      </Shape>

      <Shape
        position={[2.0, -1.6, 1.1]}
        spin={0.35}
        floatOffset={5.1}
        paused={paused}
        color="#ffffff"
        texture={texture}
      >
        <boxGeometry args={[1.1, 1.1, 1.1]} />
      </Shape>
    </group>
  )
}

export default function Scene() {
  const [paused, setPaused] = useState(false)

  // Space toggles the animation, unless the visitor is typing or on a control.
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.code !== 'Space') return
      if (e.target.closest?.('input, textarea, button, a')) return
      e.preventDefault()
      setPaused((current) => !current)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div className="scene">
      <Canvas
        shadows
        camera={{ position: [0, 0.6, 8.5], fov: 48 }}
        dpr={[1, 2]}
        gl={{ antialias: true }}
      >
        <color attach="background" args={['#0f172a']} />
        <fog attach="fog" args={['#0f172a', 9, 20]} />

        <Rig paused={paused} />

        <OrbitControls
          enablePan={false}
          enableDamping
          dampingFactor={0.06}
          minDistance={4.5}
          maxDistance={14}
          autoRotate={!paused}
          autoRotateSpeed={0.45}
        />
      </Canvas>

      <div className="scene-hint" role="note">
        <span>Drag to orbit</span>
        <span>Scroll to zoom</span>
        <span>Hover &amp; click a shape</span>
        <span>Arrow keys to steer</span>
        <button
          type="button"
          className="scene-toggle"
          onClick={() => setPaused((current) => !current)}
          aria-pressed={paused}
        >
          {paused ? 'Resume' : 'Pause'}
        </button>
      </div>
    </div>
  )
}
