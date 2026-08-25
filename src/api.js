const API_BASE = 'http://127.0.0.1:8000/api';

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