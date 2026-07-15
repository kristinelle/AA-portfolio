import { useRef, useState, useMemo, useEffect, useCallback } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { projects } from './data.js'
import { Heading } from './About.jsx'

const CARD_GLOW_COLOR = new THREE.Color('#f472b6')
const _scaleVec = new THREE.Vector3()

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)

    return (
        <section id="kristine-projects" className="ke-section">
            <Heading>Featured Projects</Heading>
            <p className="ke-skills-sub" style={{ margin: '-16px 0 24px' }}>
                Drag or scroll to rotate the 3D project ring. Click the center card to view details.
            </p>

            <div className="project-carousel-wrapper" style={{ position: 'relative', width: '100%', height: '560px' }}>
                <Canvas
                    camera={{ position: [0, 0, 9], fov: 45 }}
                    dpr={[1, 2]}
                    gl={{ antialias: true, alpha: true }}
                    style={{ touchAction: 'none', cursor: 'grab' }}
                >
                    <ambientLight intensity={0.55} />
                    <pointLight position={[0, 5, 8]} intensity={1.1} color="#ffe4f1" />
                    <pointLight position={[0, -4, -6]} intensity={0.35} color="#f472b6" />
                    <CarouselRing projects={projects} onSelect={setSelectedProject} />
                </Canvas>

                {selectedProject && (
                    <ProjectDetailPanel project={selectedProject} onClose={() => setSelectedProject(null)} />
                )}
            </div>
        </section>
    )
}

function CarouselRing({ projects, onSelect }) {
    const { viewport } = useThree()
    const groupRef = useRef(null)
    const dragState = useDragRotate(groupRef)
    const count = projects.length

    const radius = useMemo(() => {
        const base = THREE.MathUtils.clamp(viewport.width * 0.42, 3.2, 6.5)
        return count <= 2 ? base * 0.6 : base
    }, [viewport.width, count])

    const cardSize = useMemo(() => {
        const width = THREE.MathUtils.clamp(viewport.width * 0.16, 1.5, 2.6)
        return [width, width * 0.62]
    }, [viewport.width])

    return (
        <group ref={groupRef}>
            {projects.map((project, index) => (
                <ProjectCard
                    key={project.title}
                    project={project}
                    index={index}
                    count={count}
                    radius={radius}
                    size={cardSize}
                    dragState={dragState}
                    onSelect={onSelect}
                />
            ))}
        </group>
    )
}

function ProjectCard({ project, index, count, radius, size, dragState, onSelect }) {
    const meshRef = useRef(null)
    const materialRef = useRef(null)
    const texture = useCardTexture(project.title, project.tagline)

    const baseAngle = (index / count) * Math.PI * 2

    useFrame(() => {
        const mesh = meshRef.current
        const material = materialRef.current
        if (!mesh || !mesh.parent) return

        const worldAngle = normalizeAngle(baseAngle + mesh.parent.rotation.y)
        const focus = THREE.MathUtils.clamp(1 - Math.abs(worldAngle) / (Math.PI * 0.5), 0, 1)
        mesh.userData.focus = focus

        const targetScale = THREE.MathUtils.lerp(0.7, 1.3, focus)
        mesh.scale.lerp(_scaleVec.set(targetScale, targetScale, targetScale), 0.15)

        if (material) {
            material.emissiveIntensity = THREE.MathUtils.lerp(material.emissiveIntensity, THREE.MathUtils.lerp(0.05, 1, focus), 0.15)
            material.opacity = THREE.MathUtils.lerp(material.opacity, THREE.MathUtils.lerp(0.35, 1, focus), 0.15)
        }
    })

    const handleClick = useCallback(
        (event) => {
            event.stopPropagation()
            if (dragState.dragDistance > 6) return
            if ((meshRef.current?.userData.focus ?? 0) < 0.8) return
            onSelect(project)
        },
        [dragState, onSelect, project]
    )

    return (
        <mesh
            ref={meshRef}
            position={[Math.sin(baseAngle) * radius, 0, Math.cos(baseAngle) * radius]}
            rotation={[0, baseAngle, 0]}
            onClick={handleClick}
        >
            <planeGeometry args={size} />
            <meshStandardMaterial
                ref={materialRef}
                map={texture}
                transparent
                opacity={0.6}
                emissive={CARD_GLOW_COLOR}
                emissiveIntensity={0.15}
                roughness={0.5}
                side={THREE.DoubleSide}
            />
        </mesh>
    )
}

