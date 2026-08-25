import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/LOGO2.png" alt="Handelnex" className="footer-logo-img" />
          </div>
          <p>Des solutions qui connectent les opportunités.</p>
        </div>

        <div className="footer-col">
          <h4>ENTREPRISE</h4>
          <Link to="/#a-propos">À propos</Link>
          <Link to="/#nos-activites">Nos activités</Link>
          <Link to="/#notre-vision">Notre vision</Link>
        </div>

        <div className="footer-col">
          <h4>INFORMATIONS</h4>
          <Link to="/#actualites">Actualités</Link>
          <Link to="/confidentialite">Politique de confidentialité</Link>
          <Link to="/#nos-solutions">Voyage & Billetterie</Link>
        </div>

        <div className="footer-col footer-contact">
          <h4>CONTACT</h4>
          <a href="mailto:contact@handelnex.com">contact@handelnex.com</a>
          <Link to="/#contact">Contact</Link>
          <a href="#contact">Nous contacter</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 HANDELNEX EUROSYSTEM. Tous droits réservés.</span>
        <span>Francfort, Allemagne · UG (haftungsbeschränkt)</span>
      </div>
    </footer>
  )
}

export default Footer