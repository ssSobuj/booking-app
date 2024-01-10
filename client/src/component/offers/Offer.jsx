import { Link } from "react-router-dom";
import Button from "./../button/Button";
import "./offer.css";

export default function Offer() {
  return (
    <>
      <div className="offer-container">
        <div className="offer-section">
          <div className="offer-title">
            <h1>Offers</h1>
            <p>Promotions, deals and special offers for you</p>
          </div>
          <div className="offer-card">
            <div className="card-1">
              <div className="card-1-part-1">
                <h4>Take your longest holiday yet</h4>
                <p>
                  Browse properties offering long-term stays, many at reduced
                  monthly rates.
                </p>
                <Button
                  type={"submit"}
                  hoverColore={"#00A2C5"}
                  style={{
                    color: "var(--primary-color)",
                    backgroundColor: "var(--secondary-color)",
                    padding: " 10px 50px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "all 0.5s ease-in-out",
                  }}
                >
                  <Link to={"/"}>Find a stay</Link>
                </Button>
              </div>
              <div className="card-1-part-2">
                <img src="./holyday.jpg" alt="" />
              </div>
            </div>

            <div className="card-2">
              <h4>New year, new adventures</h4>
              <p>Save 15% or more when you book and stay before 1 April 2024</p>
              <Button
                type={"submit"}
                hoverColore={"#00A2C5"}
                style={{
                  color: "var(--primary-color)",
                  backgroundColor: "var(--secondary-color)",
                  padding: " 10px 50px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "all 0.5s ease-in-out",
                }}
              >
                <Link to={"/"}>Find Yarly 2024 Deals</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
