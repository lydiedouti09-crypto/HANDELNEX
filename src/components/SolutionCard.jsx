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

  // Une icône Material doit être un nom valide (ex: "flight", "shopping_cart").
  // Si le champ contient autre chose (texte libre entré par erreur), on retombe sur une icône par défaut.
  const validIcon = icone && /^[a-z0-9_]+$/.test(icone) ? icone : 'apps'

  return (
    <div className="solution-card">
      {localizedImage && (
        <div className="solution-card-image-wrap">
          <img src={getMediaUrl(localizedImage)} alt={localizedName} className="solution-card-image" />
        </div>
      )}
      <div className="solution-card-body">
        <div className="solution-card-icon"><Icon name={validIcon} /></div>
        <h3>{localizedName}</h3>
        <p>{localizedDescription}</p>
        <Link to={`/nos-solutions/${slug}`} className="solution-card-link">Découvrir →</Link>
      </div>
    </div>
  )
}

export default SolutionCard