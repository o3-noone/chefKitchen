import "./footer.css";
import logo from "./images/logo.svg";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-box">
        <div className="container">
          <div className="footer-list">
            <div className="footer-left1">
              <div className="footer-logo">
                <a href="#">
                  <img src={logo} alt="images" />
                </a>
              </div>
              <div className="footer-link">
                <a href="#">
                  <i class="fa-regular fa-paper-plane"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </div>
              <p>Chef Kitchen 2023</p>
            </div>
            <div className="footer-left2">
              <div className="footer-head">
                <a href="#">Menu</a>
                <a href="#">Delivery</a>
                <a href="#">FAQ</a>
                <a href="#">Contacts</a>
              </div>
              <div className="footer-dec">
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
                <p>Terms and Conditions</p>
              </div>
            </div>
            <div className="footer-link2">
              <div className="footer-links"><i class="fa-solid fa-location-dot"></i><a href="#">Tbilisi, Georgia</a></div>
              <div className="footer-links"><i class="fa-solid fa-phone-volume"></i><a href="#">591902883 (9:00 - 18:00)</a></div>
              <div className="footer-links"><i class="fa-solid fa-envelope-open-text"></i><a href="#">info@chef-kitchen.com</a></div>
              <p>Individual entrepreneur Nikita Mosin</p>
              <p>Identification Number: 302252210</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
