import './ShootingStarLine.css'

function ShootingStarLine({ className = '', delay = 0 }) {
  return (
    <div className={`shooting-star-line ${className}`}>
      {/* Base purple line */}
      <div className="shooting-star-base"></div>
      
      {/* Shooting star effect */}
      <div
        className="shooting-star-main"
        style={{
          '--delay': `${delay}s`,
        }}
      />
      
      {/* Glow trail */}
      <div
        className="shooting-star-trail"
        style={{
          '--delay': `${delay + 0.1}s`,
        }}
      />
    </div>
  )
}

export default ShootingStarLine

