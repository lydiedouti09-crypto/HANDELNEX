import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { fetchActualite, getMediaUrl } from '../api.js'
import './ActualiteDetail.css'

function ActualiteDetail() {
  const { slug } = useParams()
  const { i18n, t } = useTranslation()
  const [actualite, setActualite] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)
    fetchActualite(slug)
      .then(setActualite)
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [slug])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  if (loading) return <main className="actualite-detail-state">{t('actualites.loading')}</main>
  if (error || !actualite) return <main className="actualite-detail-state">{t('actualites.error')}</main>

  const localizedImage = { fr: actualite.imageFr, en: actualite.imageEn, de: actualite.imageDe }[i18n.language] || actualite.image
  const localizedTitle = { fr: actualite.titreFr, en: actualite.titreEn, de: actualite.titreDe }[i18n.language] || actualite.titre
  const localizedContent = { fr: actualite.contenuFr, en: actualite.contenuEn, de: actualite.contenuDe }[i18n.language] || actualite.contenu

  return (
    <main className="actualite-detail">
      <Link className="actualite-detail-back" to="/#actualites">← {t('actualites.back')}</Link>
      {localizedImage && (
        <img className="actualite-detail-image" src={getMediaUrl(localizedImage)} alt="" />
      )}
      
      <h1>{localizedTitle}</h1>
      <div className="actualite-detail-content">{localizedContent}</div>
    </main>
  )
}

export default ActualiteDetail