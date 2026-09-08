import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import { getMediaUrl } from '../api.js'
import { useTranslation } from 'react-i18next'
import './SolutionCard.css'

function SolutionCard({
  nom,
  description,

  nomFr,
  nomEn,
  nomDe,
  nomPTBR,

  descriptionFr,
  descriptionEn,
  descriptionDe,
  descriptionPTBR,

  slug,
  icone,

  image,
  imageFr,
  imageEn,
  imageDe,
  imagePTBR,
}) {
  const { i18n } = useTranslation()

  // Image selon la langue
  const localizedImage = {
    fr: imageFr,
    en: imageEn,
    de: imageDe,
    'pt-BR': imagePTBR,
  }[i18n.language] || image

  // Nom selon la langue
  const localizedName = {
    fr: nomFr,
    en: nomEn,
    de: nomDe,
    'pt-BR': nomPTBR,
  }[i18n.language] || nom

  // Description selon la langue
  const localizedDescription = {
    fr: descriptionFr,
    en: descriptionEn,
    de: descriptionDe,
    'pt-BR': descriptionPTBR,
  }[i18n.language] || description

  // Une icône Material doit être un nom valide
  const validIcon =
    icone && /^[a-z0-9_]+$/.test(icone)
      ? icone
      : 'apps'

  return (
    <div className="solution-card">

      {localizedImage && (
        <div className="solution-card-image-wrap">
          <img
            src={getMediaUrl(localizedImage)}
            alt={localizedName}
            className="solution-card-image"
          />
        </div>
      )}

      <div className="solution-card-body">

        <div className="solution-card-icon">
          <Icon name={validIcon} />
        </div>

        <h3>{localizedName}</h3>

        <p>{localizedDescription}</p>

        <Link
          to={`/nos-solutions/${slug}`}
          className="solution-card-link"
        >
          Découvrir →
        </Link>

      </div>
    </div>
  )
}

export default SolutionCard