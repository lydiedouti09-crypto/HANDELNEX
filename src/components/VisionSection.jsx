import ValueItem from './ValueItem.jsx'
import './VisionSection.css'
import { useTranslation } from 'react-i18next'


const valueDefinitions = [
  { icon: 'construction', title: 'Innovation', color: 'var(--gold)' },
  { icon: 'handshake', title: 'Confiance', color: 'var(--mint)' },
  { icon: 'public', title: 'International', color: 'var(--sky)' },
  { icon: 'devices', title: 'Technologie', color: 'var(--indigo)' },
]

function VisionSection() {
  const { t } = useTranslation()
  const translatedValues = t('vision.values', { returnObjects: true })
  return (
    <section id="notre-vision" className="vision-section">
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
        <h1 className="vision-title">
          {t('vision.title1')}<br />
          <span className="accent">{t('vision.title2')}</span>
        </h1>
        <p className="vision-desc">
          {t('vision.desc')}
        </p>

        <div className="values-row">
          {valueDefinitions.map((value) => (
            <ValueItem key={value.title} {...value} title={translatedValues[value.title.toLowerCase()]} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default VisionSection