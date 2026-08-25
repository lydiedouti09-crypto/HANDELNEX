import { Navigate } from 'react-router-dom'
import { isLoggedIn } from '../../api'

function ProtectedRoute({ children }) {
  if (!isLoggedIn()) {
    return <Navigate to="/admin/login" replace />
  }
  return children
}

export default ProtectedRoute