import { useRef, useEffect } from 'react'
import './CalloutBox.css'

function CalloutBox({ icon, headline, description, side, delay = 0 }) {
  const calloutRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (calloutRef.current) {
      observer.observe(calloutRef.current)
    }

    return () => {
      if (calloutRef.current) {
        observer.unobserve(calloutRef.current)
      }
    }
  }, [delay])

  return (
    <div 
      ref={calloutRef} 
      className={`callout-box callout-${side} fade-in-callout`}
    >
      <div className="callout-icon">{icon}</div>
      <div className="callout-headline">{headline}</div>
      <div className="callout-description">{description}</div>
    </div>
  )
}

export default CalloutBox

