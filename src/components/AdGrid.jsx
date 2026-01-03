import { useRef, useEffect, useState } from 'react'
import iPhoneFrame from './iPhoneFrame'
import FacebookAd from './FacebookAd'
import AnimatedGradientText from './AnimatedGradientText'
import ShootingStarLine from './ShootingStarLine'
import { adsData } from '../data/adsData'
import './AdGrid.css'

function AdGrid() {
  const gridRef = useRef(null)

  return (
    <section ref={gridRef} className="ad-grid-section">
      <div className="ad-grid-container">
        {/* Header */}
        <div className="ad-grid-header">
          <h2 className="ad-grid-title">
            <AnimatedGradientText>5 Proven Ad Formats</AnimatedGradientText>
          </h2>
          <ShootingStarLine delay={0.3} />
        </div>

        {/* Grid of Ads */}
        <div className="ad-grid">
          {adsData.map((ad, index) => (
            <AdCard key={ad.id} ad={ad} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AdCard({ ad, index }) {
  const cardRef = useRef(null)
  const phoneRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (cardRef.current) {
              cardRef.current.classList.add('visible')
            }
            if (phoneRef.current) {
              phoneRef.current.classList.add('visible')
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <div ref={cardRef} className="ad-card" data-ad-id={ad.id} style={{ '--index': index }}>
      <div className="ad-card-wrapper">
        {/* Card Header */}
        <div className="ad-card-header">
          <h3 className="ad-card-title">
            <AnimatedGradientText>{ad.title}</AnimatedGradientText>
          </h3>
        </div>

        {/* iPhone with Facebook Ad */}
        <div ref={phoneRef} className="ad-card-phone">
          <iPhoneFrame>
            <FacebookAd ad={ad} />
          </iPhoneFrame>
        </div>
      </div>
    </div>
  )
}

export default AdGrid

