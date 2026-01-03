import { motion } from 'framer-motion'
import './ShootingStarLine.css'

function ShootingStarLine({ className = '', delay = 0 }) {
  return (
    <div className={`shooting-star-line ${className}`}>
      {/* Base purple line */}
      <div className="shooting-star-base"></div>
      
      {/* Shooting star effect */}
      <motion.div
        className="shooting-star-main"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 1.5,
          delay: delay,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatDelay: 2,
        }}
      />
      
      {/* Glow trail */}
      <motion.div
        className="shooting-star-trail"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 1.5,
          delay: delay + 0.1,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatDelay: 2,
        }}
      />
    </div>
  )
}

export default ShootingStarLine

