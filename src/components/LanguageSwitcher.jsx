import { useTranslation } from 'react-i18next'
import './LanguageSwitcher.css'

const languages = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
]

function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <div className="lang-switcher">
      <select
        aria-label="Choisir la langue"
        value={i18n.language}
        onChange={(event) => i18n.changeLanguage(event.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LanguageSwitcher