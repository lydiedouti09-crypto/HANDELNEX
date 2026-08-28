import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getMediaUrl } from '../api.js'
import './SolutionGridCard.css'

function SolutionGridCard({
  nom, description, nomFr, nomEn, nomDe,
  descriptionFr, descriptionEn, descriptionDe,
  image, imageFr, imageEn, imageDe,
  slug, categorie,
}) {
  const { t, i18n } = useTranslation()
  const localizedName = { fr: nomFr, en: nomEn, de: nomDe }[i18n.language] || nom
  const localizedDescription = { fr: descriptionFr, en: descriptionEn, de: descriptionDe }[i18n.language] || description
  const localizedImage = { fr: imageFr, en: imageEn, de: imageDe }[i18n.language] || image

  return (
    <div className="solution-grid-card">
      <div
        className="sgc-image"
        style={{ backgroundImage: localizedImage ? `url(${getMediaUrl(localizedImage)})` : undefined }}
      ></div>
      <div className="sgc-body">
        {categorie && <div className="sgc-tag">{categorie}</div>}
        <h3>{localizedName}</h3>
        {localizedDescription && <p className="sgc-content">{localizedDescription}</p>}
        <Link className="sgc-link" to={`/nos-solutions/${slug}`}>{t('solutions.discover')} →</Link>
      </div>
    </div>
  )
}

export default SolutionGridCard