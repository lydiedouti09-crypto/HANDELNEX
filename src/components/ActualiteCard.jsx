import './ActualiteCard.css'
import { getMediaUrl } from '../api.js'
import { useTranslation } from 'react-i18next'

function ActualiteCard({ titre, titreFr, titreEn, titreDe, contenu, contenuFr, contenuEn, contenuDe, image, imageFr, imageEn, imageDe, datePublication }) {
  const { i18n } = useTranslation()
  const localizedImage = { fr: imageFr, en: imageEn, de: imageDe }[i18n.language] || image
  const localizedTitle = { fr: titreFr, en: titreEn, de: titreDe }[i18n.language] || titre
  const localizedContent = { fr: contenuFr, en: contenuEn, de: contenuDe }[i18n.language] || contenu

  return (
    <div className="actualite-card">
      <div
        className="actualite-image"
        style={{ backgroundImage: localizedImage ? `url(${getMediaUrl(localizedImage)})` : undefined }}
      ></div>
      <div className="actualite-body">
        <div className="actualite-date">{datePublication}</div>
        <h3>{localizedTitle}</h3>
        {localizedContent && <p className="actualite-content">{localizedContent}</p>}
      </div>
    </div>
  )
}

export default ActualiteCard