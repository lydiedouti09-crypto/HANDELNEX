import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../../api'
import './AdminLayout.css'

function AdminLayout({ children, title }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
  }

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-logo">
          <img src="/LOGO.png" alt="Handelnex" />
          <span>HANDELNEX</span>
        </div>

        <nav className="admin-nav">
          <NavLink to="/admin/dashboard" end className={({ isActive }) => isActive ? 'active' : ''}>
            Tableau de bord
          </NavLink>
          <NavLink to="/admin/solutions" className={({ isActive }) => isActive ? 'active' : ''}>
            Solutions
          </NavLink>
          <NavLink to="/admin/actualites" className={({ isActive }) => isActive ? 'active' : ''}>
            Actualités
          </NavLink>
          <NavLink to="/admin/messages" className={({ isActive }) => isActive ? 'active' : ''}>
            Messages
          </NavLink>
        </nav>

        <button className="admin-logout" onClick={handleLogout}>
          Déconnexion
        </button>
      </aside>

      <div className="admin-main">
        <header className="admin-topbar">
          <h1>{title}</h1>
        </header>
        <main className="admin-content">{children}</main>
      </div>
    </div>
  )
}

export default AdminLayout