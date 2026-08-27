import { Link } from 'react-router-dom'
import './Footer.css'
import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/LOGO2.png" alt="Handelnex" className="footer-logo-img" />
          </div>
          <p>{t('footer.tagline')}</p>
        </div>

        <div className="footer-col">
          <h4>{t('footer.entreprise')}</h4>
          <Link to="/#a-propos">{t('nav.apropos')}</Link>
          <Link to="/#nos-activites">{t('nav.activites')}</Link>
          <Link to="/#notre-vision">{t('nav.vision')}</Link>
        </div>

        <div className="footer-col">
          <h4>{t('footer.informations')}</h4>
          <Link to="/#actualites">{t('footer.news')}</Link>
          <Link to="/confidentialite">{t('footer.privacy')}</Link>
          <Link to="/#nos-solutions">{t('footer.travel')}</Link>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© 2026 HANDELNEX EUROSYSTEM. {t('footer.rights')}</span>
        <span>{t('footer.location')}</span>
      </div>
    </footer>
  )
}

export default Footer