import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import AppleIcon from './AppleIcon.jsx'
import { useReveal } from '../hooks/useReveal.js'
import './SolutionFeatured.css'

function SolutionFeatured() {
  const { ref, visible } = useReveal()

  return (
    <div ref={ref} className={`solution-featured ${visible ? 'visible' : ''}`}>
      <div className="solution-text">
        <div className="solution-tag"><Icon name="flight" size={16} /> Application</div>
        <h3>Voyage & Billetterie</h3>
        <p>
          Une solution numérique dédiée aux projets de voyage et à la billetterie :
          financez progressivement votre billet grâce à un système de points et de
          cotisations, simple et accessible.
        </p>

        <div className="solution-actions">
          <a href="#" className="btn-store store-1">
            <Icon name="play_arrow" size={18} /> Google Play
          </a>
          <a href="#" className="btn-store store-2">
            <AppleIcon size={18} /> App Store
          </a>
          <Link to="/#nos-solutions" className="btn-ghost store-3">Découvrir la solution</Link>
        </div>
      </div>

      <div className="solution-visual">
        {/* Place ta capture d'écran (ex: FlyPoints) dans public/app-screenshot.jpeg */}
        <img src="/app-screenshot.jpeg" alt="Application Voyage & Billetterie" className="app-screenshot" />
      </div>
    </div>
  )
}

export default SolutionFeatured