import './ActualiteCard.css'

function ActualiteCard({ titre, image, datePublication }) {
  return (
    <div className="actualite-card">
      <div
        className="actualite-image"
        style={{ backgroundImage: image ? `url(${image})` : undefined }}
      ></div>
      <div className="actualite-date">{datePublication}</div>
      <h3>{titre}</h3>
    </div>
  )
}

export default ActualiteCard