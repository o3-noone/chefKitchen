import "./header.css";
import logo from "./images/logo.svg";
function Header() {
  return (
    <div className="container">
      <div className="header">
       
        <div className="header-logo">
          <a href="#"><img src={logo} alt="logo" /></a>
        </div>
        <div className="header-list">
          <div className="header-item"><a href="#">Menu</a></div>
          <div className="header-item"><a href="#">Delivery</a></div>
          <div className="header-item"><a href="#">FAQ</a></div>
          <div className="header-item"><a href="#">Contacts</a></div>
        </div>
        <div className="header-link">
          <div className="hl-item">
            <a href="tel:591 902 883"><i class="fa-solid fa-phone"></i>591 902 883</a>
          </div>
          <div className="hl-item">
            <select name="language" id="">
              <option value="EN">EN</option>
              <option value="UZ">UZ</option>
            </select>
          </div>
          <div className="hl-item">
            <a href="#"><i class="fa-regular fa-user"></i>sign in</a>
          </div>
          <div className="h-burger">
        <i class="fa-solid fa-bars-staggered"></i>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
