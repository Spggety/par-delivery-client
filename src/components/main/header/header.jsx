import "./header.css";
import "../../../../src/icons/style.css";
import scrollLock from "scroll-lock";
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <div className={`header /headerBurgerContain ${props.line}`}>
      <header className="/burger">
        <button
          className="burgerButtonSwap"
          onClick={() => {
            if (document.getElementsByClassName("/burger").length > 0) {
              scrollLock.disablePageScroll();

              let headBurg = document.getElementsByClassName("/burger");
              headBurg[0].className = "burger";

              let i_CatClose = document.getElementsByClassName("ic_Category");
              i_CatClose[0].className = "ic_Category ic_Close-Square";

              let ic_BagBurgCat = document.getElementsByClassName("ic_Bag");
              ic_BagBurgCat[0].className = "ic_Bag burgerCard";

              let notBurgerLogo =
                document.getElementsByClassName("colorLogoPar");
              notBurgerLogo[0].className = "colorLogoPar notBurgerLogo";

              let blueAndBlack =
                document.getElementsByClassName("whiteLogoPar");
              blueAndBlack[0].className = "whiteLogoPar";

              let header = document.getElementsByClassName("header");
              header[0].className = "header headerBurgerContain";

              let burgerInfoContainNONE = document.getElementsByClassName(
                "burgerInfoContainNONE"
              );
              burgerInfoContainNONE[0].className = "burgerInfoContain";
              let body = document.getElementsByTagName("body");
              body[0].className = "bodyNoScroll";
            } else {
              scrollLock.enablePageScroll();
              let headBurg = document.getElementsByClassName("burger");
              headBurg[0].className = "/burger";
              let i_CatClose =
                document.getElementsByClassName("ic_Close-Square");
              i_CatClose[0].className = "ic_Category";
              let ic_BagBurgCat =
                document.getElementsByClassName("ic_Bag burgerCard");
              ic_BagBurgCat[0].className = "ic_Bag ic_BagHeader";
              let notBurgerLogo =
                document.getElementsByClassName("whiteLogoPar");
              notBurgerLogo[0].className = "whiteLogoPar notBurgerLogo";
              let blueAndBlack =
                document.getElementsByClassName("colorLogoPar");
              blueAndBlack[0].className = "colorLogoPar blueAndBlack";
              let header = document.getElementsByClassName(
                "headerBurgerContain"
              );
              header[0].className = "header";
              let burgerInfoContainNONE =
                document.getElementsByClassName("burgerInfoContain");
              burgerInfoContainNONE[0].className = "burgerInfoContainNONE";
              let body = document.getElementsByTagName("body");
              body[0].className = ``;
            }
          }}
        >
          <i className="ic_Category /ic_Close-Square"></i>
        </button>
        <img
          className="whiteLogoPar notBurgerLogo"
          src="/img/main/header/logoParDeliveryWhite.svg"
        ></img>

        <img
          className="colorLogoPar blueAndBlack"
          src="/img/main/header/logoParDeliveryBlueAndBlack.svg"
        ></img>
        <BasketLink itemNumber={props.itemNumber} link="/basket" />
      </header>
      <BurgerInfo MATH={props.MATH} />
    </div>
  );
}
export const BasketLink = (props) => {
  return (
    <Link to={props.link}>
      <i className="ic_Bag ic_BagHeader /burgerCard"></i>
      {props.itemNumber > 0 ? (
        <span className="itemNumber">{props.itemNumber}</span>
      ) : (
        <></>
      )}
    </Link>
  );
};

const BurgerInfo = (props) => {
  return (
    <div className="burgerInfoContainNONE">
      {props.MATH.map((elemMass) => (
        <BurgerInfoComponents
          key={elemMass[0]}
          nameIcon={elemMass[0]}
          headersText={elemMass[1]}
          paragraphText={elemMass[2]}
          subText={elemMass[3]}
        />
      ))}
    </div>
  );
};

const BurgerInfoComponents = (props) => {
  return (
    <div className="burgerInfoComponent">
      <i className={props.nameIcon}></i>
      <div className="burgerInfoComponentText">
        <h3 className="headersText">{props.headersText}</h3>
        <p className="paragraphText">{props.paragraphText}</p>
        <sub className="subText">{props.subText}</sub>
      </div>
    </div>
  );
};
export default Header;
