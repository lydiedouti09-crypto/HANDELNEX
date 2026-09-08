import Icon from './Icon.jsx'
import './ValueItem.css'

function ValueItem({ icon, title, color = 'var(--gold)' }) {
  return (
    <div className="value-item">
      <div className="value-icon" style={{ background: `${color}22`, borderColor: `${color}55`, color }}>
        <Icon name={icon} size={26} />
      </div>
      <div className="value-title">{title}</div>
    </div>
  )
}

export default ValueItem