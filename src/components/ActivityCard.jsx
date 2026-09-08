import { useReveal } from '../hooks/useReveal.js'
import Icon from './Icon.jsx'
import './ActivityCard.css'

function ActivityCard({ icon, title, description, color = 'var(--gold)', delay = 0 }) {
  const { ref, visible } = useReveal()

  return (
    <div
      ref={ref}
      className={`activity-card ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="activity-icon" style={{ background: `${color}22`, color }}>
        <Icon name={icon} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default ActivityCard