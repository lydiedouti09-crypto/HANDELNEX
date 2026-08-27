const configuredApiUrl = import.meta.env.VITE_API_URL;
const localApiOrigin = typeof window !== 'undefined'
  ? `${window.location.protocol}//${window.location.hostname}:8000`
  : 'http://127.0.0.1:8000';
const API_ORIGIN = (configuredApiUrl || localApiOrigin).replace(/\/$/, '');
const API_BASE = `${API_ORIGIN}/api`;

export function getMediaUrl(path) {
  if (!path || !path.startsWith('/uploads/')) return path;
  return `${API_ORIGIN}${path}`;
}

// --- Données publiques (site vitrine) ---

export async function fetchSolutions() {
  const res = await fetch(`${API_BASE}/solutions`);
  if (!res.ok) throw new Error('Erreur lors du chargement des solutions');
  return res.json();
}

export async function fetchSolution(slug) {
  const res = await fetch(`${API_BASE}/solutions/${slug}`);
  if (!res.ok) throw new Error('Solution introuvable');
  return res.json();
}

export async function fetchActualites() {
  const res = await fetch(`${API_BASE}/actualites`);
  if (!res.ok) throw new Error('Erreur lors du chargement des actualités');
  return res.json();
}

export async function fetchActualite(slug) {
  const res = await fetch(`${API_BASE}/actualites/${slug}`);
  if (!res.ok) throw new Error('Actualité introuvable');
  return res.json();
}

// --- Authentification ---

export async function login(email, password) {
  const res = await fetch(`${API_BASE}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error('Email ou mot de passe incorrect');
  }

  const data = await res.json();
  localStorage.setItem('admin_token', data.token);
  return data.token;
}

export function logout() {
  localStorage.removeItem('admin_token');
}

export function getToken() {
  return localStorage.getItem('admin_token');
}

export async function uploadImage(file) {
  const formData = new FormData();
  formData.append('image', file);

  const res = await fetch(`${API_BASE}/solutions/admin/image-upload`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${getToken()}` },
    body: formData,
  });

  if (res.status === 401) {
    logout();
    window.location.href = '/admin/login';
    throw new Error('Session expirée. Veuillez vous reconnecter.');
  }

  if (!res.ok) throw new Error('Erreur lors de l\'envoi de l\'image');
  return res.json();
}

export async function uploadActualiteImage(file) {
  const formData = new FormData();
  formData.append('image', file);

  const res = await fetch(`${API_BASE}/actualites/admin/image-upload`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${getToken()}` },
    body: formData,
  });

  if (res.status === 401) {
    logout();
    window.location.href = '/admin/login';
    throw new Error('Session expirée. Veuillez vous reconnecter.');
  }

  if (!res.ok) {
    let message = `Erreur ${res.status} lors de l'envoi de l'image`;
    try {
      const error = await res.json();
      if (error.error) message = error.error;
    } catch {
      // La réponse peut être vide en cas de refus serveur ou de limite PHP.
    }
    throw new Error(message);
  }
  return res.json();
}

export function isLoggedIn() {
  return !!getToken();
}

// Helper pour les appels admin authentifiés (POST/PUT/DELETE)
async function authFetch(url, options = {}) {
  const token = getToken();
  const res = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  });

  if (res.status === 401) {
    logout();
    window.location.href = '/admin/login';
    throw new Error('Session expirée');
  }

  return res;
}

// --- Solutions (admin) ---

export async function getAdminSolutions() {
  const res = await authFetch(`${API_BASE}/solutions/admin/all`);
  return res.json();
}

export async function createSolution(data) {
  const res = await authFetch(`${API_BASE}/solutions/admin`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateSolution(id, data) {
  const res = await authFetch(`${API_BASE}/solutions/admin/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteSolution(id) {
  const res = await authFetch(`${API_BASE}/solutions/admin/${id}`, {
    method: 'DELETE',
  });
  return res.json();
}

// --- Actualités (admin) ---

export async function getAdminActualites() {
  const res = await authFetch(`${API_BASE}/actualites/admin/all`);
  return res.json();
}

export async function createActualite(data) {
  const res = await authFetch(`${API_BASE}/actualites/admin`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateActualite(id, data) {
  const res = await authFetch(`${API_BASE}/actualites/admin/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteActualite(id) {
  const res = await authFetch(`${API_BASE}/actualites/admin/${id}`, {
    method: 'DELETE',
  });
  return res.json();
}
// --- Messages de contact (admin) ---

export async function getAdminMessages() {
  const res = await authFetch(`${API_BASE}/contact/admin/all`);
  return res.json();
}

export async function deleteMessage(id) {
  const res = await authFetch(`${API_BASE}/contact/admin/${id}`, {
    method: 'DELETE',
  });
  return res.json();
}