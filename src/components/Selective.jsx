import { useEffect, useRef } from 'react'
import AnimatedGradientText from './AnimatedGradientText'
import ShootingStarLine from './ShootingStarLine'
import './Selective.css'

function Selective() {
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
    <section className="selective" ref={sectionRef}>
      <div className="selective-container">
        <h2 className="section-title">
          <AnimatedGradientText>We Don&apos;t Work With Everyone</AnimatedGradientText>
        </h2>
        <ShootingStarLine delay={0.3} />
        
        <div className="selective-content">
          <div className="selective-text">
            <p>
              I only take on a handful of clients at a time because everything is personalized to your business.
            </p>
            <p>
              Your ads are built from research into your competitors. Your landing pages are designed around your pricing psychology.
            </p>
            <p>
              Your CRM is mapped to your sales process. Your content reflects your brand voice.
            </p>
            <p>
              This takes time. I can&apos;t do it for 30 clients and maintain quality.
            </p>
            <p>
              I work best with businesses who:
            </p>
          </div>
          
          <div className="selective-checklist">
            <div className="checklist-item">
              <span className="check-icon">✓</span>
              <span>Are serious about growth</span>
            </div>
            <div className="checklist-item">
              <span className="check-icon">✓</span>
              <span>Have capacity to handle more enquiries</span>
            </div>
            <div className="checklist-item">
              <span className="check-icon">✓</span>
              <span>Are willing to implement the frameworks I provide</span>
            </div>
            <div className="checklist-item">
              <span className="check-icon">✓</span>
              <span>See marketing as an investment, not an expense</span>
            </div>
            <div className="checklist-item">
              <span className="check-icon">✓</span>
              <span>Are responsive with feedback and content</span>
            </div>
          </div>
          
          <p className="selective-footer">
            If that sounds like you, let&apos;s talk.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Selective
