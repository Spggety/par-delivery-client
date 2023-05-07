import "./myOldOrders.css";
import "../userPage.css";
import NavForm from "../navForm/navForm";
import { Link, NavLink } from "react-router-dom";
import MyOldOrdersNavFormElementCard from "../../MyOldOrdersNavFormElementCard";
import { useEffect, useState } from "react";

function MyOldOrders(props) {
  const MATH_OrdersNavPanel = [
    ["Все", "all"],
    ["Активные", "active"],
    ["Завершённые", "old"],
  ];
  return (
    <div className="userPage">
      <div className="hr"></div>
      <MyOldOrdersNavPanel MATH={MATH_OrdersNavPanel}/>
      <div className="userPageContain">
        <NavForm Content={<div className="scroll"><MyOldOrdersNavFormCard /><MyOldOrdersNavFormCard /></div>} />
      </div>
    </div>
  );
}

const MyOldOrdersNavPanel = (props) => {
  
  return (
    <div className="MyOldOrdersNavPanel">
      {props.MATH.map((elemMass) => (
        <NavLink key={elemMass[1]} className={`MyOldOrdersNavPanelElem`} to={elemMass[1]}>
          {elemMass[0]}
        </NavLink>
      ))}
    </div>
  );
};

const MyOldOrdersNavFormCard = (props) => {

  const [arhive, setArhive] = useState(null)
  useEffect(() => {
    setArhive(
      // props.state.arhive
      )

  }, [])
    return () => {
      <div className="myOldOrdersNavFormCard">
      <div className="head">
        <h4 className="number">Заказ #123321</h4>
        <div className="date">Август 29, 2023</div>
      </div>
      {
      props.arhive.map((elemMass) => (
          <MyOldOrdersNavFormElementCard
            background="blueBack"
            textColor="colWhite"
            content={elemMass}
          />))}
      <div className="foot">
        <div className="allSum">999₽</div>
        <Link className="reOrder" to="/">
          Повторить
        </Link>
      </div>
    </div>
    }
  
  

};


export default MyOldOrders;
