import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import AnimatedGradientText from './AnimatedGradientText'
import ShootingStarLine from './ShootingStarLine'
import './WhatIDo.css'

function WhatIDo() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section className="what-i-do" ref={sectionRef}>
      <div className="what-i-do-container">
        <h2 className="section-title">
          <AnimatedGradientText>Here&apos;s What Actually Happens</AnimatedGradientText>
        </h2>
        <ShootingStarLine delay={0.3} />
        
        <div className="what-i-do-grid">
          {[
            { icon: '🎯', title: 'ATTRACT', description: 'Targeted ads reaching people actively searching for your services in your area' },
            { icon: '✅', title: 'QUALIFY', description: 'Landing pages with pricing transparency that filter out time-wasters before they reach you' },
            { icon: '💰', title: 'CONVERT', description: 'Automated follow-up systems and sales frameworks that turn opportunities into revenue' }
          ].map((card, index) => (
            <motion.div
              key={index}
              className="what-i-do-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="card-icon">{card.icon}</div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </motion.div>
          ))}
        </div>
        
        <p className="what-i-do-footer">
          You get leads. You get the tools to close them. Simple.
        </p>
      </div>
    </section>
  )
}

export default WhatIDo
