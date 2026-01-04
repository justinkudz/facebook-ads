import { useEffect, useRef } from 'react'
import AnimatedGradientText from './AnimatedGradientText'
import ShootingStarLine from './ShootingStarLine'
import './Guarantee.css'

function Guarantee() {
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
    <section className="guarantee" ref={sectionRef}>
      <div className="guarantee-container">
        <h2 className="section-title">
          <AnimatedGradientText>Our Guarantee</AnimatedGradientText>
        </h2>
        <ShootingStarLine delay={0.3} />
        <div className="guarantee-box">
          <p className="guarantee-text">
            We guarantee a specific number of qualified enquiries within 90 days, or you get 50% back.
          </p>
          <p className="guarantee-text">
            Qualified means:
          </p>
          <ul className="guarantee-list">
            <li>
              <span className="guarantee-check">✓</span>
              Saw your pricing
            </li>
            <li>
              <span className="guarantee-check">✓</span>
              Has realistic timeline
            </li>
            <li>
              <span className="guarantee-check">✓</span>
              In your service area
            </li>
            <li>
              <span className="guarantee-check">✓</span>
              Took action (booked, called, or engaged)
            </li>
          </ul>
          <p className="guarantee-text">
            We guarantee opportunities, not closed sales. Converting leads is a partnership - we bring them to the door with the tools to close them.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Guarantee
