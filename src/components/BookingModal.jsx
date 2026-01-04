import { useEffect } from 'react'
import './BookingModal.css'

function BookingModal({ isOpen, onClose }) {
  // Load Calendly script when modal opens
  useEffect(() => {
    if (isOpen) {
      // Check if Calendly script is already loaded
      const existingScript = document.querySelector('script[src*="calendly.com"]')
      
      if (!existingScript) {
        const script = document.createElement('script')
        script.src = 'https://assets.calendly.com/assets/external/widget.js'
        script.async = true
        script.type = 'text/javascript'
        document.head.appendChild(script)
      }
      
      // Ensure Calendly widget initializes after script loads
      const initCalendly = () => {
        if (window.Calendly) {
          // Widget should auto-initialize, but we can force it if needed
          const widget = document.querySelector('.calendly-inline-widget')
          if (widget && !widget.querySelector('iframe')) {
            // Widget hasn't loaded yet, give it a moment
            setTimeout(() => {
              if (window.Calendly && window.Calendly.initInlineWidget) {
                window.Calendly.initInlineWidget({
                  url: 'https://calendly.com/justinkudzinskas5/creator-product-strategy-call',
                  parentElement: widget
                })
              }
            }, 500)
          }
        }
      }
      
      // Check if script is already loaded
      if (window.Calendly) {
        initCalendly()
      } else {
        // Wait for script to load
        const checkInterval = setInterval(() => {
          if (window.Calendly) {
            clearInterval(checkInterval)
            initCalendly()
          }
        }, 100)
        
        // Clear interval after 10 seconds
        setTimeout(() => clearInterval(checkInterval), 10000)
      }
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
    } else {
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }
    
    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="booking-modal-overlay" onClick={handleOverlayClick}>
      <div className="booking-modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="booking-modal-close" 
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
        >
          ×
        </button>
        
        <div className="booking-modal-header">
          <h2 className="booking-modal-title">Book Your Strategy Call</h2>
        </div>

        <div className="booking-modal-intro">
          <p>
            30 minutes to analyze your market, identify opportunities, and see if we can genuinely help. No pressure, no pitch - just an honest conversation about what&apos;s possible for your business.
          </p>
        </div>

        <div className="booking-modal-what">
          <h3 className="booking-modal-what-title">What We&apos;ll Cover:</h3>
          <ul className="booking-modal-list">
            <li>How we can help your specific business</li>
            <li>What working together looks like</li>
            <li>Any questions you have about the process</li>
          </ul>
        </div>

        <div className="booking-modal-calendly">
          <div 
            key={isOpen ? 'calendly-widget' : 'calendly-placeholder'}
            className="calendly-inline-widget" 
            data-url="https://calendly.com/justinkudzinskas5/creator-product-strategy-call" 
            style={{ minWidth: '320px', height: '630px', width: '100%', display: 'block' }}
          ></div>
        </div>

        <div className="booking-modal-footer">
          <p className="booking-modal-questions">
            Questions before booking? Email <a href="mailto:justinkudzinskas5@gmail.com">justinkudzinskas5@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default BookingModal

