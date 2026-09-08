import { useEffect, useState } from 'react'
import { getAdminSolutions, getAdminActualites } from '../../api'
import AdminLayout from '../../components/admin/AdminLayout'
import Icon from '../../components/Icon.jsx'
import AdminLoading from '../../components/admin/AdminLoading'

function AdminDashboard() {
  const [stats, setStats] = useState({ solutions: null, actualites: null })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStats() {
      try {
        const [solutions, actualites] = await Promise.all([
          getAdminSolutions(),
          getAdminActualites(),
        ])
        setStats({ solutions: solutions.length, actualites: actualites.length })
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    loadStats()
  }, [])

  const display = (val) => (loading ? '—' : val)

  return (
    <AdminLayout title="Tableau de bord">
      <AdminLoading visible={loading} />
      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <div className="admin-stat-icon" style={{ background: '#E6EEFB', color: '#173A63' }}>
            <Icon name="inventory_2" size={22} />
          </div>
          <div>
            <div className="admin-stat-label">Solutions</div>
            <div className="admin-stat-value">{display(stats.solutions)}</div>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon" style={{ background: '#FDF2E3', color: '#C7A25C' }}>
            <Icon name="newspaper" size={22} />
          </div>
          <div>
            <div className="admin-stat-label">Actualités</div>
            <div className="admin-stat-value">{display(stats.actualites)}</div>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon" style={{ background: '#FCE9ED', color: '#B0413E' }}>
            <Icon name="mail" size={22} />
          </div>
          <div>
            <div className="admin-stat-label">Messages</div>
            <div className="admin-stat-value">—</div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminDashboard