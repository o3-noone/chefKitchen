import "./menu.css";
import img from "./images/3387.png";
import img2 from "./images/as.png";
import img3 from "./images/3386.png";
import icon1 from "./images/icon1.svg";
import icon2 from "./images/icon2.svg";
import icon3 from "./images/icon3.svg";
function Menu() {
  return (
    <div className="container">
      <div className="Menu-box">
        <div className="menu-title">our menu</div>
        <div className="menu-btns">
          <div className="menu-btn mBactive">
            <p>Power</p>
            <p>1800 kcal</p>
          </div>
          <div className="menu-btn mBdeActive ">
            <p>Slim</p>
            <p>1500 kcal</p>
          </div>
          <div className="menu-btn mBdeActive">
            <p>Balance</p>
            <p>1300 kcal</p>
          </div>
          <div className="menu-btn mBdeActive">
            <p>Slim</p>
            <p>1500 kcal</p>
          </div>
          <div className="menu-btn mBdeActive">
            <p>Balance</p>
            <p>1300 kcal</p>
          </div>
          <div className="menu-btn mBdeActive">
            <p>Slim</p>
            <p>1500 kcal</p>
          </div>
          <div className="menu-btn mBdeActive">
            <p>Balance</p>
            <p>1300 kcal</p>
          </div>
        </div>
        <div className="menu-items">
          <img id="menu-img1" src={img} alt="images" />
          <div className="mBox-btns">
            <div className="mBox-btn mBox-active">Monday</div>
            <div className="mBox-btn">Tuesday</div>
            <div className="mBox-btn">Wednesday</div>
            <div className="mBox-btn">Thursday</div>
            <div className="mBox-btn">Friday</div>
            <div className="mBox-btn">Saturday</div>
            <div className="mBox-btn">Sunday</div>
            <div className="mBox-leftRight">
              <div className="mBox-left">
                <i class="fa-solid fa-arrow-left-long"></i>
              </div>
              <div className="mBox-text">
                <h4>WEEK 1</h4>
                <p>This week</p>
              </div>
              <div className="mBox-right">
                <i class="fa-solid fa-arrow-right-long"></i>
              </div>
            </div>
          </div>
          <div className="mBox-list">
            <div className="mList-left">
              <div className="mList-btn">
                <i class="fa-solid fa-arrow-left-long"></i>
              </div>
            </div>
            <div className="mBox-items">
              <div className="mBox-item">
                {/* <div className="mBox-num">04</div> */}
                <div className="mBox-images">
                  <img src={img2} alt="images" />
                </div>
                <h4>BREAKFAST 2</h4>
                <h5>Chicken fricassee with mushrooms and bulgur</h5>
                <p>Protein - 15 g</p>
                <p>Fat - 7 g</p>
                <p>Carbohydrates - 24 g</p>
                <p>Energy - 285 kсal</p>
                <p>Тotal weight: 345 g</p>
              </div>
              <div className="mBox-item">
                {/* <div className="mBox-num">04</div> */}
                <div className="mBox-images">
                  <img src={img2} alt="images" />
                </div>
                <h4>BREAKFAST 2</h4>
                <h5>Chicken fricassee with mushrooms and bulgur</h5>
                <p>Protein - 15 g</p>
                <p>Fat - 7 g</p>
                <p>Carbohydrates - 24 g</p>
                <p>Energy - 285 kсal</p>
                <p>Тotal weight: 345 g</p>
              </div>
              <div className="mBox-item">
                {/* <div className="mBox-num">04</div> */}
                <div className="mBox-images">
                  <img src={img2} alt="images" />
                </div>
                <h4>BREAKFAST 2</h4>
                <h5>Chicken fricassee with mushrooms and bulgur</h5>
                <p>Protein - 15 g</p>
                <p>Fat - 7 g</p>
                <p>Carbohydrates - 24 g</p>
                <p>Energy - 285 kсal</p>
                <p>Тotal weight: 345 g</p>
              </div>
              <div className="mBox-item">
                {/* <div className="mBox-num">04</div> */}
                <div className="mBox-images">
                  <img src={img2} alt="images" />
                </div>
                <h4>BREAKFAST 2</h4>
                <h5>Chicken fricassee with mushrooms and bulgur</h5>
                <p>Protein - 15 g</p>
                <p>Fat - 7 g</p>
                <p>Carbohydrates - 24 g</p>
                <p>Energy - 285 kсal</p>
                <p>Тotal weight: 345 g</p>
              </div>
              <div className="mBox-item">
                {/* <div className="mBox-num">04</div> */}
                <div className="mBox-images">
                  <img src={img2} alt="images" />
                </div>
                <h4>BREAKFAST 2</h4>
                <h5>Chicken fricassee with mushrooms and bulgur</h5>
                <p>Protein - 15 g</p>
                <p>Fat - 7 g</p>
                <p>Carbohydrates - 24 g</p>
                <p>Energy - 285 kсal</p>
                <p>Тotal weight: 345 g</p>
              </div>
              <div className="mBox-item">
                {/* <div className="mBox-num">04</div> */}
                <div className="mBox-images">
                  <img src={img2} alt="images" />
                </div>
                <h4>BREAKFAST 2</h4>
                <h5>Chicken fricassee with mushrooms and bulgur</h5>
                <p>Protein - 15 g</p>
                <p>Fat - 7 g</p>
                <p>Carbohydrates - 24 g</p>
                <p>Energy - 285 kсal</p>
                <p>Тotal weight: 345 g</p>
              </div>
            </div>
            <div className="mList-right">
              <div className="mList-btn">
                <i class="fa-solid fa-arrow-left-long"></i>
              </div>
            </div>
          </div>
          <div className="menu-items-deck">
            <p>
              A balanced menu helps to maintain health and a slim figure, allows
              you to be cheerful and active throughout the week. While preparing
              our dishes, we use products from the best suppliers and always
              choose products that correspond to the concept of healthy
              nutrition. For example, lean beef, turkey and chicken, low-calorie
              sauces, pasta of hard varieties. Delivery is carried out every 2
              days.
            </p>
          </div>
          <div className="menu-items-total">
            <div className="menu-items-btn1">
              <i class="fa-regular fa-newspaper"></i>
              <div className="mItem-text">
                <p> from 56 gel/day</p>
              </div>
              <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div className="menu-item-total">
              <p>Total on Tuesday: 1435 kcal</p>
            </div>
            <div className="menu-item-numbers">
              <div className="menu-item-number">
                <img src={icon1} alt="icon" />
                <span>
                  <h4>71</h4>
                  <p>Protein</p>
                </span>
              </div>
              <div className="menu-item-number">
                <img src={icon2} alt="icon" />
                <span>
                  <h4>70</h4>
                  <p>Fat</p>
                </span>
              </div>
              <div className="menu-item-number">
                <img src={icon3} alt="icon" />
                <span>
                  <h4>129</h4>
                  <p>Carbohydrates</p>
                </span>
              </div>
            </div>
            <div className="menu-items-btn2">Order now</div>
            <img id="menu-img4" src={img3} alt="images" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Menu;
