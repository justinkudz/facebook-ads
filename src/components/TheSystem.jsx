import { useEffect, useRef } from 'react'
import AnimatedGradientText from './AnimatedGradientText'
import ShootingStarLine from './ShootingStarLine'
import './TheSystem.css'

function TheSystem() {
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

  const steps = [
    {
      number: '01',
      title: 'ATTRACT',
      description: 'Custom ad campaigns targeting your exact customer in your service area'
    },
    {
      number: '02',
      title: 'QUALIFY',
      description: 'Landing pages designed around your pricing, process, and positioning'
    },
    {
      number: '03',
      title: 'CONVERT',
      description: 'CRM automation (email, SMS, booking) that follows up instantly and keeps leads warm'
    },
    {
      number: '04',
      title: 'CLOSE',
      description: 'Sales guides with objection handling, quote strategies, and content systems to position you as the expert. Plus social content that builds long-term authority and generates referrals'
    }
  ]

  return (
    <section className="the-system" ref={sectionRef}>
      <div className="the-system-container">
        <h2 className="section-title">
          <AnimatedGradientText>How It Works</AnimatedGradientText>
        </h2>
        <ShootingStarLine delay={0.3} />
        
        <div className="system-pathway">
          {steps.map((step, index) => (
            <div key={index} className="system-step" style={{ '--delay': `${index * 0.1}s` }}>
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stat box */}
        <div className="system-stat-box">
          <div className="stat-icon">📊</div>
          <div className="stat-text">
            83% of businesses don&apos;t follow up within 24 hours<br />
            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>(That&apos;s why automation matters)</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TheSystem
