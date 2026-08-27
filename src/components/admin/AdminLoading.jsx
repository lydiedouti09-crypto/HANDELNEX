import { Oval } from 'react-loader-spinner'

function AdminLoading({ visible = true, text = 'Chargement...' }) {
  if (!visible) return null

  return (
    <div className="admin-loading" role="status" aria-live="polite" aria-label="Chargement">
      <Oval
        height={28}
        width={28}
        color="var(--gold-deep)"
        secondaryColor="var(--gold)"
        strokeWidth={4}
        visible
      />
      <span className="admin-loading-text">{text}</span>
    </div>
  )
}

export default AdminLoading