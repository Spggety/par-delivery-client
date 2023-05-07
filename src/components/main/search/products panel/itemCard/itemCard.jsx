import "./itemCard.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { renderItemNumber } from "../../../../../redux/state";
let ItemCard = (props) => {
  let elements = [];
  let PathNameFilter = (el) => {
    el.pathName.startsWith(`Ассортимент по категориям${props.filter}`) ==
    true ? (
      elements.push(el)
    ) : (
      <></>
    );
  };

  props.products.map((elemMass) => PathNameFilter(elemMass));
  return (
    <Sliser
    addToBasket={props.addToBasket}
      lineId={props.lineId}
      catId={props.catId}
      addLenta={props.addLenta}
      startElements={props.startElements}
      endElements={props.endElements}
      elements={elements}
    />
  );
};
let i = 0;
let Sliser = (props) => {
  let addToBasket =(id,namePos,price,namePhoto)=>{
    props.addToBasket(id,namePos,price,1,namePhoto)
    renderItemNumber()
  }

  let addPage = () => {
    let endElementAdd = 20 + i;
    i = endElementAdd;
    props.addLenta(props.lineId, props.catId, endElementAdd);
  };
  let elements = props.elements;
  let endElements = props.endElements;
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      addPage();
    }
  }, [inView]);
  return (
    <>
      {elements.slice(0, endElements).map((elemMass) => (
        <div ref={ref} key={elemMass.id} className="itemCard">
          <img loading="lazy"
            src={
              elemMass.images.rows.length != "0"
                ? //elemMass.images.rows[0].miniature.downloadHref
                  `/img/main/cardItem/${elemMass.id}/${elemMass.images.rows[0].filename}`
                : "/img/main/cardItem/placeholder.png"
            }
          />
          <p className="labelNomination">{elemMass.name} </p>
          <div className="order">
            <div className="info">
              <span className="labelPrise">
                {elemMass.salePrices[0].value / 100} ₽
              </span>
              <Quantity value={elemMass.stock} />
            </div>
            <button onClick={()=>{addToBasket(elemMass.id,elemMass.name,elemMass.salePrices[0].value / 100,
            (elemMass.images.rows.length != "0" ?  elemMass.images.rows[0].filename : "" ))}} className="addToCart">
              В корзину
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

const Quantity = (props) => {
  if (props.value <= 2) {
    return <span className="quantity pink">Мало</span>;
  } else if (props.value <= 5 && props.value > 2) {
    return <span className="quantity blue">Хватает</span>;
  } else {
    return <span className="quantity">Много</span>;
  }
};

export default ItemCard;
