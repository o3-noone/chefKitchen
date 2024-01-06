import "./deliver.css";
import img1 from "./images/icon1.svg"
import img2 from "./images/icon2.svg"
import img3 from "./images/icon3.svg"
import img4 from "./images/icon4.svg"
import img5 from "./images/icon5.svg"
function Delivery() {
  return (
    <div className="container">
      <div className="deliver">
        <div className="deliver-title">
          <h3>Delivery areas</h3>
        </div>
        <div className="deliver-search">
          <input type="search" placeholder="Enter your address" />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="deliver-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.567353499282!2d66.9756119949503!3d39.65523168081849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d18b7c2e59337%3A0x532c8e039ecc92af!2z0J_Qu9C-0YnQsNC00YwgItCg0LXQs9C40YHRgtCw0L0i!5e0!3m2!1sru!2s!4v1704540388008!5m2!1sru!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="advantages">
        <div className="advantages-title">
            <h3>Our advantages</h3>
        </div>
        <div className="advantages-list">
            <div className="advantages-item">
               <div className="advantages-img">
               <img src={img1} alt="icon" />    
               </div>
               <h4>We'll deliver <br />it free of charge</h4>
               <p>In a convenient 2-hour interval</p>
            </div>
            <div className="advantages-item">
               <div className="advantages-img">
               <img src={img2} alt="icon" />    
               </div>
               <h4>We'll deliver <br />it free of charge</h4>
               <p>In a convenient 2-hour interval</p>
            </div>
            <div className="advantages-item">
               <div className="advantages-img">
               <img src={img5   } alt="icon" />    
               </div>
               <h4>We'll deliver <br />it free of charge</h4>
               <p>In a convenient 2-hour interval</p>
            </div>
            <div className="advantages-item">
               <div className="advantages-img">
               <img src={img4} alt="icon" />    
               </div>
               <h4>We'll deliver <br />it free of charge</h4>
               <p>In a convenient 2-hour interval</p>
            </div>
            <div className="advantages-item">
               <div className="advantages-img">
               <img src={img3} alt="icon" />    
               </div>
               <h4>We'll deliver <br />it free of charge</h4>
               <p>In a convenient 2-hour interval</p>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Delivery;
