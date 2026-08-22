import Icon from './Icon.jsx'
import './InfoCard.css'

function InfoCard({ icon, title, color = 'var(--gold)' }) {
  return (
    <div className="info-card">
      <div className="info-card-icon" style={{ background: `${color}22`, color }}>
        <Icon name={icon} />
      </div>
      <h3>{title}</h3>
    </div>
  )
}

export default InfoCard