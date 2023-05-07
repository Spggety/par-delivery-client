import { scroller } from "react-scroll";
import ProdPanel from "../../search/products panel/prodPanel";
import "./tabs.css";
import Category from "./tabsButtons/category";
import {
  Link,
  NavLink,
  Navigate,
  Route,
  Routes,
  useMatch,
} from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch({
    path: "/main/" + to.split("/")[0] + "/*",
    end: to.split("/")[0] === window.location.pathname.split("/")[2],
  });
  return (
    <Link
      to={to}
      className={match ? "tabs__btn active" : "tabs__btn"}
      {...props}
    >
      {children}
    </Link>
  );
};

const Tabs = (props) => {
  let MATH_TABS = props.MATH_TABS;

  return (
    <>
      <div className="tabs__nav">
        <div className="global">
          {MATH_TABS.map((elemMass) => (
            <div key={elemMass.id}>
              <CustomLink
                onClick={() => scroller.scrollTo("search")}
                to={`${elemMass.link}/${elemMass.MATH[0].link}`}
              >
                <span className="icoTab" id={elemMass.nameTab}></span>
                {elemMass.nameTab}
              </CustomLink>
              <div>
                <Routes>
                  <Route
                    path={`${elemMass.link}/*`}
                    element={<Category MATH={elemMass.MATH} />}
                  />
                </Routes>
              </div>
            </div>
          ))}
        </div>
      </div>
      {MATH_TABS.map((elemMass) => (
        <Panel
          key={elemMass.id}
          addToBasket={props.addToBasket}
          lineId={elemMass.id}
          addLenta={props.addLenta}
          products={props.products}
          MATH={elemMass}
        />
      ))}
    </>
  );
};

export const Panel = (props) => {
  const MATH = props.MATH.MATH;
  const categories = props.MATH.link;
  let products = props.products;
  return (
    <Routes>
      {MATH.map((elemMass) => (
        <Route
          key={elemMass.id}
          path={`${categories}/${elemMass.link}`}
          element={
            <ProdPanel
              addToBasket={props.addToBasket}
              lineId={props.lineId}
              catId={elemMass.id}
              addLenta={props.addLenta}
              endElements={elemMass.endElements}
              filter={elemMass.filter}
              products={products}
            />
          }
        />
      ))}
    </Routes>
  );
};
export default Tabs;
