import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import AnimatedGradientText from './AnimatedGradientText'
import ShootingStarLine from './ShootingStarLine'
import './WhatYouGet.css'

function WhatYouGet() {
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

  const items = [
    {
      icon: '🎯',
      title: 'Targeted Advertising',
      description: 'Custom campaigns built from research into your market and competitors'
    },
    {
      icon: '📄',
      title: 'Custom Landing Pages',
      description: 'Designed specifically around your services, pricing, and customer psychology'
    },
    {
      icon: '🤖',
      title: 'CRM & Automation',
      description: 'Email sequences, SMS follow-up, booking systems personalized to how you sell'
    },
    {
      icon: '📊',
      title: 'Performance Tracking',
      description: 'Weekly dashboards showing lead volume, cost per lead, and conversion insights'
    },
    {
      icon: '📱',
      title: 'Social Media Content',
      description: 'Professional posts showcasing your work and brand voice'
    },
    {
      icon: '📚',
      title: 'Sales Guides & Research',
      description: 'Deep-dive documents on objection handling, quote strategy, and process improvements'
    }
  ]

  return (
    <section className="what-you-get" ref={sectionRef}>
      <div className="what-you-get-container">
        <h2 className="section-title">
          <AnimatedGradientText>What&apos;s Included</AnimatedGradientText>
        </h2>
        <ShootingStarLine delay={0.3} />
        
        <div className="what-you-get-grid">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="what-you-get-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="card-icon">{item.icon}</div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Stat box */}
        <div className="what-you-get-stat-box">
          <div className="stat-icon">📊</div>
          <div className="stat-text">Businesses with CRM automation see 45% faster response times</div>
        </div>
      </div>
    </section>
  )
}

export default WhatYouGet
