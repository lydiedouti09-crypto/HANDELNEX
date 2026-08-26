import { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
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

const infoIcons = ['hub', 'trending_up', 'public', 'location_city']
const infoColors = ['var(--gold)', 'var(--coral)', 'var(--sky)', 'var(--indigo)']

const activityIcons = ['inventory_2', 'shopping_cart', 'local_shipping', 'description', 'public', 'memory', 'flight', 'recycling']
const activityColors = ['var(--gold)', 'var(--indigo)', 'var(--coral)', 'var(--sky)', 'var(--mint)', 'var(--indigo)', 'var(--sky)', 'var(--mint)']

function Accueil() {
  const { t } = useTranslation()
  const location = useLocation()

  const [solutions, setSolutions] = useState([])
  const [actualites, setActualites] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchSolutions().then(setSolutions).catch((e) => console.error(e))
    fetchActualites().then(setActualites).catch((e) => console.error(e)).finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  const [premiereSolution, ...autresSolutions] = solutions
  const infos = t('apropos.infos', { returnObjects: true })
  const activities = t('activites.list', { returnObjects: true })

  return (
    <>
      <Hero />

      {/* À propos */}
      <section id="a-propos" style={{ padding: '90px 8vw' }}>
        <SectionHead tag={t('apropos.tag')} title={t('apropos.title')} description={t('apropos.desc')}>
          <Link to="/#nos-activites" className="btn-dark" style={{ marginTop: '26px' }}>{t('apropos.btn')} →</Link>
        </SectionHead>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
          {infos.map((info, i) => (
            <InfoCard key={info.title} icon={infoIcons[i]} title={info.title} color={infoColors[i]} />
          ))}
        </div>
      </section>

      {/* Nos activités */}
      <section id="nos-activites" className="activities-section">
        <video className="activities-background" src="/tech.mp4" autoPlay muted loop playsInline />
        <div className="activities-overlay" aria-hidden="true"></div>
        <div className="activities-content">
          <SectionHead tag={t('activites.tag')} title={t('activites.title')} description={t('activites.desc')} />
          <div className="activities-grid">
            {activities.map((a, i) => (
              <ActivityCard key={a.title} icon={activityIcons[i]} color={activityColors[i]} title={a.title} description={a.desc} delay={(i % 4) * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Nos solutions */}
      <section id="nos-solutions" style={{ padding: '90px 8vw' }}>
        <SectionHead tag={t('solutions.tag')} title={t('solutions.title')} description={t('solutions.desc')} />

        {loading && <p style={{ textAlign: 'center', color: 'var(--text-soft)' }}>{t('solutions.loading')}</p>}
        {!loading && !premiereSolution && (
          <p style={{ textAlign: 'center', color: 'var(--text-soft)' }}>{t('solutions.empty')}</p>
        )}
        {premiereSolution && <SolutionFeatured {...premiereSolution} />}
        {autresSolutions.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '24px' }}>
            {autresSolutions.map((s) => <SolutionCard key={s.slug} {...s} />)}
          </div>
        )}
      </section>

      {/* Actualités */}
      <section id="actualites" style={{ padding: '90px 8vw', background: 'var(--paper-alt)' }}>
        <SectionHead tag={t('actualites.tag')} title={t('actualites.title')} description={t('actualites.desc')} />
        {!loading && actualites.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--text-soft)' }}>{t('actualites.empty')}</p>
        )}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {actualites.map((a) => <ActualiteCard key={a.slug} {...a} />)}
        </div>
      </section>

      <VisionSection />

      {/* Contact */}
      <section id="contact" style={{ padding: '90px 8vw', background: 'var(--paper-alt)' }}>
        <SectionHead tag={t('contact.tag')} title={t('contact.title')} />
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <ContactForm />
        </div>
      </section>
    </>
  )
}

export default Accueil