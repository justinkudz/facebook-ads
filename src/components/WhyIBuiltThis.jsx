import { useEffect, useRef } from 'react'
import AnimatedGradientText from './AnimatedGradientText'
import ShootingStarLine from './ShootingStarLine'
import './WhyIBuiltThis.css'

function WhyIBuiltThis() {
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
    <section className="why-i-built-this" ref={sectionRef}>
      <div className="why-i-built-this-container">
        <h2 className="section-title">
          <AnimatedGradientText>I Know What It&apos;s Like To Get Burned</AnimatedGradientText>
        </h2>
        <ShootingStarLine delay={0.3} />
        
        <div className="why-content">
          <div className="story-text">
            <p>
              A few years ago, I ran a tutoring agency. I spent thousands on lead generation experts who promised everything.
            </p>
            <p>
              They sent garbage. Unqualified leads who ghosted. People just browsing.
            </p>
            <p>
              I paid premium prices and closed maybe 1 in 20.
            </p>
            <p>
              The agency didn&apos;t care. Their job was to drive traffic. What happened after wasn&apos;t their problem.
            </p>
          </div>
          
          {/* Stat box visual break */}
          <div className="story-stat-box">
            <div className="stat-icon">📊</div>
            <div className="stat-text">67% of leads from generic agencies never convert into sales</div>
          </div>
          
          {/* Pull quote */}
          <div className="story-pull-quote">
            <p className="pull-quote-text">
              &quot;The gap between &apos;someone clicked an ad&apos; and &apos;someone paid me money&apos; is where businesses lose.&quot;
            </p>
          </div>
          
          <div className="story-text">
            <p>
              Most agencies focus on the first part. I focus on the entire bridge.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyIBuiltThis
