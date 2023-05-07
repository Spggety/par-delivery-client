import "./prodPanel.css";
import "./itemCard/itemCard.css";
import ItemCard from "./itemCard/itemCard";
function ProdPanel(props) {
  return (
    <div id='items' className="tabs__pane showTabs">
      <ItemCard addToBasket={props.addToBasket} lineId={props.lineId} catId={props.catId} addLenta={props.addLenta} products={props.products} endElements={props.endElements} filter={props.filter}/>
    </div>
  );
}

export default ProdPanel;
