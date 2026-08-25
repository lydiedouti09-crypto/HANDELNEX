import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from './Icon.jsx'
import AnimatedTitle from './AnimatedTitle.jsx'
import './Hero.css'

// Chaque slide peut être une image OU une vidéo (type: 'video').
// Pour une vidéo : media = '/ma-video.mp4', type: 'video'
const slides = [
  {
    type: 'video',
    media: '/bateau3.mp4',
    tag: 'Technologies & numérique',
    title: 'Des solutions qui connectent les opportunités.',
    desc: "HANDELNEX développe et connecte des services dans les domaines de la logistique, du commerce et des solutions numériques.",
  },
  {
    type: 'image',
    image: '/voiture.avif',
    tag: 'Commerce & intermédiation',
    title: 'Le commerce en ligne, simplifié.',
    desc: "Une intermédiation fiable pour vos achats, ventes et échanges de biens.",
  },
 
  {
    type: 'image',
    image: '/image1.jpg',
    tag: 'Transport & distribution',
    title: 'Une distribution efficace, à l\'échelle internationale.',
    desc: "Des solutions de transport et de distribution optimisées pour répondre à vos besoins.",
  },
  {
    type: 'video',
    media: '/bateau1.mp4',
    tag: 'Logistique & livraison',
    title: 'Une logistique fluide, à l\'échelle internationale.',
    desc: "Des flux maîtrisés, de la prise en charge à la livraison finale, partout où vous en avez besoin.",
  },
  {
    type: 'image',
    image: '/image2.jpg',
    tag: 'Services & support',
    title: 'Un support client réactif et professionnel.',
    desc: "Un service client de qualité pour vous accompagner dans vos projets.",
  },
  {
    type: 'image',
    image: '/image3.jpg',
    tag: 'Innovation & développement',
    title: 'L\'innovation au cœur de nos solutions.',
    desc: "Développement continu de solutions innovantes pour vous offrir les meilleurs résultats.",
  },
  {
  type: 'video',
  media: '/avions2.mp4',
  tag: 'Solution de voyage',
  title: 'Voyagez vers de nouvelles opportunités.',
  desc: 'Découvrez une solution numérique conçue pour simplifier la préparation et la gestion de votre projet de voyage.'
},
]

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
            key={s.media || s.image}
            className="hero-bg-layer"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            {s.type === 'video' ? (
              <video
                src={s.media}
                autoPlay
                muted
                loop
                playsInline
                className="hero-bg-media"
              />
            ) : (
              <div
                className="hero-bg-media hero-bg-image"
                style={{ backgroundImage: `url(${s.image})` }}
              />
            )}
          </div>
        ))}
        <div className="hero-overlay"></div>
      </div>

      <button className="hero-arrow left" onClick={() => goTo(current - 1)} aria-label="Slide précédent">
        ‹
      </button>
      <button className="hero-arrow right" onClick={() => goTo(current + 1)} aria-label="Slide suivant">
        ›
      </button>

      <div className="hero-text">
        <AnimatePresence mode="wait">
          <div key={current}>
            <AnimatedTitle text={slide.title} className="" />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {slide.desc}
            </motion.p>
          </div>
        </AnimatePresence>

        <div className="hero-actions">
          <Link to="/#a-propos" className="btn">Découvrir Handelnex →</Link>
          <Link to="/nos-solutions" className="btn btn-ghost">Nos solutions</Link>
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

        <div className="orbit-wrap">
          {pills.map((p, i) => (
            <div
              key={p.label}
              className="orbit-item"
              style={{
                '--angle': `${(360 / pills.length) * i}deg`,
                '--radius': '190px',
              }}
            >
              <motion.div
                className="pill"
                whileHover={{ scale: 1.1 }}
              >
                <Icon name={p.icon} size={16} /> {p.label}
              </motion.div>
            </div>
          ))}
        </div>
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