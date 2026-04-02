import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top */}
        <div className="footer-top">
          <div className="footer-col">
            <h3>SHOP</h3>
            <ul>
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Sale</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>SPORTS</h3>
            <ul>
              <li>Surf</li>
              <li>Skate</li>
              <li>Snow</li>
              <li>BMX</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>SUPPORT</h3>
            <ul>
              <li>Store Locator</li>
              <li>Order Status</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>COMPANY</h3>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>CONTACT</h3>
            <ul>
              <li>Email Us</li>
              <li>Call Us</li>
              <li className="small-text">123 Main St, Example City</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="social">
            <h3>FOLLOW</h3>
            <div className="icons">
              <span><FaFacebook /></span>
              <span><FaInstagram /></span>
              <span><FaTwitter /></span>
              <span><FaYoutube /></span>
            </div>
          </div>

          <div className="subscribe">
            <h3>SUBSCRIBE</h3>
            <div className="input-box">
              <input type="email" placeholder="Email Address" />
              <button>→</button>
            </div>
          </div>
        </div>

        <p className="copyright">© 2026 E-Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;