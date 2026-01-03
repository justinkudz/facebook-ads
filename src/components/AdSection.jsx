import { useRef, useEffect, useState } from 'react'
import iPhoneFrame from './iPhoneFrame'
import FacebookAd from './FacebookAd'
import CalloutBox from './CalloutBox'
import AnimatedGradientText from './AnimatedGradientText'
import ShootingStarLine from './ShootingStarLine'
import './AdSection.css'

function AdSection({ ad, index }) {
  const sectionRef = useRef(null)
  const phoneRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (phoneRef.current) {
              phoneRef.current.classList.add('visible')
            }
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

  if (!ad || !ad.id) {
    return null
  }

  return (
    <section ref={sectionRef} className="ad-section" data-ad-id={ad.id}>
      <div className="ad-section-wrapper">
        {/* Header with animated gradient text and shooting star */}
        <div className="ad-header-section">
          <h2 className="ad-title">
            <AnimatedGradientText>{ad.title || 'Ad'}</AnimatedGradientText>
          </h2>
          <ShootingStarLine delay={0.3} />
        </div>

        <div className="ad-section-container">
          {/* Left Callouts */}
          <div className="callouts-left">
            {ad.callouts && ad.callouts
              .filter(callout => callout.side === 'left')
              .map((callout, idx) => (
                <div key={idx} className="callout-wrapper">
                  <CalloutBox
                    icon={callout.icon}
                    headline={callout.headline}
                    description={callout.description}
                    side="left"
                    delay={idx * 200}
                  />
                </div>
              ))}
          </div>

          {/* iPhone with Facebook Ad */}
          <div ref={phoneRef} className="phone-wrapper fade-in-phone">
            <iPhoneFrame>
              <FacebookAd ad={ad} />
            </iPhoneFrame>
          </div>

          {/* Right Callouts */}
          <div className="callouts-right">
            {ad.callouts && ad.callouts
              .filter(callout => callout.side === 'right')
              .map((callout, idx) => (
                <div key={idx} className="callout-wrapper">
                  <CalloutBox
                    icon={callout.icon}
                    headline={callout.headline}
                    description={callout.description}
                    side="right"
                    delay={idx * 200 + 400}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdSection
