import { motion } from 'framer-motion'
import './BackgroundShootingStars.css'

function ShootingStar({ top, left, delay = 0 }) {
  return (
    <motion.div
      className="shooting-star"
      style={{
        top,
        left,
      }}
      initial={{ opacity: 0, x: 0, y: 0, rotate: -45 }}
      animate={{
        opacity: [0, 1, 0],
        x: [0, 200],
        y: [0, 200],
      }}
      transition={{
        duration: 1.5,
        delay,
        repeat: Infinity,
        repeatDelay: 5,
        ease: 'easeOut',
      }}
    >
      <div className="shooting-star-inner" />
    </motion.div>
  )
}

function BackgroundShootingStars() {
  const stars = [
    { top: '10%', left: '20%', delay: 0 },
    { top: '30%', left: '80%', delay: 2 },
    { top: '50%', left: '15%', delay: 4 },
    { top: '70%', left: '60%', delay: 1 },
  ]

  return (
    <div className="background-shooting-stars">
      {stars.map((star, index) => (
        <ShootingStar
          key={index}
          top={star.top}
          left={star.left}
          delay={star.delay}
        />
      ))}
    </div>
  )
}

export default BackgroundShootingStars

