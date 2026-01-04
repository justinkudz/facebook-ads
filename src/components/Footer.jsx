import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-copyright">
          © {new Date().getFullYear()} KUDZ Media
        </div>
        <div className="footer-contact">
          <a href="mailto:justinkudzinskas5@gmail.com" className="footer-link">justinkudzinskas5@gmail.com</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

