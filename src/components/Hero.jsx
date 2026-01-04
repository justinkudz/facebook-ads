import { useEffect, useRef } from 'react'
import AnimatedGradientText from './AnimatedGradientText'
import './Hero.css'

function Hero({ onOpenBooking }) {
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
        <h1 className="hero-title">
          We Build The Bridge Between<br />
          <AnimatedGradientText>Finding Customers and Closing Them</AnimatedGradientText>
        </h1>
        
        <p className="hero-subtitle">
          Most agencies generate leads and disappear. We build the complete system from first click to final sale.
        </p>
        
        <p className="hero-description">
          Custom lead generation and sales systems for service businesses. No templates. Just results.
        </p>
        
        {/* Headshot - centered below text */}
        {/* TO REPLACE PHOTO: Change the src below to your image path (e.g., "/images/your-photo.jpg" or a full URL) */}
        <div className="hero-headshot">
          <div className="headshot-circle">
            <img 
              src="/headshot.jpg.png" 
              alt="Justin" 
              className="headshot-image" 
              onError={(e) => { 
                e.target.style.display = 'none'; 
                if (e.target.nextSibling) {
                  e.target.nextSibling.style.display = 'flex'; 
                }
              }} 
            />
            <div className="headshot-fallback" style={{ display: 'none' }}>JK</div>
          </div>
        </div>
        
        <button 
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            if (onOpenBooking) {
              onOpenBooking()
            }
          }} 
          className="hero-cta-button"
        >
          See If We&apos;re A Fit
        </button>
      </div>
    </section>
  )
}

export default Hero
