import "./main.css";
import Banner from "./banner/banner";
import SearchTable from "./search/search";
import TabsContain from "./navigation/tabsContain";
import ArrowToTop from "./navigation/navGlobal/arrowToTop";
import Header from "./header/header";

function Main(props) {
  return (<><Header itemNumber={props.state.itemNumber} MATH={props.state.MASS_BURGERINFO} basket={props.state.basket}/>
    <div className="main">
      <ArrowToTop/>
      <Banner />
      <SearchTable />
      <TabsContain
      addToBasket={props.addToBasket}
        MATH_TABS={props.MATH_TABS}
        addLenta={props.addLenta}
        MATH={props.MATH}
        products={props.products}
      />
    </div></>
  );
}

export default Main;
