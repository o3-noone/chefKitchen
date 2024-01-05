import "./hero.css";
import img1 from "./images/3387.png"
import img2 from "./images/bgimg.png"
import img3 from "./images/3147.png"
import img4 from "./images/3386.png"
import img5 from "./images/60.png"
function Hero() {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-box">
            <img id="img1" src={img1} alt="img" />
          <div className="hero-left">
            <h3>Your personal cook</h3>
            <p>The balanced diet for every day</p>
            <button>Make your choice</button>
          </div>
          <div className="hero-right">
            <img id="hero-img3" src={img3} alt="img" />
            <img id="hero-img4" src={img4} alt="img" />
            <div className="hero-img">
                <img src={img2} alt="img" />
            </div>
            <img id="hero-img5" src={img5} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
