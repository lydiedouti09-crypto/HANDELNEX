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
  nomPtBr,

  descriptionFr,
  descriptionEn,
  descriptionDe,
  descriptionPtBr,

  slug,
  icone,

  image,
  imageFr,
  imageEn,
  imageDe,
  imagePtBr,
}) {
  const { i18n } = useTranslation()

  const localizedImage = {
    fr: imageFr,
    en: imageEn,
    de: imageDe,
    'pt-BR': imagePtBr,
  }[i18n.language] || image

  const localizedName = {
    fr: nomFr,
    en: nomEn,
    de: nomDe,
    'pt-BR': nomPtBr,
  }[i18n.language] || nom

  const localizedDescription = {
    fr: descriptionFr,
    en: descriptionEn,
    de: descriptionDe,
    'pt-BR': descriptionPtBr,
  }[i18n.language] || description

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