import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Accueil from './pages/Accueil.jsx'
import ActualiteDetail from './pages/ActualiteDetail.jsx'
import AdminLogin from './pages/admin/AdminLogin.jsx'
import ProtectedRoute from './components/admin/ProtectedRoute.jsx'
import AdminDashboard from './pages/admin/AdminDashboard.jsx'
import AdminSolutions from './pages/admin/AdminSolutions.jsx'
import AdminSolutionForm from './pages/admin/AdminSolutionForm.jsx'
import AdminActualites from './pages/admin/AdminActualites.jsx'
import AdminActualiteForm from './pages/admin/AdminActualiteForm.jsx'
import AdminMessages from './pages/admin/AdminMessages.jsx'
import SolutionDetail from './pages/SolutionDetail.jsx'

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
      <Route
        path="/actualites/:slug"
        element={
          <>
            <Navbar />
            <ActualiteDetail />
            <Footer />
          </>
        }
      />
      <Route
  path="/nos-solutions/:slug"
  element={
    <>
      <Navbar />
      <SolutionDetail />
      <Footer />
    </>
  }
/>

      {/* Espace admin : sans Navbar/Footer du site public */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />

      <Route path="/admin/solutions" element={<ProtectedRoute><AdminSolutions /></ProtectedRoute>} />
      <Route path="/admin/solutions/new" element={<ProtectedRoute><AdminSolutionForm /></ProtectedRoute>} />
      <Route path="/admin/solutions/:id/edit" element={<ProtectedRoute><AdminSolutionForm /></ProtectedRoute>} />

      <Route path="/admin/actualites" element={<ProtectedRoute><AdminActualites /></ProtectedRoute>} />
      <Route path="/admin/actualites/new" element={<ProtectedRoute><AdminActualiteForm /></ProtectedRoute>} />
      <Route path="/admin/actualites/:id/edit" element={<ProtectedRoute><AdminActualiteForm /></ProtectedRoute>} />

      <Route path="/admin/messages" element={<ProtectedRoute><AdminMessages /></ProtectedRoute>} />
    </Routes>
  )
}

export default App