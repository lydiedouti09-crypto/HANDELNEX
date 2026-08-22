import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo" style={{ color: '#fff' }}>
            <img src="/LOGO2.png" alt="Handelnex" className="footer-logo-img" />
          </div>
          <p>Des solutions qui connectent les opportunités.</p>
          <div className="socials">
            <a href="#" aria-label="LinkedIn">Li</a>
            <a href="#" aria-label="Twitter">Tw</a>
            <a href="#" aria-label="Facebook">Fb</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>ENTREPRISE</h4>
          <Link to="/#a-propos">À propos</Link>
          <Link to="/#nos-activites">Nos activités</Link>
          <Link to="/#notre-vision">Notre vision</Link>
        </div>

        <div className="footer-col">
          <h4>SOLUTIONS</h4>
          <Link to="/nos-solutions/voyage">Voyage & Billetterie</Link>
          <Link to="/#nos-solutions">Nos solutions</Link>
        </div>

        <div className="footer-col">
          <h4>INFORMATIONS</h4>
          <Link to="/#actualites">Actualités</Link>
          <Link to="/#contact">Contact</Link>
          <Link to="/mentions-legales">Mentions légales</Link>
          <Link to="/confidentialite">Politique de confidentialité</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 HANDELNEX UG. Tous droits réservés.</span>
        <span>Francfort, Allemagne · UG (haftungsbeschränkt)</span>
      </div>
    </footer>
  )
}

export default Footer