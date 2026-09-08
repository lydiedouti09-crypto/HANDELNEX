import { useEffect, useRef, useState } from 'react'

// Retourne 'up' ou 'down' selon la direction du scroll.
// threshold = nombre de pixels de tolérance avant de considérer que la direction a changé
// (évite que ça change sans arrêt sur un petit tremblement de la molette).
export function useScrollDirection(threshold = 8) {
  const [direction, setDirection] = useState('up')
  const lastScrollY = useRef(0)

  useEffect(() => {
    lastScrollY.current = window.scrollY

    const onScroll = () => {
      const currentY = window.scrollY
      const diff = currentY - lastScrollY.current

      if (Math.abs(diff) < threshold) return

      setDirection(diff > 0 ? 'down' : 'up')
      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return direction
}