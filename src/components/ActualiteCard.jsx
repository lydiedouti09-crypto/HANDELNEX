import './ActualiteCard.css'
import { getMediaUrl } from '../api.js'

function ActualiteCard({ titre, image, datePublication }) {
  return (
    <div className="actualite-card">
      <div
        className="actualite-image"
        style={{ backgroundImage: image ? `url(${getMediaUrl(image)})` : undefined }}
      ></div>
      <div className="actualite-date">{datePublication}</div>
      <h3>{titre}</h3>
    </div>
  )
}

export default ActualiteCard