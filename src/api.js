// URL de base de l'API Symfony.
// En développement : ton serveur Symfony (souvent http://127.0.0.1:8000).
// Tu peux la surcharger avec un fichier .env : VITE_API_URL=http://127.0.0.1:8000
const API_BASE = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000'

async function apiFetch(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })

  if (!response.ok) {
    throw new Error(`Erreur API (${response.status}) sur ${path}`)
  }

  return response.json()
}

export function fetchSolutions() {
  return apiFetch('/api/solutions')
}

export function fetchSolution(slug) {
  return apiFetch(`/api/solutions/${slug}`)
}

export function fetchActualites() {
  return apiFetch('/api/actualites')
}

export function sendContactMessage(data) {
  return apiFetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}