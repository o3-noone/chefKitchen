import "./question.css";
import img from "./images/4336.png";
import img2 from "./images/3387.png";
function Question() {
  return (
    <div className="container">
      <div className="FAQ">
        <div className="FAQ-title">
          <h3>FAQ</h3>
        </div>
        <div className="FAQ-list">
          <div className="FAQ-item FAQ-itemActive">
            <i class="fa-solid fa-sack-dollar"></i>
            <p>Cashback</p>
          </div>
          <div className="FAQ-item FAQ-itemDeActive">
            <i class="fa-solid fa-scale-balanced"></i>
            <p>Weight loss</p>
          </div>
          <div className="FAQ-item FAQ-itemDeActive">
            <i class="fa-solid fa-apple-whole"></i>
            <p>Products</p>
          </div>
          <div className="FAQ-item FAQ-itemDeActive">
            <i class="fa-solid fa-receipt"></i>
            <p>Rates</p>
          </div>
          <div className="FAQ-item FAQ-itemDeActive">
            <i class="fa-solid fa-file-invoice-dollar"></i>
            <p>Payment </p>
          </div>
          <div className="FAQ-item FAQ-itemDeActive">
            <i class="fa-solid fa-jar-wheat"></i>
            <p>Storage</p>
          </div>
        </div>
        <div className="FAQ-box">
          <div className="FAQ-box-item">
            <h4 className="box-h4">What is cashback?</h4>
            <p className="box-p">
              Make orders, take part in promotions, recommend us to friends or
              connect a family tariff. We will refund up to 50% of the order
              value.
            </p>
          </div>
          <div className="FAQ-box-item">
            <h4 className="box-h4">How to get cashback?</h4>
            <p className="box-p">
              Make orders, take part in promotions, recommend us to friends or
              connect a family tariff. We will refund up to 50% of the order
              value.
            </p>
          </div>
          <div className="FAQ-box-item">
            <h4 className="box-h4">
              Why can I only spend part of the cashback?
            </h4>
            <p className="box-p">
              Make orders, take part in promotions, recommend us to friends or
              connect a family tariff. We will refund up to 50% of the order
              value.
            </p>
          </div>
          <div className="FAQ-box-item">
            <h4 className="box-h4">
              Where can I see how many bonus rubles I have in my account?
            </h4>
            <p className="box-p">
              Make orders, take part in promotions, recommend us to friends or
              connect a family tariff. We will refund up to 50% of the order
              value.
            </p>
          </div>
          <div className="FAQ-box-item">
            <h4 className="box-h4">What can I spend cashback on?</h4>
            <p className="box-p">
              Make orders, take part in promotions, recommend us to friends or
              connect a family tariff. We will refund up to 50% of the order
              value.
            </p>
          </div>
        </div>
        <div className="section">
          <div className="sec-left">
            <div className="sec-leftImg">
              <img src={img} alt="images" />
            </div>
          </div>
          <div className="sec-right">
            <div className="sec-right1">
              <h3>LET'S GET IN TOUCH</h3>
              <p>Make orders, take part in promotions, recommend us to friends or connect </p>
            </div>
            <div className="sec-right2">
                <img src={img2} alt="images" />
                <input id="nameRight" type="text" placeholder="Your name" />
                <input type="tell" name="" id="numberRight" placeholder="Your phone number" />
                <input type="email" name="" id="emailRight" placeholder="Your E-mail"/>
                <button id="btn1Right">Make your choise</button>
                <button id="btn2Right"><i class="fa-regular fa-paper-plane"></i><p id="textBtn">Telegram</p></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Question;
