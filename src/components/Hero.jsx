import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from './Icon.jsx'
import './Hero.css'

const slides = [
  {
    image: '/navire.avif',
    tag: 'Technologies & numérique',
    title: 'Des solutions qui connectent les opportunités.',
    desc: "HANDELNEX développe et connecte des services dans les domaines de la logistique, du commerce et des solutions numériques.",
  },
  {
    image: '/image7.jpg',
    tag: 'Logistique & livraison',
    title: 'Une logistique fluide, à l\'échelle internationale.',
    desc: "Des flux maîtrisés, de la prise en charge à la livraison finale, partout où vous en avez besoin.",
  },
  {
    image: '/voiture.avif',
    tag: 'Commerce & intermédiation',
    title: 'Le commerce en ligne, simplifié.',
    desc: "Une intermédiation fiable pour vos achats, ventes et échanges de biens.",
  },
  {
    image: '/image1.jpg',
    tag: 'Transport & distribution',
    title: 'Une distribution efficace, à l\'échelle internationale.',
    desc: "Des solutions de transport et de distribution optimisées pour répondre à vos besoins.",
  },
  {
    image: '/image2.jpg',
    tag: 'Services & support',
    title: 'Un support client réactif et professionnel.',
    desc: "Un service client de qualité pour vous accompagner dans vos projets.",
  },
  {
    image: '/image3.jpg',
    tag: 'Innovation & développement',
    title: 'L\'innovation au cœur de nos solutions.',
    desc: "Développement continu de solutions innovantes pour vous offrir les meilleurs résultats.",
  },
]

// Icônes + labels des pills, pour pouvoir les animer en boucle proprement
const pills = [
  { icon: 'inventory_2', label: 'Logistique' },
  { icon: 'shopping_cart', label: 'Commerce' },
  { icon: 'local_shipping', label: 'Livraison' },
  { icon: 'flight', label: 'Voyage' },
  { icon: 'public', label: 'Import/Export' },
  { icon: 'memory', label: 'Technologie' },
]

function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (index) => {
    setCurrent((index + slides.length) % slides.length)
  }

  const slide = slides[current]

  return (
    <section className="hero">
      <div className="hero-bg">
        {slides.map((s, i) => (
          <div
            key={s.image}
            className="hero-bg-layer"
            style={{
              backgroundImage: `url(${s.image})`,
              opacity: i === current ? 1 : 0,
            }}
          />
        ))}
        <div className="hero-overlay"></div>
      </div>

      <button className="hero-arrow left" onClick={() => goTo(current - 1)} aria-label="Slide précédent">
        ‹
      </button>
      <button className="hero-arrow right" onClick={() => goTo(current + 1)} aria-label="Slide suivant">
        ›
      </button>

      {/* AnimatePresence permet une transition sortie + entrée à chaque changement de slide */}
      <div className="hero-text">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="hero-tag">{slide.tag}</div>
            <h1>{slide.title}</h1>
            <p>{slide.desc}</p>
          </motion.div>
        </AnimatePresence>

        <div className="hero-actions">
          <Link to="/#a-propos" className="btn">Découvrir Handelnex →</Link>
          <Link to="/#nos-solutions" className="btn btn-ghost">Nos solutions</Link>
        </div>
      </div>

      <div className="hero-visual">
        <div className="net-ring nr1"></div>
        <div className="net-ring nr2"></div>
        <div className="net-ring nr3"></div>

        <motion.div
          className="net-core"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <img src="/LOGO.png" alt="Handelnex" className="core-logo" />
          <span>HANDELNEX</span>
        </motion.div>

        {pills.map((p, i) => (
          <motion.div
            key={p.label}
            className={`pill p${i + 1}`}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -8, 0],
            }}
            transition={{
              opacity: { delay: 0.3 + i * 0.15, duration: 0.4 },
              scale: { delay: 0.3 + i * 0.15, duration: 0.4 },
              y: { repeat: Infinity, duration: 4, ease: 'easeInOut', delay: i * 0.6 },
            }}
            whileHover={{ scale: 1.08, y: -4 }}
          >
            <Icon name={p.icon} size={16} /> {p.label}
          </motion.div>
        ))}
      </div>

      <div className="hero-footer">
        <span className="scroll-label">DÉFILER</span>
        <div className="dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === current ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Aller au slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero