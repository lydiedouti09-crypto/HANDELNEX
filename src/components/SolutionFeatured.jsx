import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import AppleIcon from './AppleIcon.jsx'
import { useReveal } from '../hooks/useReveal.js'
import { getMediaUrl } from '../api.js'
import { useTranslation } from 'react-i18next'
import './SolutionFeatured.css'

function SolutionFeatured({
  nom = 'Voyage & Billetterie',
  description = "Une solution numérique dédiée aux projets de voyage et à la billetterie : financez progressivement votre billet grâce à un système de points et de cotisations, simple et accessible.",
  slug = 'voyage',
  image = '/app-screenshot.jpeg',
  lienGooglePlay,
}) {
  const { t } = useTranslation()
  const { ref, visible } = useReveal()

  return (
    <div ref={ref} className={`solution-featured ${visible ? 'visible' : ''}`}>
      <div className="solution-text">
        <h3>{nom}</h3>
        <p>{description}</p>

        <div className="solution-actions">
          <a href={lienGooglePlay || '#'} target="_blank" rel="noreferrer" className="btn-store store-1">
            <Icon name="play_arrow" size={18} /> Google Play
          </a>
          <a href="#" className="btn-store store-2">
            <AppleIcon size={18} /> App Store
          </a>
          <Link to={`/nos-solutions/${slug}`} className="btn-ghost store-3">{t('solutions.discover')}</Link>
        </div>

      </div>

      <div className="solution-visual">
        <img src={getMediaUrl(image)} alt={nom} className="app-screenshot" />
      </div>
    </div>
  )
}

export default SolutionFeatured