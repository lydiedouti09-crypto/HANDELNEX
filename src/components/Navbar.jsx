import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import './Navbar.css'

function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <Link to="/" className="logo">
        <img src="/LOGO2.png" alt="Handelnex" className="logo-img" />
      </Link>
      <div className="nav-links">
        <Link to="/">{t('nav.accueil')}</Link>
        <Link to="/#a-propos">{t('nav.apropos')}</Link>
        <Link to="/#nos-activites">{t('nav.activites')}</Link>
        <Link to="/#nos-solutions">{t('nav.solutions')}</Link>
        <Link to="/#contact">{t('nav.contact')}</Link>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <LanguageSwitcher />
        <Link to="/#nos-solutions" className="btn">{t('nav.cta')} →</Link>
      </div>
    </nav>
  )
}

export default Navbar