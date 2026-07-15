import { useEffect, useRef } from 'react'

// Subtle animated starfield that drifts toward the mouse (parallax).
// Renders fixed behind all page content and never intercepts clicks.
export default function SpaceBackground() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

        const STAR_COUNT = 300
        const PARALLAX_STRENGTH = 100 // max px of drift at screen edges

        let width, height, stars
        let mouseX = 0
        let mouseY = 0
        let targetX = 0
        let targetY = 0
        let rafId

        function resize() {
            width = canvas.width = canvas.offsetWidth
            height = canvas.height = canvas.offsetHeight
            mouseX = targetX = width / 2
            mouseY = targetY = height / 2
        }

        function makeStars() {
            stars = Array.from({ length: STAR_COUNT }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 1.4 + 0.3,
                depth: Math.random() * 0.8 + 0.2, // higher depth = moves more with the mouse
                twinkleSpeed: Math.random() * 0.002 + 0.0006,
                twinklePhase: Math.random() * Math.PI * 2,
                pink: Math.random() > 0.55, // mix of pink-tinted and white stars
            }))
        }

        function drawFrame(offsetX, offsetY, time) {
            ctx.clearRect(0, 0, width, height)
            for (const star of stars) {
                const twinkle = prefersReducedMotion
                    ? 0.7
                    : 0.5 + Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.5

                const dx = star.x + offsetX * star.depth
                const dy = star.y + offsetY * star.depth
                const color = star.pink ? '244, 114, 182' : '255, 255, 255'

                ctx.beginPath()
                ctx.arc(dx, dy, star.radius, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(${color}, ${(twinkle * 0.8).toFixed(2)})`
                ctx.fill()
            }
        }

        function animate(time) {
            targetX += (mouseX - targetX) * 0.08
            targetY += (mouseY - targetY) * 0.08
            const offsetX = ((targetX - width / 2) / (width / 2)) * PARALLAX_STRENGTH
            const offsetY = ((targetY - height / 2) / (height / 2)) * PARALLAX_STRENGTH

            drawFrame(offsetX, offsetY, time)
            rafId = requestAnimationFrame(animate)
        }

        function handleMouseMove(e) {
            mouseX = e.clientX
            mouseY = e.clientY
        }

        resize()
        makeStars()
        window.addEventListener('resize', resize)

        if (prefersReducedMotion) {
            // Static: draw once, no parallax loop, no mouse tracking.
            drawFrame(0, 0, 0)
        } else {
            window.addEventListener('mousemove', handleMouseMove)
            rafId = requestAnimationFrame(animate)
        }

        return () => {
            if (rafId) cancelAnimationFrame(rafId)
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return <canvas ref={canvasRef} className="ke-space-bg" aria-hidden="true" />
}
