import "../components/userPage/myOldOrders/myOldOrders.css";
import "../components/userPage/userPage.css";
let MyOldOrdersNavFormElementCard = (props) => {
  const sumPice = props.content[2] * props.content[3]
  return (
    <div className={`myOldOrdersNavFormElementCard ${props.background}`}>
      <img src={
        props.content[4].length != "0"
        ? 
          `/img/main/cardItem/${props.content[0]}/${props.content[4]}`
        : "/img/main/cardItem/placeholder.png"
      
      } className="png" />
      <div className="infoItem">
        <p className={`infoItemText ${props.textColor}`}>
          {props.content[1]}
        </p>
        <div className="prices">
          <div className="priceAndMultiply">
            <span className={`price${props.textColor}`}>{props.content[2]}</span>
            <span className={`multiply${props.textColor}`}>x{props.content[3]}</span>
          </div>
          <div className={`sumPice ${props.textColor}`}>{sumPice} ₽</div>
        </div>
      </div>
    </div>
  );
};

export default MyOldOrdersNavFormElementCard;

