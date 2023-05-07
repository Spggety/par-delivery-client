import { NavLink } from "react-router-dom";
import { scroller } from "react-scroll";
function Category(props) {
  const MATH = props.MATH;

  return (
    <div className="ulCategory line">
      <div className="ulContain">
        {MATH.map((elemMass) => (
            <NavLink
            onClick={()=>scroller.scrollTo('search')}
              className="liCategory"
              key={elemMass.link}
              to={elemMass.link}
            >
              {elemMass.name}
            </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Category;
