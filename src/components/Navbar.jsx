import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import './Navbar.css'
import { useScrollDirection } from '../hooks/useScrollDirection.js'

function Navbar() {
  const { t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()

  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('accueil')
  const scrollDirection = useScrollDirection()
  const isNavbarHidden = scrolled && scrollDirection === 'down'

  /* =========================
     DÉTECTION DU SCROLL
  ========================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  /* =========================
     DÉTECTION SECTION ACTIVE
  ========================= */

  useEffect(() => {
    const handleScroll = () => {
      // Si on n'est pas sur l'accueil
      if (location.pathname !== '/') {
        setActiveSection('')
        return
      }

      const sections = [
        {
          id: 'a-propos',
          name: 'apropos'
        },
        {
          id: 'nos-activites',
          name: 'activites'
        },
        {
          id: 'nos-solutions',
          name: 'solutions'
        },
        {
          id: 'contact',
          name: 'contact'
        }
      ]

      let currentSection = 'accueil'

      sections.forEach((section) => {
        const element = document.getElementById(section.id)

        if (element) {
          const rect = element.getBoundingClientRect()

          if (rect.top <= 180) {
            currentSection = section.name
          }
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)

    // Vérifie immédiatement
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [location.pathname])


  /* =========================
     FERMER LE MENU MOBILE
  ========================= */

  const closeMobileMenu = () => {
    setMobileOpen(false)
  }


  /* =========================
     ACCUEIL
  ========================= */

  const goHome = () => {
    setActiveSection('accueil')
    closeMobileMenu()

    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    } else {
      navigate('/')
    }
  }


  /* =========================
     ALLER À UNE SECTION
  ========================= */

  const goToSection = (sectionId, sectionName) => {
    setActiveSection(sectionName)
    closeMobileMenu()

    // Si on est déjà sur l'accueil
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId)

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    } else {
      // Si on est sur une autre page
      navigate(`/#${sectionId}`)

      // Petite attente pour laisser React charger l'accueil
      setTimeout(() => {
        const element = document.getElementById(sectionId)

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }, 300)
    }
  }


  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${isNavbarHidden ? 'navbar-hidden' : ''}`}>

      {/* =========================
          LOGO
      ========================= */}

      <button
        type="button"
        className="logo"
        onClick={goHome}
        aria-label="Accueil"
      >
        <img
          src="/LOGO2.png"
          alt="Handelnex"
          className="logo-img"
        />
      </button>


      {/* =========================
          MENU DESKTOP
      ========================= */}

      <div className="nav-links">

        {/* ACCUEIL */}

        <button
          type="button"
          className={
            activeSection === 'accueil'
              ? 'active'
              : ''
          }
          onClick={goHome}
        >
          {t('nav.accueil')}
        </button>


        {/* À PROPOS */}

        <button
          type="button"
          className={
            activeSection === 'apropos'
              ? 'active'
              : ''
          }
          onClick={() =>
            goToSection(
              'a-propos',
              'apropos'
            )
          }
        >
          {t('nav.apropos')}
        </button>


        {/* ACTIVITÉS */}

        <button
          type="button"
          className={
            activeSection === 'activites'
              ? 'active'
              : ''
          }
          onClick={() =>
            goToSection(
              'nos-activites',
              'activites'
            )
          }
        >
          {t('nav.activites')}
        </button>


        {/* SOLUTIONS */}

        <button
          type="button"
          className={
            activeSection === 'solutions'
              ? 'active'
              : ''
          }
          onClick={() =>
            goToSection(
              'nos-solutions',
              'solutions'
            )
          }
        >
          {t('nav.solutions')}
        </button>


        {/* CONTACT */}

        <button
          type="button"
          className={
            activeSection === 'contact'
              ? 'active'
              : ''
          }
          onClick={() =>
            goToSection(
              'contact',
              'contact'
            )
          }
        >
          {t('nav.contact')}
        </button>

      </div>


      {/* =========================
          ACTIONS
      ========================= */}

      <div className="navbar-actions">

        {/* LANGUE DESKTOP */}

        <div className="desktop-language">
          <LanguageSwitcher />
        </div>


        {/* BOUTON HAMBURGER */}

        <button
          type="button"
          className={`mobile-menu-toggle ${
            mobileOpen
              ? 'hamburger-open'
              : ''
          }`}
          aria-label="Ouvrir le menu"
          aria-expanded={mobileOpen}
          onClick={() =>
            setMobileOpen(
              (isOpen) => !isOpen
            )
          }
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>


      {/* =========================
          MENU MOBILE
      ========================= */}

      <div
        className={`mobile-menu ${
          mobileOpen
            ? 'mobile-menu-open'
            : ''
        }`}
      >

        {/* ACCUEIL */}

        <button
          type="button"
          className={
            activeSection === 'accueil'
              ? 'active'
              : ''
          }
          onClick={goHome}
        >
          {t('nav.accueil')}
        </button>


        {/* À PROPOS */}

        <button
          type="button"
          className={
            activeSection === 'apropos'
              ? 'active'
              : ''
          }
          onClick={() =>
            goToSection(
              'a-propos',
              'apropos'
            )
          }
        >
          {t('nav.apropos')}
        </button>


        {/* ACTIVITÉS */}

        <button
          type="button"
          className={
            activeSection === 'activites'
              ? 'active'
              : ''
          }
          onClick={() =>
            goToSection(
              'nos-activites',
              'activites'
            )
          }
        >
          {t('nav.activites')}
        </button>


        {/* SOLUTIONS */}

        <button
          type="button"
          className={
            activeSection === 'solutions'
              ? 'active'
              : ''
          }
          onClick={() =>
            goToSection(
              'nos-solutions',
              'solutions'
            )
          }
        >
          {t('nav.solutions')}
        </button>


        {/* CONTACT */}

        <button
          type="button"
          className={
            activeSection === 'contact'
              ? 'active'
              : ''
          }
          onClick={() =>
            goToSection(
              'contact',
              'contact'
            )
          }
        >
          {t('nav.contact')}
        </button>


        {/* LANGUE MOBILE */}

        <div className="mobile-language">
          <LanguageSwitcher
            onLanguageChange={
              closeMobileMenu
            }
          />
        </div>

      </div>

    </nav>
  )
}

export default Navbar