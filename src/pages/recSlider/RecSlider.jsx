import "./RecSlider.css";
import img1 from "./images/3698.png"
import img2 from "./images/1933.png"
function RecSlider() {
  return (
    <div className="rec-slide">
      <div className="recSlide">
        <div className="container">
          <div className="recomend">
            <div className="rec-left">
              <h3>1 day at the price of 23$</h3>
              <p>
                Make orders, take part in promotions, recommend us to friends or
                connect recommend us to friends or connect
              </p>
              <button>Sing up</button>
            </div>
            <div className="rec-right">
                <img id="rec-img2" src={img2} alt="images" />
                <img id="rec-img1" src={img1} alt="images" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RecSlider;
