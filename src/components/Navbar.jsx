import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <Link to="/" className="logo">
        <img src="/LOGO2.png" alt="Handelnex" className="logo-img" />
      </Link>
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Accueil</NavLink>
        <NavLink to="/#a-propos">À propos</NavLink>
        <NavLink to="/#nos-activites">Nos activités</NavLink>
        <NavLink to="/#nos-solutions">Nos solutions</NavLink>
        <NavLink to="/actualites">Actualités</NavLink>
        <NavLink to="/#contact">Contact</NavLink>
      </div>
      <Link to="/#nos-solutions" className="btn">Découvrir nos solutions →</Link>
    </nav>
  )
}

export default Navbar