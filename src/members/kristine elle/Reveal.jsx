import { useEffect, useRef, useState } from 'react'

export function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.15, ...options }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return [ref, isInView]
}

export default function Reveal({ children, className = '' }) {
  const [ref, isInView] = useInView()

  return (
    <div ref={ref} className={`ke-reveal ${isInView ? 'ke-reveal-visible' : ''} ${className}`}>
      {children}
    </div>
  )
}
