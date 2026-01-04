import { useEffect, useRef, useState } from 'react'
import AnimatedGradientText from './AnimatedGradientText'
import './Header.css'

function Header({ onOpenBooking }) {
  const headerRef = useRef(null)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.classList.add('visible')
    }

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`} ref={headerRef}>
      <div className="header-container">
        <div className="header-logo">
          <AnimatedGradientText>KUDZ Media</AnimatedGradientText>
        </div>
        <button 
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            if (onOpenBooking) {
              onOpenBooking()
            }
          }} 
          className="header-cta-button"
        >
          Book Call
        </button>
      </div>
    </header>
  )
}

export default Header
