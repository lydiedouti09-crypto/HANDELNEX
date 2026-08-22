import './SectionHead.css'

function SectionHead({ tag, title, description, children }) {
  return (
    <div className="section-head">
      <div className="tag">{tag}</div>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      {children}
    </div>
  )
}

export default SectionHead