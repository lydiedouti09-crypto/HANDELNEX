import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import './Navbar.css'

function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

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
      <div className="navbar-actions">
        <div className="desktop-language"><LanguageSwitcher /></div>
        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label="Ouvrir le menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((isOpen) => !isOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
      <div className={`mobile-menu ${mobileOpen ? 'mobile-menu-open' : ''}`}>
        <Link to="/" onClick={() => setMobileOpen(false)}>{t('nav.accueil')}</Link>
        <Link to="/#a-propos" onClick={() => setMobileOpen(false)}>{t('nav.apropos')}</Link>
        <Link to="/#nos-activites" onClick={() => setMobileOpen(false)}>{t('nav.activites')}</Link>
        <Link to="/#nos-solutions" onClick={() => setMobileOpen(false)}>{t('nav.solutions')}</Link>
        <Link to="/#contact" onClick={() => setMobileOpen(false)}>{t('nav.contact')}</Link>
        <div className="mobile-language">
          <LanguageSwitcher onLanguageChange={() => setMobileOpen(false)} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar