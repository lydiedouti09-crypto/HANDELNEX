import './ActualiteCard.css'
import { getMediaUrl } from '../api.js'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal.js'

function ActualiteCard({
  index = 0,
  slug,
  titre,
  titreFr,
  titreEn,
  titreDe,
  titrePtBr,
  contenu,
  contenuFr,
  contenuEn,
  contenuDe,
  contenuPtBr,
  image,
  imageFr,
  imageEn,
  imageDe,
  imagePtBr,
}) {
  const { i18n, t } = useTranslation()
  const { ref, visible } = useReveal()

  const localizedImage = {
    fr: imageFr,
    en: imageEn,
    de: imageDe,
    'pt-BR': imagePtBr,
  }[i18n.language] || image

  const localizedTitle = {
    fr: titreFr,
    en: titreEn,
    de: titreDe,
    'pt-BR': titrePtBr,
  }[i18n.language] || titre

  const localizedContent = {
    fr: contenuFr,
    en: contenuEn,
    de: contenuDe,
    'pt-BR': contenuPtBr,
  }[i18n.language] || contenu

  return (
    <div
      ref={ref}
      className={`actualite-card reveal ${visible ? 'visible' : ''}`}
      style={{ '--card-delay': `${index * 140}ms` }}
    >
      <div
        className="actualite-image"
        style={{
          backgroundImage: localizedImage
            ? `url(${getMediaUrl(localizedImage)})`
            : undefined
        }}
      ></div>

      <div className="actualite-body">
        <h3>{localizedTitle}</h3>

        {localizedContent && (
          <p className="actualite-content">{localizedContent}</p>
        )}

        <Link
          className="actualite-link"
          to={`/actualites/${slug}`}
        >
          {t('actualites.read_more')} →
        </Link>
      </div>
    </div>
  )
}

export default ActualiteCard