function ProjectDetailPanel({ project, onClose }) {
    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [onClose])

    return (
        <div
            className="project-modal-backdrop"
            onClick={onClose}
            style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(10, 4, 14, 0.7)',
                backdropFilter: 'blur(8px)',
                zIndex: 100,
            }}
        >
            <div
                className="project-modal"
                onClick={(event) => event.stopPropagation()}
                style={{
                    position: 'relative',
                    maxWidth: 480,
                    width: '90%',
                    padding: '30px 28px',
                    borderRadius: 20,
                    background: 'rgba(26, 14, 32, 0.95)',
                    border: '1px solid rgba(244, 114, 182, 0.3)',
                    color: '#f5eaf2',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                }}
            >
                <button
                    onClick={onClose}
                    aria-label="Close project details"
                    style={{
                        position: 'absolute',
                        top: 14,
                        right: 16,
                        background: 'transparent',
                        border: 'none',
                        color: '#f5eaf2',
                        fontSize: 24,
                        cursor: 'pointer',
                        lineHeight: 1,
                    }}
                >
                    ×
                </button>

                <h3 style={{ margin: '0 0 6px', fontSize: 22, fontWeight: 700 }}>{project.title}</h3>
                <p style={{ margin: '0 0 16px', color: '#f472b6', fontSize: 14, fontWeight: 500 }}>{project.tagline}</p>

                {project.image && (
                    <img
                        src={project.image}
                        alt={project.title}
                        style={{
                            width: '100%',
                            borderRadius: 12,
                            marginBottom: 16,
                            objectFit: 'cover',
                            maxHeight: 180,
                            border: '1px solid rgba(244, 114, 182, 0.15)',
                        }}
                    />
                )}

                <p style={{ margin: '0 0 20px', lineHeight: 1.6, fontSize: 14.5, color: '#cbd5e1' }}>{project.description}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            style={{
                                padding: '4px 10px',
                                borderRadius: 6,
                                fontSize: 12,
                                background: 'rgba(244, 114, 182, 0.08)',
                                border: '1px solid rgba(244, 114, 182, 0.25)',
                                color: '#f8b4d9',
                            }}
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="ke-submit-btn"
                        style={{
                            display: 'block',
                            textAlign: 'center',
                            textDecoration: 'none',
                            marginTop: 10,
                        }}
                    >
                        View Project / Demo ↗
                    </a>
                )}
            </div>
        </div>
    )
}

function useDragRotate(groupRef) {
    const { gl } = useThree()
    const state = useRef({ isDragging: false, lastX: 0, velocity: 0, dragDistance: 0 }).current

    useEffect(() => {
        const element = gl.domElement

        function handlePointerDown(event) {
            state.isDragging = true
            state.lastX = event.clientX
            state.dragDistance = 0
            state.velocity = 0
            element.style.cursor = 'grabbing'
            element.setPointerCapture?.(event.pointerId)
        }

        function handlePointerMove(event) {
            if (!state.isDragging) return
            const deltaX = event.clientX - state.lastX
            state.lastX = event.clientX
            state.dragDistance += Math.abs(deltaX)
            const rotationDelta = deltaX * 0.005
            if (groupRef.current) groupRef.current.rotation.y += rotationDelta
            state.velocity = rotationDelta
        }

        function handlePointerUp() {
            state.isDragging = false
            element.style.cursor = 'grab'
        }

        function handleWheel(event) {
            event.preventDefault()
            const delta = (event.deltaY || event.deltaX) * 0.0009
            if (groupRef.current) groupRef.current.rotation.y -= delta
            state.velocity -= delta
        }

        element.addEventListener('pointerdown', handlePointerDown)
        window.addEventListener('pointermove', handlePointerMove)
        window.addEventListener('pointerup', handlePointerUp)
        element.addEventListener('wheel', handleWheel, { passive: false })

        return () => {
            element.removeEventListener('pointerdown', handlePointerDown)
            window.removeEventListener('pointermove', handlePointerMove)
            window.removeEventListener('pointerup', handlePointerUp)
            element.removeEventListener('wheel', handleWheel)
        }
    }, [gl, groupRef, state])

    useFrame(() => {
        if (state.isDragging || !groupRef.current) return
        if (Math.abs(state.velocity) > 0.00005) {
            groupRef.current.rotation.y += state.velocity
            state.velocity *= 0.93
        } else {
            state.velocity = 0
        }
    })

    return state
}

function useCardTexture(title, tagline) {
    return useMemo(() => {
        const canvas = document.createElement('canvas')
        canvas.width = 512
        canvas.height = 320
        const ctx = canvas.getContext('2d')

        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
        gradient.addColorStop(0, '#2a1130')
        gradient.addColorStop(1, '#170a1c')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        ctx.strokeStyle = 'rgba(244, 114, 182, 0.55)'
        ctx.lineWidth = 4
        ctx.strokeRect(2, 2, canvas.width - 4, canvas.height - 4)

        ctx.fillStyle = '#ffffff'
        ctx.font = '600 34px system-ui, sans-serif'
        drawWrappedText(ctx, title, 32, 100, canvas.width - 64, 42)

        ctx.fillStyle = '#f472b6'
        ctx.font = '500 22px system-ui, sans-serif'
        drawWrappedText(ctx, tagline, 32, 220, canvas.width - 64, 28)

        const texture = new THREE.CanvasTexture(canvas)
        texture.colorSpace = THREE.SRGBColorSpace
        texture.needsUpdate = true
        return texture
    }, [title, tagline])
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ')
    let line = ''
    let cursorY = y
    for (const word of words) {
        const testLine = line ? `${line} ${word}` : word
        if (ctx.measureText(testLine).width > maxWidth && line) {
            ctx.fillText(line, x, cursorY)
            line = word
            cursorY += lineHeight
        } else {
            line = testLine
        }
    }
    if (line) ctx.fillText(line, x, cursorY)
}

function normalizeAngle(angle) {
    let a = angle % (Math.PI * 2)
    if (a > Math.PI) a -= Math.PI * 2
    if (a < -Math.PI) a += Math.PI * 2
    return a
}
