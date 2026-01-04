import { useEffect, useRef } from 'react'
import AnimatedGradientText from './AnimatedGradientText'
import ShootingStarLine from './ShootingStarLine'
import './FinalCTA.css'

function FinalCTA({ onOpenBooking }) {
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
    <section className="final-cta" ref={sectionRef}>
      <div className="final-cta-container">
        <h2 className="section-title">
          <AnimatedGradientText>Let&apos;s See If We&apos;re A Fit</AnimatedGradientText>
        </h2>
        <ShootingStarLine delay={0.3} />
        <div className="final-cta-text">
          <p className="final-cta-subtitle">
            Book a 30-minute strategy call. We&apos;ll analyze your market, identify opportunities, and see if we can genuinely help.
          </p>
          <p className="final-cta-subtitle">
            No pressure. Just an honest conversation.
          </p>
          <p className="final-cta-subtitle">
            If I don&apos;t think I can deliver results, I&apos;ll tell you.
          </p>
        </div>
        <button 
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            if (onOpenBooking) {
              onOpenBooking()
            }
          }} 
          className="final-cta-button"
        >
          Book Strategy Call
        </button>
        <div className="final-cta-contact">
          <p>📧 <a href="mailto:justinkudzinskas5@gmail.com">justinkudzinskas5@gmail.com</a></p>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
