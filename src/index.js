import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import state, { addReview, addRefresh, addLenta, addToBasket, addToBasketQuantity, dropToBasketQuantity, setClass } from "./redux/state";
import Basket from "./components/basket/basket";
import axios from "axios";
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <App setClass={setClass} dropToBasketQuantity={dropToBasketQuantity} addToBasketQuantity={addToBasketQuantity} addToBasket={addToBasket} state={state} addLenta={addLenta} addReview={addReview} />
  </React.StrictMode>
)
  let rerenderTree = (state) => {
    root.render(
      <React.StrictMode>
        <App setClass={setClass} dropToBasketQuantity={dropToBasketQuantity} addToBasketQuantity={addToBasketQuantity} addToBasket={addToBasket} state={state} addLenta={addLenta} addReview={addReview} />
      </React.StrictMode>
    )
  };
  addRefresh(rerenderTree);

reportWebVitals();
