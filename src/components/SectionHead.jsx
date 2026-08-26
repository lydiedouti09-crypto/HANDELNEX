import './SectionHead.css'

function SectionHead({ title, description, children }) {
  return (
    <div className="section-head">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      {children}
    </div>
  )
}

export default SectionHead