import { Link } from "react-router-dom";
import "../../icons/style.css";
import "./basketFree.css";
import { HeaderBasket } from "./basket";
let BasketFree = () => {
  return (
    <div className="basketFreeContain">
<HeaderBasket/>
<div className="basketFree">
  <img className="bug_lose" src='../img/main/freeBasket/Bag.png'></img>
  <h3 className="headerBasketFree">В корзине пока ничего нет</h3>
  <p className="headerBasketParagraph">Но ты можешь это исправить!</p>
  <Link className="headerBasketBtn" to='/'>К покупкам</Link>
</div>
    </div>
  );
};

export default BasketFree;