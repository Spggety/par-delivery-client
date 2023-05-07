import Header from "../main/header/header";
import "./userPage.css";

function UserPage(props) {
  return (
    <>
      <Header itemNumber={props.state.itemNumber} MATH={props.state.MASS_BURGERINFO} basket={props.state.basket} line='line'/>
      <div className="userPage">
        <div className="userPageContain">{props.Content}</div>
      </div>
    </>
  );
}

export default UserPage;
