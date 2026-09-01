// src/pages/SolutionDetail.jsx

import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchSolution, getMediaUrl } from '../api'
import { useTranslation } from 'react-i18next'
import './SolutionDetail.css'

function SolutionDetail() {
  const { slug } = useParams()
  const [solution, setSolution] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const { t, i18n } = useTranslation()

  useEffect(() => {
    async function load() {
      setLoading(true)
      setError(null)

      try {
        const data = await fetchSolution(slug)

        console.log(' DONNÉES COMPLÈTES:', data)

        setSolution(data)
      } catch (err) {
        console.error('Erreur chargement solution:', err)
        setError('Solution non trouvée')
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [slug])

  if (loading) {
    return (
      <div className="solution-detail-loading">
        <div className="loading-spinner"></div>
        <p>{t('solutions.loading')}</p>
      </div>
    )
  }

  if (error || !solution) {
    return (
      <div className="solution-detail-notfound">
        <h2>{t('solutions.empty')}</h2>

        <p>
          La solution que vous recherchez n'existe pas
          ou a été supprimée.
        </p>

        <Link to="/#solutions" className="btn-back-solutions">
          ← Retour aux solutions
        </Link>
      </div>
    )
  }

  /*
   * ==============================
   * NOM
   * ==============================
   */

  const localizedName = {
    fr: solution.nomFr,
    en: solution.nomEn,
    de: solution.nomDe,
    'pt-BR': solution.nomPtBr,
  }[i18n.language] || solution.nom


  /*
   * ==============================
   * DESCRIPTION COURTE
   * ==============================
   */

  const localizedDescription = {
    fr: solution.descriptionFr,
    en: solution.descriptionEn,
    de: solution.descriptionDe,
    'pt-BR': solution.descriptionPtBr,
  }[i18n.language] || solution.description


  /*
   * ==============================
   * DESCRIPTION COMPLÈTE
   * ==============================
   */

  const localizedComplete = {
    fr: solution.descriptionCompleteFr || '',
    en: solution.descriptionCompleteEn || '',
    de: solution.descriptionCompleteDe || '',
    'pt-BR': solution.descriptionCompletePtBr || '',
  }[i18n.language] || ''


  /*
   * ==============================
   * IMAGE
   * ==============================
   */

  const localizedImage = {
    fr: solution.imageFr,
    en: solution.imageEn,
    de: solution.imageDe,
    'pt-BR': solution.imagePtBr,
  }[i18n.language] || solution.image


  /*
   * ==============================
   * FORMATAGE DU TEXTE
   * ==============================
   */

  const formatText = (text) => {
    if (!text || text.trim() === '') {
      return null
    }

    return text.split('\n').map((paragraph, index) => {
      if (paragraph.trim() === '') {
        return null
      }

      return (
        <p key={index}>
          {paragraph}
        </p>
      )
    })
  }


  const hasCompleteDescription =
    localizedComplete &&
    localizedComplete.trim() !== ''


  return (
    <div className="solution-detail-container">

      {/* IMAGE */}

      {localizedImage && (
        <div className="solution-detail-hero-image">
          <img
            src={getMediaUrl(localizedImage)}
            alt={localizedName}
          />
        </div>
      )}


      {/* CONTENU */}

      <div className="solution-detail-content">

        <h1 className="solution-detail-title">
          {localizedName}
        </h1>

        <p className="solution-detail-description">
          {localizedDescription}
        </p>


        {/* DESCRIPTION COMPLÈTE */}

        {hasCompleteDescription && (
          <div className="solution-detail-complete">

            <h2>
              {t('solutions.complete_description', 'Description complète')}
            </h2>

            {formatText(localizedComplete)}

          </div>
        )}


        {/* RETOUR */}

        <div className="solution-detail-actions">

          <Link
            to="/#solutions"
            className="btn-back-solutions"
          >
            ← {t('solutions.back', 'Retour aux solutions')}
          </Link>

        </div>

      </div>

    </div>
  )
}

export default SolutionDetail