import { useEffect, useState } from 'react'
import { getAdminMessages, deleteMessage } from '../../api'
import AdminLayout from '../../components/admin/AdminLayout'

function AdminMessages() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [openId, setOpenId] = useState(null)

  async function load() {
    setLoading(true)
    const data = await getAdminMessages()
    setMessages(data)
    setLoading(false)
  }

  useEffect(() => {
    load()
  }, [])

  async function handleDelete(id) {
    if (!confirm('Supprimer ce message ?')) return
    await deleteMessage(id)
    load()
  }

  return (
    <AdminLayout title="Messages de contact">
      {loading ? (
        <p>Chargement...</p>
      ) : messages.length === 0 ? (
        <p className="admin-table-empty">Aucun message pour le moment.</p>
      ) : (
        <div className="admin-messages-list">
          {messages.map((m) => (
            <div key={m.id} className="admin-message-card">
              <div className="admin-message-header" onClick={() => setOpenId(openId === m.id ? null : m.id)}>
                <div>
                  <strong>{m.sujet}</strong>
                  <span className="admin-message-meta">{m.nom} — {m.email}</span>
                </div>
                <button onClick={(e) => { e.stopPropagation(); handleDelete(m.id) }}>Supprimer</button>
              </div>
              {openId === m.id && <p className="admin-message-body">{m.message}</p>}
            </div>
          ))}
        </div>
      )}
    </AdminLayout>
  )
}

export default AdminMessages