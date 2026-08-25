import { useState } from 'react'
import Icon from './Icon.jsx'
import './ContactForm.css'

function ContactForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // À connecter plus tard à l'API Symfony (POST /api/contact)
    setSent(true)
  }

  return (
    <div className="contact-grid">
      <form className="form-card" onSubmit={handleSubmit}>
        <div className="field">
          <label>Nom</label>
          <input type="text" placeholder="Votre nom" required />
        </div>
        <div className="field">
          <label>Adresse e-mail</label>
          <input type="email" placeholder="vous@exemple.com" required />
        </div>
        <div className="field">
          <label>Sujet</label>
          <input type="text" placeholder="Objet de votre message" required />
        </div>
        <div className="field">
          <label>Message</label>
          <textarea placeholder="Écrivez votre message ici..." required></textarea>
        </div>
        <button type="submit" className="btn-dark" style={{ width: '100%', justifyContent: 'center', border: 'none', cursor: 'pointer' }}>
          {sent ? 'Message envoyé ✓' : 'Envoyer →'}
        </button>
      </form>

      <div className="info-list">
        <div className="info-card-contact">
          <div className="info-ico info-ico-email"><Icon name="mail" size={22} /></div>
          <div><h3>E-mail</h3><p>contact@handelnex.com</p></div>
        </div>
        <div className="info-card-contact">
          <div className="info-ico info-ico-location"><Icon name="location_on" size={22} /></div>
          <div><h3>Siège</h3><p>Francfort, Allemagne — HANDELNEX UG</p></div>
        </div>
        <div className="info-card-contact">
          <div className="info-ico info-ico-response"><Icon name="chat_bubble" size={22} /></div>
          <div><h3>Réponse</h3><p>Notre équipe répond généralement sous 48h ouvrées.</p></div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm