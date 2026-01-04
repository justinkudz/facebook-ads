import { useEffect, useRef } from 'react'
import AnimatedGradientText from './AnimatedGradientText'
import ShootingStarLine from './ShootingStarLine'
import './Investment.css'

function Investment() {
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
    <section className="investment" ref={sectionRef}>
      <div className="investment-container">
        <h2 className="section-title">
          <AnimatedGradientText>What It Costs</AnimatedGradientText>
        </h2>
        <ShootingStarLine delay={0.3} />
        
        <div className="investment-content">
          <div className="investment-text">
            <p>
              Every business is different, so investment is tailored to your goals, market, and capacity.
            </p>
            <p>
              We focus on making the numbers work - if you can&apos;t see clear ROI, we won&apos;t take you on.
            </p>
            <p>
              Typical investment ranges: Monthly retainer + ad spend scaled to your business size and results targets
            </p>
            <p>
              On a strategy call, we&apos;ll:
            </p>
            <ul className="investment-list">
              <li>Analyze your market and competitors</li>
              <li>Calculate realistic lead volume and costs</li>
              <li>Show you exactly what ROI looks like for your business</li>
              <li>Build a custom proposal if we&apos;re a fit</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Investment
