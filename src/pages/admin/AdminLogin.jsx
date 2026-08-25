import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../api'
import './AdminLogin.css'

function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(email, password)
      navigate('/admin/dashboard')
    } catch {
      setError('Email ou mot de passe incorrect')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="admin-login">
      <form onSubmit={handleSubmit} className="admin-login-form">
        <h1>Bienvenue</h1>
        <p className="admin-login-subtitle">Connectez-vous à votre espace d'administration.</p>
        {error && <p className="admin-login-error">{error}</p>}
        <label className="admin-login-field">
          <span>Email</span>
          <input
            type="email"
            placeholder="nom@entreprise.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="admin-login-field">
          <span>Mot de passe</span>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <a className="admin-login-forgot" href="#">Mot de passe oublié ?</a>
        <button type="submit" disabled={loading}>
          {loading ? 'Connexion...' : 'Se connecter'}
          <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
        </button>
      </form>
    </div>
  )
}

export default AdminLogin