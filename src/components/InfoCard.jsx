import Icon from './Icon.jsx'
import './InfoCard.css'
import { useReveal } from '../hooks/useReveal.js'

function InfoCard({ icon, title, color = 'var(--gold)' }) {
  const { ref, visible } = useReveal()

  return (
    <div ref={ref} className={`info-card reveal ${visible ? 'visible' : ''}`}>
      <div className="info-card-icon" style={{ background: `${color}22`, color }}>
        <Icon name={icon} />
      </div>
      <h3>{title}</h3>
    </div>
  )
}

export default InfoCard