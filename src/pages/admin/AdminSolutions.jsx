import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAdminSolutions, deleteSolution } from '../../api'
import AdminLayout from '../../components/admin/AdminLayout'

function AdminSolutions() {
  const [solutions, setSolutions] = useState([])
  const [loading, setLoading] = useState(true)

  async function load() {
    setLoading(true)
    const data = await getAdminSolutions()
    setSolutions(data)
    setLoading(false)
  }

  useEffect(() => {
    load()
  }, [])

  async function handleDelete(id, nom) {
    if (!confirm(`Supprimer la solution "${nom}" ?`)) return
    await deleteSolution(id)
    load()
  }

  return (
    <AdminLayout title="Solutions">
      <div className="admin-toolbar">
        <Link to="/admin/solutions/new" className="admin-btn-primary">
          + Ajouter une solution
        </Link>
      </div>

      {loading ? (
        <p>Chargement...</p>
      ) : (
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
                  <button onClick={() => handleDelete(s.id, s.nom)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </AdminLayout>
  )
}

export default AdminSolutions