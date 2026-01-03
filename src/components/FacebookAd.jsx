import './FacebookAd.css'

function FacebookAd({ ad }) {
  const { 
    primaryText, 
    image, 
    imageAlt, 
    ctaHeadline, 
    ctaSubtext, 
    ctaButtonText, 
    ctaColor,
    likes,
    comments,
    shares
  } = ad

  return (
    <div className="facebook-ad">
      {/* Profile Section */}
      <div className="ad-header">
        <div className="ad-profile">
          <div className="profile-pic">
            <span>EL</span>
          </div>
          <div className="profile-info">
            <div className="profile-name">Landscaping Co</div>
            <div className="sponsored-label">Sponsored · 🌐</div>
          </div>
        </div>
        <div className="ad-menu">···</div>
      </div>

      {/* Primary Text */}
      <div className="ad-primary-text" data-target="text">
        {primaryText.split('\n').map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      {/* Image */}
      <div className="ad-image-container" data-target="image">
        <img src={image} alt={imageAlt} className="ad-image" />
      </div>

      {/* Website Link */}
      <div className="ad-website-link">LANDSCAPING.CO.UK</div>

      {/* CTA Section */}
      <div className="ad-cta-section" data-target="cta">
        <div className="cta-headline">{ctaHeadline}</div>
        {ctaSubtext && <div className="cta-subtext">{ctaSubtext}</div>}
        <button 
          className="cta-button" 
          style={{ backgroundColor: ctaColor }}
        >
          {ctaButtonText}
        </button>
      </div>

    </div>
  )
}

export default FacebookAd

