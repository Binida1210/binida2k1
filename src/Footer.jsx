export default function Footer () {
    return(
        <div className="footer-section">
            <div className="footer-flex">
                <p className="cp">© 2025 Little Lemon</p>

                <div className="social-link-list">
                <a href="#" className="social-link">
                    <i className="fa-brands fa-facebook"></i>
                </a>

                <a href="#" className="social-link">
                    <i className="fa-brands fa-instagram"></i>
                </a>

                <a href="#" className="social-link">
                    <i className="fa-brands fa-x-twitter"></i>
                </a>
                </div>

                <p className="policy-text">
                Privacy Policy
                <span className="separator"> • </span>
                Refund Policy
                </p>
            </div>
        </div>
    )
}