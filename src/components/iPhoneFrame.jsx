import './iPhoneFrame.css'

function iPhoneFrame({ children }) {
  return (
    <div className="iphone-frame">
      <img src="/iphone png.webp" alt="iPhone frame" className="iphone-frame-image" />
      <div className="iphone-screen">
        {children}
      </div>
    </div>
  )
}

export default iPhoneFrame
