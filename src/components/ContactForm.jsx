import { useState } from 'react'
import Icon from './Icon.jsx'
import './ContactForm.css'
import { useTranslation } from 'react-i18next'
import ReCAPTCHA from 'react-google-recaptcha'
import { sendContactMessage } from '../api.js'

// Remplace par TA clé de site (publique) obtenue sur google.com/recaptcha/admin
const RECAPTCHA_SITE_KEY = '6LfBVJstAAAAAOmjVzatPzR7hwSskLkKkUbzgO5O'

function ContactForm() {
  const { t } = useTranslation()
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [captchaToken, setCaptchaToken] = useState(null)
  const [form, setForm] = useState({ nom: '', email: '', sujet: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!captchaToken) {
      setError('Merci de valider le CAPTCHA avant d\'envoyer.')
      return
    }

    try {
      await sendContactMessage({ ...form, captchaToken })
      setSent(true)
    } catch (err) {
      setError('Une erreur est survenue. Réessaie.')
      console.error(err)
    }
  }

  return (
    <div className="contact-grid">
      <form className="form-card" onSubmit={handleSubmit}>
        <div className="field">
          <label>{t('contact.nom')}</label>
          <input type="text" name="nom" value={form.nom} onChange={handleChange} placeholder={t('contact.nom_ph')} required />
        </div>
        <div className="field">
          <label>{t('contact.email')}</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder={t('contact.email_ph')} required />
        </div>
        <div className="field">
          <label>{t('contact.sujet')}</label>
          <input type="text" name="sujet" value={form.sujet} onChange={handleChange} placeholder={t('contact.sujet_ph')} required />
        </div>
        <div className="field">
          <label>{t('contact.message')}</label>
          <textarea name="message" value={form.message} onChange={handleChange} placeholder={t('contact.message_ph')} required></textarea>
        </div>

        <div className="field">
          <ReCAPTCHA
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={(token) => setCaptchaToken(token)}
            onExpired={() => setCaptchaToken(null)}
          />
        </div>

        {error && <p style={{ color: '#B02A37', fontSize: '13.5px', marginBottom: '14px' }}>{error}</p>}

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