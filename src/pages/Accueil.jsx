import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import InfoCard from '../components/InfoCard.jsx'
import ActivityCard from '../components/ActivityCard.jsx'
import SolutionFeatured from '../components/SolutionFeatured.jsx'
import ContactForm from '../components/ContactForm.jsx'
import SectionHead from '../components/SectionHead.jsx'
import VisionSection from '../components/VisionSection.jsx'

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

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
          {infos.map((info) => (
            <InfoCard key={info.title} {...info} />
          ))}
        </div>
      </section>

      {/* Nos activités */}
      <section id="nos-activites" style={{ padding: '90px 8vw', background: 'var(--paper-alt)' }}>
        <SectionHead
          tag="NOS ACTIVITÉS"
          title="Nos domaines d'activité"
          description="Un ensemble de services complémentaires au cœur de HANDELNEX."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '18px' }}>
          {activities.map((a, i) => (
            <ActivityCard key={a.title} {...a} delay={(i % 4) * 100} />
          ))}
        </div>
      </section>

      {/* Nos solutions */}
      <section id="nos-solutions" style={{ padding: '90px 8vw' }}>
        <SectionHead
          tag="ÉCOSYSTÈME"
          title="Nos solutions"
          description="Découvrez les applications et services proposés par HANDELNEX. Un écosystème conçu pour évoluer."
        />
        <SolutionFeatured />
      </section>

      <VisionSection />

      {/* Contact */}
      <section id="contact" style={{ padding: '90px 8vw', background: 'var(--paper-alt)' }}>
        <SectionHead
          tag="CONTACT"
          title="Parlons de votre projet ou de votre besoin."
        />
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <ContactForm />
        </div>
      </section>
    </>
  )
}

export default Accueil