import { useEffect, useRef } from 'react'
import AnimatedGradientText from './AnimatedGradientText'
import './Hero.css'

function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    // Fade in on load
    if (heroRef.current) {
      heroRef.current.classList.add('visible')
    }
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-content">
        <span className="hero-tag">Facebook Ad Templates</span>
        <h1 className="hero-title">
          Ads That Actually <AnimatedGradientText>Convert</AnimatedGradientText><br />
          For <AnimatedGradientText>Landscapers</AnimatedGradientText>
        </h1>
        <p className="hero-subtitle">
          5 <AnimatedGradientText>proven ad formats</AnimatedGradientText> with the psychology <AnimatedGradientText>breakdown</AnimatedGradientText>.<br />
          See exactly why each element works.
        </p>
        <div className="scroll-indicator">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7M5 12l7 7" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
