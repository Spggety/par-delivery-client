import "./userPage.css";


const UserNameHello = (props) => {
    return <h3 className="userPageHeader">Привет, {props.name}</h3>;
  };

  export default UserNameHello;