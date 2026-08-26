import { useState } from 'react'
import Icon from './Icon.jsx'
import './ContactForm.css'
import { useTranslation } from 'react-i18next'

function ContactForm() {
  const { t } = useTranslation()
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
          <label>{t('contact.nom')}</label>
          <input type="text" placeholder={t('contact.nom_ph')} required />
        </div>
        <div className="field">
          <label>{t('contact.email')}</label>
          <input type="email" placeholder={t('contact.email_ph')} required />
        </div>
        <div className="field">
          <label>{t('contact.sujet')}</label>
          <input type="text" placeholder={t('contact.sujet_ph')} required />
        </div>
        <div className="field">
          <label>{t('contact.message')}</label>
          <textarea placeholder={t('contact.message_ph')} required></textarea>
        </div>
        <button type="submit" className="btn-dark" style={{ width: '100%', justifyContent: 'center', border: 'none', cursor: 'pointer' }}>
          {sent ? `${t('contact.sent')} ✓` : `${t('contact.send')} →`}
        </button>
      </form>

      <div className="info-list">
        <div className="info-card-contact">
          <div className="info-ico info-ico-email"><Icon name="mail" size={22} /></div>
          <div><h3>{t('contact.email_title')}</h3><p>contact@handelnex.com</p></div>
        </div>
        <div className="info-card-contact">
          <div className="info-ico info-ico-location"><Icon name="location_on" size={22} /></div>
          <div><h3>{t('contact.location_title')}</h3><p>{t('contact.location')}</p></div>
        </div>
        <div className="info-card-contact">
          <div className="info-ico info-ico-response"><Icon name="chat_bubble" size={22} /></div>
          <div><h3>{t('contact.response_title')}</h3><p>{t('contact.response')}</p></div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm