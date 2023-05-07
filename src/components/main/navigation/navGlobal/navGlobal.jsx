import "./navGlobal.css";
import "../../main.css";
import "../../../../icons/style.css";
import React from "react";
import { NavLink } from "react-router-dom";

function NavGlobal(props) {
  

  return (
    <div className="main">
 
      <div className="navGlobal">
        {props.MATH.map((elemMass) => (
          <NavLink key={elemMass[0]} className={"buttonNav" } to={`${elemMass[1]}`}>
            <i className={`${elemMass[0]} icoSize`}></i>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default NavGlobal;
