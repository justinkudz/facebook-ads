import { useEffect, useRef } from 'react'
import AnimatedGradientText from './AnimatedGradientText'
import ShootingStarLine from './ShootingStarLine'
import './WhoThisIsFor.css'

function WhoThisIsFor() {
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

  const items = {
    works: [
      'A service business with high-ticket offerings',
      'Serving a defined local or regional area',
      'Ready to handle increased enquiry volume',
      'Willing to capture content (photos, videos of your work)'
    ],
    doesntWork: [
      'You\'re just starting with no proven offer',
      'You compete purely on being the cheapest',
      'You want instant results (this is 90 days minimum)',
      'You\'re not willing to improve your sales process'
    ]
  }

  return (
    <section className="who-this-is-for" ref={sectionRef}>
      <div className="who-this-is-for-container">
        <h2 className="section-title">
          <AnimatedGradientText>Is This Right For You?</AnimatedGradientText>
        </h2>
        <ShootingStarLine delay={0.3} />
        
        <div className="who-content">
          <div className="who-section">
            <h3 className="who-section-title">This works if you&apos;re:</h3>
            <div className="who-checklist">
              {items.works.map((item, index) => (
                <div key={index} className="who-checklist-item" style={{ '--delay': `${index * 0.1}s` }}>
                  <span className="check-icon">✓</span>
                  <span className="check-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="who-section">
            <h3 className="who-section-title">This doesn&apos;t work if:</h3>
            <div className="who-checklist">
              {items.doesntWork.map((item, index) => (
                <div key={index} className="who-checklist-item who-checklist-item-negative" style={{ '--delay': `${(items.works.length + index) * 0.1}s` }}>
                  <span className="check-icon">✗</span>
                  <span className="check-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoThisIsFor
