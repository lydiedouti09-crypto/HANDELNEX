import { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import InfoCard from '../components/InfoCard.jsx'
import ActivityCard from '../components/ActivityCard.jsx'
import SolutionFeatured from '../components/SolutionFeatured.jsx'
import SolutionCard from '../components/SolutionCard.jsx'
import ActualiteCard from '../components/ActualiteCard.jsx'
import ContactForm from '../components/ContactForm.jsx'
import SectionHead from '../components/SectionHead.jsx'
import VisionSection from '../components/VisionSection.jsx'
import { fetchSolutions, fetchActualites } from '../api.js'

const infos = [
  { icon: 'hub', title: "Plusieurs domaines d'activité", color: 'var(--gold)' },
  { icon: 'trending_up', title: 'Solutions évolutives', color: 'var(--coral)' },
  { icon: 'public', title: 'Perspective internationale', color: 'var(--sky)' },
  { icon: 'location_city', title: 'Basée à Francfort', color: 'var(--indigo)' },
]

const activities = [
  { icon: 'inventory_2', title: 'Logistique', color: 'var(--gold)', description: "Solutions logistiques adaptées aux besoins des entreprises et des particuliers, avec une gestion optimisée des flux." },
  { icon: 'shopping_cart', title: 'Commerce & achats en ligne', color: 'var(--indigo)', description: "Intermédiation et accompagnement pour les achats en ligne, facilitation des transactions numériques." },
  { icon: 'local_shipping', title: 'Livraison', color: 'var(--coral)', description: "Services de livraison fiables et rapides, pensés pour les besoins modernes du commerce de proximité et digital." },
  { icon: 'description', title: 'Services administratifs', color: 'var(--sky)', description: "Accompagnement dans les démarches administratives pour simplifier la vie des entreprises et des particuliers." },
  { icon: 'public', title: 'Import & Export', color: 'var(--mint)', description: "Importation et exportation de produits électroniques et de biens d'occasion à l'échelle internationale." },
  { icon: 'memory', title: 'Technologies & services numériques', color: 'var(--indigo)', description: "Services informatiques, électroniques et numériques pour les entreprises en transformation digitale." },
  { icon: 'flight', title: 'Voyage & Billetterie', color: 'var(--sky)', description: "Une solution numérique dédiée aux projets de voyage et à la billetterie — application mobile intuitive." },
  { icon: 'recycling', title: "Biens d'occasion", color: 'var(--mint)', description: "Commerce de biens d'occasion avec un cadre de confiance et des garanties adaptées aux transactions." },
]

function Accueil() {
  const location = useLocation()

  // --- Étape 1 : des "boîtes" pour stocker les données une fois reçues de l'API
  const [solutions, setSolutions] = useState([])
  const [actualites, setActualites] = useState([])
  const [loading, setLoading] = useState(true)
  const [infosPerPage, setInfosPerPage] = useState(4)
  const [infoPage, setInfoPage] = useState(0)

  useEffect(() => {
    const updateInfosPerPage = () => {
      setInfosPerPage(window.innerWidth < 600 ? 1 : window.innerWidth < 1000 ? 2 : 3)
      setInfoPage(0)
    }

    updateInfosPerPage()
    window.addEventListener('resize', updateInfosPerPage)
    return () => window.removeEventListener('resize', updateInfosPerPage)
  }, [])

  const infoPages = []
  for (let index = 0; index < infos.length; index += infosPerPage) {
    infoPages.push(infos.slice(index, index + infosPerPage))
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setInfoPage((page) => (page + 1) % infoPages.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [infoPages.length])

  // --- Étape 2 : au chargement de la page, on va chercher les données
  useEffect(() => {
    fetchSolutions()
      .then((data) => setSolutions(data))
      .catch((err) => console.error('Erreur solutions:', err))

    fetchActualites()
      .then((data) => setActualites(data))
      .catch((err) => console.error('Erreur actualités:', err))
      .finally(() => setLoading(false))
  }, [])

  // Scroll vers une section si l'URL contient une ancre (#a-propos, etc.)
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  // La première solution reçue devient la grande carte ; les autres, des petites cartes
  const [premiereSolution, ...autresSolutions] = solutions

  return (
    <>
      <Hero />

      {/* À propos */}
      <section id="a-propos" style={{ padding: '90px 8vw' }}>
        <SectionHead
          tag="À PROPOS DE HANDELNEX"
          title="Plus qu'une entreprise. Un réseau de solutions."
          description="HANDELNEX développe des services et des solutions dans plusieurs domaines afin de répondre à des besoins concrets et de créer de nouvelles opportunités."
        >
          <Link to="/#nos-activites" className="btn-dark" style={{ marginTop: '26px' }}>En savoir plus →</Link>
        </SectionHead>
        <div className="info-carousel" aria-label="Présentation de HANDELNEX">
          <div className="info-carousel-window">
            <div className="info-carousel-track">
              {infoPages[infoPage]?.map((info) => <InfoCard key={info.title} {...info} />)}
            </div>
          </div>
          <div className="info-carousel-controls">
            <div className="info-carousel-dots">
              {infoPages.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  className={`info-carousel-dot ${index === infoPage ? 'active' : ''}`}
                  onClick={() => setInfoPage(index)}
                  aria-label={`Afficher la page ${index + 1}`}
                  aria-current={index === infoPage ? 'true' : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nos activités */}
      <section id="nos-activites" className="activities-section">
        <video
          src="/tech.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="activities-background"
        />
        <div className="activities-overlay" />
        <div className="activities-content">
          <SectionHead
            tag="NOS ACTIVITÉS"
            title="Nos domaines d'activité"
            description="Un ensemble de services complémentaires au cœur de HANDELNEX."
          />
          <div className="activities-grid">
            {activities.map((a, i) => <ActivityCard key={a.title} {...a} delay={(i % 4) * 100} />)}
          </div>
        </div>
      </section>

      {/* Nos solutions — connecté à l'API */}
      <section id="nos-solutions" style={{ padding: '90px 8vw' }}>
        <SectionHead
          tag="ÉCOSYSTÈME"
          title="Nos solutions"
          description="Découvrez les applications et services proposés par HANDELNEX. Un écosystème conçu pour évoluer."
        />

        {loading && <p style={{ textAlign: 'center', color: 'var(--text-soft)' }}>Chargement des solutions...</p>}

        {!loading && !premiereSolution && (
          <p style={{ textAlign: 'center', color: 'var(--text-soft)' }}>
            Aucune solution publiée pour le moment. Ajoutes-en une depuis l'espace admin.
          </p>
        )}

        {premiereSolution && <SolutionFeatured {...premiereSolution} />}

        {autresSolutions.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '24px' }}>
            {autresSolutions.map((s) => <SolutionCard key={s.slug} {...s} />)}
          </div>
        )}
      </section>

      {/* Actualités — connecté à l'API */}
      <section id="actualites" style={{ padding: '90px 8vw', background: 'var(--paper-alt)' }}>
        <SectionHead
          tag="ACTUALITÉS"
          title="Actualités & nouveautés"
          description="Suivez les dernières nouvelles et initiatives de HANDELNEX."
        />

        {!loading && actualites.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--text-soft)' }}>
            Aucune actualité publiée pour le moment.
          </p>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {actualites.map((a) => <ActualiteCard key={a.slug} {...a} />)}
        </div>
      </section>

      <VisionSection />

      {/* Contact */}
      <section id="contact" style={{ padding: '90px 8vw', background: 'var(--paper-alt)' }}>
        <SectionHead tag="CONTACT" title="Parlons de votre projet ou de votre besoin." />
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <ContactForm />
        </div>
      </section>
    </>
  )
}

export default Accueil