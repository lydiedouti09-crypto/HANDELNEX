import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Accueil from './pages/Accueil.jsx'
import AdminLogin from './pages/admin/AdminLogin.jsx'
import ProtectedRoute from './components/admin/ProtectedRoute.jsx'
import AdminDashboard from './pages/admin/AdminDashboard.jsx'

function App() {
  return (
    <Routes>
      {/* Site public : avec Navbar + Footer */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Accueil />
            <Footer />
          </>
        }
      />

      {/* Espace admin : sans Navbar/Footer du site public */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
  path="/admin/dashboard"
  element={
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  }
/>
    </Routes>
    
  )
}

export default App