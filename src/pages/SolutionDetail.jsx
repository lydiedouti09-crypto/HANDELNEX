// src/pages/SolutionDetail.jsx
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchSolution } from '../api'
import { useTranslation } from 'react-i18next'
import { getMediaUrl } from '../api'
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
        console.log('🔍 DONNÉES COMPLÈTES:', data)
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
        <p>Chargement...</p>
      </div>
    )
  }

  if (error || !solution) {
    return (
      <div className="solution-detail-notfound">
        <h2>Solution non trouvée</h2>
        <p>La solution que vous recherchez n'existe pas ou a été supprimée.</p>
        <Link to="/#solutions" className="btn-back-solutions">
          ← Retour aux solutions
        </Link>
      </div>
    )
  }

  const lang = i18n.language
  const localizedName = { 
    fr: solution.nomFr, 
    en: solution.nomEn, 
    de: solution.nomDe 
  }[lang] || solution.nom
  
  const localizedDescription = { 
    fr: solution.descriptionFr, 
    en: solution.descriptionEn, 
    de: solution.descriptionDe 
  }[lang] || solution.description
  
  // ⚠️ IMPORTANT: NE PAS UTILISER DE FALLBACK
  // Si descriptionCompleteFr est vide ou null, on garde une chaîne vide
  const localizedComplete = { 
    fr: solution.descriptionCompleteFr || '',  // ← Pas de fallback !
    en: solution.descriptionCompleteEn || '',  // ← Pas de fallback !
    de: solution.descriptionCompleteDe || ''   // ← Pas de fallback !
  }[lang] || ''
  
  const localizedImage = { 
    fr: solution.imageFr, 
    en: solution.imageEn, 
    de: solution.imageDe 
  }[lang] || solution.image

  const formatText = (text) => {
    if (!text || text.trim() === '') return null
    return text.split('\n').map((paragraph, index) => {
      if (paragraph.trim() === '') return null
      return <p key={index}>{paragraph}</p>
    })
  }

  // Vérifier si la description complète existe vraiment
  const hasCompleteDescription = localizedComplete && localizedComplete.trim() !== ''

  return (
    <div className="solution-detail-container">
      {localizedImage && (
        <div className="solution-detail-hero-image">
          <img src={getMediaUrl(localizedImage)} alt={localizedName} />
        </div>
      )}

      <div className="solution-detail-content">
        <h1 className="solution-detail-title">{localizedName}</h1>
        <p className="solution-detail-description">{localizedDescription}</p>
        
        {/* Afficher la description complète SEULEMENT si elle existe */}
        {hasCompleteDescription && (
          <div className="solution-detail-complete">
            <h2 style={{ fontSize: '22px', color: '#0A2A4A', marginBottom: '16px' }}>
              Description complète
            </h2>
            {formatText(localizedComplete)}
          </div>
        )}

        <div className="solution-detail-actions">
          <Link to="/#solutions" className="btn-back-solutions">
            ← Retour aux solutions
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SolutionDetail