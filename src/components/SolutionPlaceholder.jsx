import Icon from './Icon.jsx'
import './SolutionPlaceholder.css'

function SolutionPlaceholder({ icon = 'auto_awesome', label = 'Bientôt disponible', title = 'Solution à venir' }) {
  return (
    <div className="solution-placeholder">
      <div className="sp-icon"><Icon name={icon} size={26} /></div>
      <div className="sp-badge">{label}</div>
      <h3>{title}</h3>
    </div>
  )
}

export default SolutionPlaceholder