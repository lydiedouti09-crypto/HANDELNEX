import { useEffect, useState } from 'react'
import './Preloader.css'

function Preloader() {
  const [visible, setVisible] = useState(true)
  const [fadingOut, setFadingOut] = useState(false)

  useEffect(() => {
    document.getElementById('boot-screen')?.remove()

    const startedAt = Date.now()
    const minimumDisplayTime = 3000
    let finishTimer
    let handled = false

    const handleLoad = () => {
      if (handled) return
      handled = true

      const remainingTime = Math.max(
        0,
        minimumDisplayTime - (Date.now() - startedAt),
      )

      finishTimer = setTimeout(() => {
        setFadingOut(true)
        setTimeout(() => setVisible(false), 1000)
      }, remainingTime)
    }

    if (document.readyState === 'complete') {
      // La page était déjà chargée avant que ce composant ne s'exécute
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    const safety = setTimeout(handleLoad, 5000)

    return () => {
      window.removeEventListener('load', handleLoad)
      clearTimeout(safety)
      clearTimeout(finishTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div className={`preloader ${fadingOut ? 'preloader-out' : ''}`}>
      <div className="preloader-orbit preloader-orbit-one" aria-hidden="true"></div>
      <div className="preloader-orbit preloader-orbit-two" aria-hidden="true"></div>
      <span className="preloader-particle preloader-particle-one" aria-hidden="true"></span>
      <span className="preloader-particle preloader-particle-two" aria-hidden="true"></span>
      <span className="preloader-particle preloader-particle-three" aria-hidden="true"></span>
      <div className="preloader-bar">
        <div className="preloader-bar-fill"></div>
      </div>
    </div>
  )
}

export default Preloader