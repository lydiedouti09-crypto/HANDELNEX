import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAdminActualites, deleteActualite } from '../../api'
import AdminLayout from '../../components/admin/AdminLayout'

function AdminActualites() {
  const [actualites, setActualites] = useState([])
  const [loading, setLoading] = useState(true)

  async function load() {
    setLoading(true)
    const data = await getAdminActualites()
    setActualites(data)
    setLoading(false)
  }

  useEffect(() => {
    load()
  }, [])

  async function handleDelete(id, titre) {
    if (!confirm(`Supprimer l'actualité "${titre}" ?`)) return
    await deleteActualite(id)
    load()
  }

  return (
    <AdminLayout title="Actualités">
      <div className="admin-toolbar">
        <Link to="/admin/actualites/new" className="admin-btn-primary">
          + Ajouter une actualité
        </Link>
      </div>

      {loading ? (
        <p>Chargement...</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Titre</th>
              <th>Date</th>
              <th>Statut</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {actualites.length === 0 && (
              <tr>
                <td colSpan={4} className="admin-table-empty">Aucune actualité pour le moment.</td>
              </tr>
            )}
            {actualites.map((a) => (
              <tr key={a.id}>
                <td>{a.titre}</td>
                <td>{a.datePublication}</td>
                <td>
                  <span className={`admin-badge ${a.statut === 'publie' ? 'admin-badge-green' : 'admin-badge-gray'}`}>
                    {a.statut}
                  </span>
                </td>
                <td className="admin-table-actions">
                  <Link to={`/admin/actualites/${a.id}/edit`}>Modifier</Link>
                  <button onClick={() => handleDelete(a.id, a.titre)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </AdminLayout>
  )
}

export default AdminActualites