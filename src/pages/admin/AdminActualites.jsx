import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAdminActualites, deleteActualite } from '../../api'
import AdminLayout from '../../components/admin/AdminLayout'
import ConfirmDialog from '../../components/ConfirmDialog'
import AdminLoading from '../../components/admin/AdminLoading'

function AdminActualites() {
  const [actualites, setActualites] = useState([])
  const [loading, setLoading] = useState(true)
  const [toDelete, setToDelete] = useState(null) // { id, titre } ou null

  async function load() {
    setLoading(true)
    const data = await getAdminActualites()
    setActualites(data)
    setLoading(false)
  }

  useEffect(() => {
    load()
  }, [])

  async function confirmDelete() {
    await deleteActualite(toDelete.id)
    setToDelete(null)
    load()
  }

  return (
    <AdminLayout title="Actualités">
      <AdminLoading visible={loading} />
      <div className="admin-toolbar">
        <Link to="/admin/actualites/new" className="admin-btn-primary">
          + Ajouter une actualité
        </Link>
      </div>

      {!loading && (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Titre</th>
              <th>Statut</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {actualites.length === 0 && (
              <tr>
                <td colSpan={3} className="admin-table-empty">Aucune actualité pour le moment.</td>
              </tr>
            )}
            {actualites.map((a) => (
              <tr key={a.id}>
                <td>{a.titre}</td>
                <td>
                  <span className={`admin-badge ${a.statut === 'publie' ? 'admin-badge-green' : 'admin-badge-gray'}`}>
                    {a.statut}
                  </span>
                </td>
                <td className="admin-table-actions">
                  <Link to={`/admin/actualites/${a.id}/edit`}>Modifier</Link>
                  <button onClick={() => setToDelete({ id: a.id, titre: a.titre })}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <ConfirmDialog
        open={!!toDelete}
        title="Supprimer cette actualité ?"
        message={toDelete ? `"${toDelete.titre}" sera définitivement supprimée.` : ''}
        onCancel={() => setToDelete(null)}
        onConfirm={confirmDelete}
      />
    </AdminLayout>
  )
}

export default AdminActualites