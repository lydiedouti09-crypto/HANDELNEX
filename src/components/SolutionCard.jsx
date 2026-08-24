import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import './SolutionCard.css'

function SolutionCard({ nom, description, slug, icone }) {
  return (
    <div className="solution-card">
      <div className="solution-card-icon"><Icon name={icone || 'apps'} /></div>
      <h3>{nom}</h3>
      <p>{description}</p>
      <Link to={`/nos-solutions/${slug}`} className="solution-card-link">Découvrir →</Link>
    </div>
  )
}

export default SolutionCard