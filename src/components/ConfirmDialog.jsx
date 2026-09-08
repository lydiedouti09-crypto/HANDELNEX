import './ConfirmDialog.css'

// Fenêtre de confirmation réutilisable, à la place de window.confirm().
// Utilisation : voir l'exemple donné avec le composant.
function ConfirmDialog({ open, title, message, onConfirm, onCancel }) {
  if (!open) return null

  return (
    <div className="confirm-overlay" onClick={onCancel}>
      <div className="confirm-box" onClick={(e) => e.stopPropagation()}>
        <h3>{title}</h3>
        <p>{message}</p>
        <div className="confirm-actions">
          <button className="confirm-cancel" onClick={onCancel}>Annuler</button>
          <button className="confirm-delete" onClick={onConfirm}>Supprimer</button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmDialog