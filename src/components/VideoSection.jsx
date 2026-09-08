import ValueItem from './ValueItem.jsx'
import './VisionSection.css'

const values = [
  { icon: 'construction', title: 'Innovation', color: 'var(--gold)' },
  { icon: 'handshake', title: 'Confiance', color: 'var(--mint)' },
  { icon: 'public', title: 'International', color: 'var(--sky)' },
  { icon: 'devices', title: 'Technologie', color: 'var(--indigo)' },
]

function VisionSection() {
  return (
    <section id="notre-vision" className="vision-section">
      {/* Place ta vidéo dans public/, ex: public/handelnex-video.mp4 */}
      <video
        src="/avions.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="vision-video"
      />
      <div className="vision-overlay"></div>

      <div className="vision-content">
        <div className="vision-tag">NOTRE VISION</div>
        <h1 className="vision-title">
          Connecter les services.<br />
          <span className="accent">Créer les opportunités.</span>
        </h1>
        <p className="vision-desc">
          HANDELNEX ambitionne de développer des services et des solutions
          capables d'accompagner les besoins d'un environnement de plus en plus connecté.
        </p>

        <div className="values-row">
          {values.map((v) => (
            <ValueItem key={v.title} {...v} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default VisionSection