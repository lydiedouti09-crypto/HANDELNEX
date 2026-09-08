import { useEffect, useRef, useState } from 'react'
import { useScrollDirection } from './useScrollDirection.js'

// Retourne { ref, visible } : attache ref à un élément, visible passe à true
// dès qu'il entre dans l'écran (pour déclencher une animation CSS).
export function useReveal(threshold = 0.18, rootMargin = '0px 0px -8% 0px') {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const scrollDirection = useScrollDirection()

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const offset = scrollDirection === 'down' ? 90 : -60
    node.style.setProperty('--reveal-offset', `${offset}px`)

    const checkIfVisible = () => {
      const rect = node.getBoundingClientRect()
      const isInViewport = rect.top < window.innerHeight + 120 && rect.bottom > -120

      if (isInViewport) {
        setVisible(true)
      } else if (rect.bottom < 0 && scrollDirection === 'up') {
        setVisible(false)
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        } else if (scrollDirection === 'up') {
          setVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    checkIfVisible()
    observer.observe(node)

    return () => observer.disconnect()
  }, [threshold, rootMargin, scrollDirection])

  return { ref, visible }
}