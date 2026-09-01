import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './LanguageSwitcher.css'

const languages = [
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
  { code: 'pt-BR', label: 'PT-BR', name: 'Português' },
]

function LanguageSwitcher({ onLanguageChange }) {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const switcherRef = useRef(null)

  const activeLanguage =
    languages.find((language) => language.code === i18n.language) ||
    languages.find((language) => i18n.language?.startsWith(language.code)) ||
    languages[0]

  useEffect(() => {
    const closeMenu = (event) => {
      if (!switcherRef.current?.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('click', closeMenu)

    return () => {
      document.removeEventListener('click', closeMenu)
    }
  }, [])

  const changeLanguage = (code) => {
    i18n.changeLanguage(code)
    setOpen(false)
    onLanguageChange?.()
  }

  return (
    <div className="lang-switcher" ref={switcherRef}>

      {/* Bouton langue actuelle */}
      <button
        type="button"
        className="lang-trigger"
        aria-label="Choisir la langue"
        aria-expanded={open}
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        <span
          className={`lang-flag flag-${activeLanguage.code}`}
          aria-hidden="true"
        ></span>

        <span>{activeLanguage.label}</span>

        <span
          className={`lang-chevron ${open ? 'lang-chevron-open' : ''}`}
          aria-hidden="true"
        ></span>
      </button>

      {/* Menu des langues */}
      {open && (
        <div className="lang-menu">

          {languages.map((language) => (
            <button
              type="button"
              key={language.code}
              className={`lang-option ${
                language.code === activeLanguage.code ? 'active' : ''
              }`}
              onClick={() => changeLanguage(language.code)}
            >
              <span
                className={`lang-flag flag-${language.code}`}
                aria-hidden="true"
              ></span>

              <strong>{language.label}</strong>

              <span>{language.name}</span>
            </button>
          ))}

        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher