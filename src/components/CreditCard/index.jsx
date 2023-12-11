import visa from "../../assets/images/visa.png";
import masterCard from "../../assets/images/master-card.svg";
import "./style.css";

export const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  if (type === "Visa") {
    return (
      <div
        className="creditContainer"
        style={{ backgroundColor: bgColor, color: color }}
      >
        <img style={{ width: 50 }} src={visa} alt="" />

        <div className="numContainer">
          <span className="num">
            .... .... .... {number.toString().slice(-4)}
          </span>
        </div>

        <div className="expContainer">
          <span>
            Expires {expirationMonth}/{expirationYear.toString().slice(-2)}
          </span>

          <span className="bank">{bank}</span>
        </div>

        <div className="owner">{owner}</div>
      </div>
    );
  } else if (type === "Master Card") {
    return (
      <div
        className="creditContainer"
        style={{ backgroundColor: bgColor, color: color }}
      >
        <img style={{ width: 50 }} src={masterCard} alt="" />

        <div className="numContainer">
          <span className="num">
            .... .... .... {number.toString().slice(-4)}
          </span>
        </div>

        <div className="expContainer">
          <span>
            Expires {expirationMonth}/{expirationYear.toString().slice(-2)}
          </span>

          <span className="bank">{bank}</span>
        </div>

        <div className="owner">{owner}</div>
      </div>
    );
  }
};
