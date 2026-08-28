import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAdminSolutions, deleteSolution } from '../../api'
import AdminLayout from '../../components/admin/AdminLayout'
import ConfirmDialog from '../../components/ConfirmDialog'
import AdminLoading from '../../components/admin/AdminLoading'

function AdminSolutions() {
  const [solutions, setSolutions] = useState([])
  const [loading, setLoading] = useState(true)
  const [toDelete, setToDelete] = useState(null) // { id, nom } ou null

  async function load() {
    setLoading(true)
    const data = await getAdminSolutions()
    setSolutions(data)
    setLoading(false)
  }

  useEffect(() => {
    load()
  }, [])

  async function confirmDelete() {
    await deleteSolution(toDelete.id)
    setToDelete(null)
    load()
  }

  return (
    <AdminLayout title="Solutions">
      <AdminLoading visible={loading} />
      <div className="admin-toolbar">
        <Link to="/admin/solutions/new" className="admin-btn-primary">
          + Ajouter une solution
        </Link>
      </div>

      {!loading && (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Catégorie</th>
              <th>Statut</th>
              <th>Ordre</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {solutions.length === 0 && (
              <tr>
                <td colSpan={5} className="admin-table-empty">Aucune solution pour le moment.</td>
              </tr>
            )}
            {solutions.map((s) => (
              <tr key={s.id}>
                <td>{s.nom}</td>
                <td>{s.categorie}</td>
                <td>
                  <span className={`admin-badge ${s.statut === 'publie' ? 'admin-badge-green' : 'admin-badge-gray'}`}>
                    {s.statut}
                  </span>
                </td>
                <td>{s.ordreAffichage}</td>
                <td className="admin-table-actions">
                  <Link to={`/admin/solutions/${s.id}/edit`}>Modifier</Link>
                  <button onClick={() => setToDelete({ id: s.id, nom: s.nom })}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <ConfirmDialog
        open={!!toDelete}
        title="Supprimer cette solution ?"
        message={toDelete ? `"${toDelete.nom}" sera définitivement supprimée.` : ''}
        onCancel={() => setToDelete(null)}
        onConfirm={confirmDelete}
      />
    </AdminLayout>
  )
}

export default AdminSolutions
