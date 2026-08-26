import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Icon from './Icon.jsx'
import AnimatedTitle from './AnimatedTitle.jsx'
import './Hero.css'

// Les médias (images/vidéos) restent fixes, seul le texte change selon la langue.
const slideMedia = [
  {
    type: 'video',
    media: '/bateau3.mp4',
  },
  {
    type: 'video',
    media: '/bateau1.mp4',
  },
  {
    type: 'image',
    image: '/voiture.avif',
  },
  {
    type: 'image',
    image: '/image1.jpg',
  },
  {
    type: 'image',
    image: '/image2.jpg',
  },
  {
    type: 'image',
    image: '/image3.jpg',
  },
]

const pillIcons = ['inventory_2', 'shopping_cart', 'local_shipping', 'flight', 'public', 'memory']
const pillKeys = ['logistique', 'commerce', 'livraison', 'voyage', 'importExport', 'technologie']

function Hero() {
  const { t } = useTranslation()
  const [current, setCurrent] = useState(0)

  // Traductions du contenu texte, associées aux médias fixes ci-dessus
  const slideTexts = t('hero.slides', { returnObjects: true })
  const slides = slideMedia.map((media, i) => ({ ...media, ...slideTexts[i] }))
  const pillLabels = t('hero.pills', { returnObjects: true })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

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
              <video src={s.media} autoPlay muted loop playsInline className="hero-bg-media" />
            ) : (
              <div className="hero-bg-media hero-bg-image" style={{ backgroundImage: `url(${s.image})` }} />
            )}
          </div>
        ))}
        <div className="hero-overlay"></div>
      </div>

      <button className="hero-arrow left" onClick={() => goTo(current - 1)} aria-label="Previous slide">‹</button>
      <button className="hero-arrow right" onClick={() => goTo(current + 1)} aria-label="Next slide">›</button>

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
          <Link to="/#a-propos" className="btn">{t('hero.btn_discover')} →</Link>
          <Link to="/nos-solutions" className="btn btn-ghost">{t('hero.btn_solutions')}</Link>
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
          {pillIcons.map((icon, i) => (
            <div
              key={pillKeys[i]}
              className="orbit-item"
              style={{
                '--angle': `${(360 / pillIcons.length) * i}deg`,
                '--radius': '190px',
                animationDelay: `${-(i / pillIcons.length) * 24}s`,
              }}
            >
              <motion.div className="pill" whileHover={{ scale: 1.1 }}>
                <Icon name={icon} size={16} /> {pillLabels[pillKeys[i]]}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-footer">
        <span className="scroll-label">{t('hero.scroll')}</span>
        <div className="dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === current ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero

