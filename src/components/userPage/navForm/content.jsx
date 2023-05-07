import "../userPage.css";
import { Link } from "react-router-dom";

const ContentUserPage = (props) => {
  
  return props.MATH.map((elemMass) => (
    <Link key={elemMass[1]} to={`${elemMass[2]}/`} className="userPageNavLink">
      <i className={`userPageIconNav ${elemMass[0]}`}></i>
      <p>{elemMass[1]}</p>
      <i className="userPageIconNavArrow ic_Arrow---Right-2"></i>
      
    </Link>
  ));
};

export default ContentUserPage;
