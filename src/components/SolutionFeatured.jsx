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
  nomFr,
  nomEn,
  nomDe,
  descriptionFr,
  descriptionEn,
  descriptionDe,
  slug = 'voyage',
  image = '/app-screenshot.jpeg',
  imageFr,
  imageEn,
  imageDe,
  lienGooglePlay,
}) {
  const { t, i18n } = useTranslation()
  const { ref, visible } = useReveal()
  const localizedImage = { fr: imageFr, en: imageEn, de: imageDe }[i18n.language] || image
  const localizedName = { fr: nomFr, en: nomEn, de: nomDe }[i18n.language] || nom
  const localizedDescription = { fr: descriptionFr, en: descriptionEn, de: descriptionDe }[i18n.language] || description

  return (
    <div ref={ref} className={`solution-featured ${visible ? 'visible' : ''}`}>
      <div className="solution-text">
        <h3>{localizedName}</h3>
        <p>{localizedDescription}</p>

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
        <img src={getMediaUrl(localizedImage)} alt={nom} className="app-screenshot" />
      </div>
    </div>
  )
}

export default SolutionFeatured