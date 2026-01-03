import { useEffect, useRef } from 'react'
import './Arrow.css'

function Arrow({ from, to, side, targetElement }) {
  const arrowRef = useRef(null)
  const pathRef = useRef(null)

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength()
      pathRef.current.style.strokeDasharray = length
    }
  }, [])

  // Calculate curved path
  const getPath = () => {
    const midX = (from.x + to.x) / 2
    const midY = (from.y + to.y) / 2
    const curveOffset = 40
    
    if (side === 'left') {
      // Curved path from left callout to phone (right side)
      return `M ${from.x} ${from.y} Q ${midX + curveOffset} ${midY - 30} ${to.x} ${to.y}`
    } else {
      // Curved path from phone (left side) to right callout
      return `M ${from.x} ${from.y} Q ${midX - curveOffset} ${midY - 30} ${to.x} ${to.y}`
    }
  }

  const uniqueId = `arrow-${side}-${Math.random().toString(36).substr(2, 9)}`
  const path = getPath()
  
  // Calculate viewBox
  const minX = Math.min(from.x, to.x) - 50
  const maxX = Math.max(from.x, to.x) + 50
  const minY = Math.min(from.y, to.y) - 50
  const maxY = Math.max(from.y, to.y) + 50
  const width = maxX - minX
  const height = maxY - minY

  return (
    <svg
      ref={arrowRef}
      className="arrow-svg"
      viewBox={`${minX} ${minY} ${width} ${height}`}
      preserveAspectRatio="none"
      style={{
        position: 'absolute',
        left: `${minX}px`,
        top: `${minY}px`,
        width: `${width}px`,
        height: `${height}px`,
        pointerEvents: 'none',
        zIndex: 2,
        overflow: 'visible',
      }}
    >
      <defs>
        <linearGradient id={`arrow-gradient-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" stopOpacity="0" />
          <stop offset="30%" stopColor="transparent" stopOpacity="0" />
          <stop offset="50%" stopColor="white" stopOpacity="1" />
          <stop offset="70%" stopColor="transparent" stopOpacity="0" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          <animateTransform
            attributeName="gradientTransform"
            type="translate"
            values={`${-width} 0; ${width * 2} 0`}
            dur="2s"
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>
      {/* Main arrow path - always visible and thick */}
      <path
        ref={pathRef}
        d={path}
        stroke="#ffffff"
        strokeWidth="4"
        fill="none"
        className="arrow-path"
        style={{
          filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))',
        }}
      />
      {/* Animated gradient overlay for shooting star effect */}
      <path
        d={path}
        stroke={`url(#arrow-gradient-${uniqueId})`}
        strokeWidth="5"
        fill="none"
        className="arrow-shooting-star"
        opacity="0.9"
      />
    </svg>
  )
}

export default Arrow
