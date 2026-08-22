import { useEffect, useRef, useState } from 'react'

// Compte de 0 jusqu'à "end" quand le composant devient visible à l'écran
function StatCounter({ end, suffix = '', duration = 1500 }) {
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const stepTime = Math.max(Math.floor(duration / end), 15)
    const timer = setInterval(() => {
      setValue((prev) => {
        if (prev >= end) {
          clearInterval(timer)
          return end
        }
        return prev + 1
      })
    }, stepTime)
    return () => clearInterval(timer)
  }, [started, end, duration])

  return (
    <span ref={ref}>
      {value}{suffix}
    </span>
  )
}

export default StatCounter