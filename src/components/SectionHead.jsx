import './SectionHead.css'
import { useReveal } from '../hooks/useReveal.js'

function SectionHead({ title, description, children }) {
  const { ref, visible } = useReveal()

  return (
    <div ref={ref} className={`section-head reveal ${visible ? 'visible' : ''}`}>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      {children}
    </div>
  )
}

export default SectionHead