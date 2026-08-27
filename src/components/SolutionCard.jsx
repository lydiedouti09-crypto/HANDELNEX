import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import { getMediaUrl } from '../api.js'
import { useTranslation } from 'react-i18next'
import './SolutionCard.css'

function SolutionCard({ nom, description, nomFr, nomEn, nomDe, descriptionFr, descriptionEn, descriptionDe, slug, icone, image, imageFr, imageEn, imageDe }) {
  const { i18n } = useTranslation()
  const localizedImage = { fr: imageFr, en: imageEn, de: imageDe }[i18n.language] || image
  const localizedName = { fr: nomFr, en: nomEn, de: nomDe }[i18n.language] || nom
  const localizedDescription = { fr: descriptionFr, en: descriptionEn, de: descriptionDe }[i18n.language] || description

  return (
    <div className="solution-card">
      {localizedImage && <img src={getMediaUrl(localizedImage)} alt={nom} className="solution-card-image" />}
      <div className="solution-card-icon"><Icon name={icone || 'apps'} /></div>
      <h3>{localizedName}</h3>
      <p>{localizedDescription}</p>
      <Link to={`/nos-solutions/${slug}`} className="solution-card-link">Découvrir →</Link>
    </div>
  )
}

export default SolutionCard