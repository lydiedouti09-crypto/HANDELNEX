import { motion } from 'framer-motion'

// Anime le titre mot par mot, comme un effet Slider Revolution :
// chaque mot apparaît l'un après l'autre avec un léger décalage.
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
}

const word = {
  hidden: { opacity: 0, y: '100%' },
  visible: {
    opacity: 1,
    y: '0%',
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

function AnimatedTitle({ text, className }) {
  const words = text.split(' ')

  return (
    <motion.h1
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((w, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}>
          <motion.span style={{ display: 'inline-block' }} variants={word}>
            {w}{i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  )
}

export default AnimatedTitle