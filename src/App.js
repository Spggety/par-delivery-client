import "./App.css";
import React from "react";
import Main from "./components/main/main";
import Popular from "./components/popular/popular";
import Contacts from "./components/contacts/contacts";

import UserPage from "./components/userPage/userPage.jsx";
import NavForm from "./components/userPage/navForm/navForm";
import ContentUserPage from "./components/userPage/navForm/content";
import MyOldOrders from "./components/userPage/myOldOrders/myOldOrders";
import UserNameHello from "./components/userPage/UserNameHello";
import MyAdress from "./components/userPage/myAdress/myAdress";
import Referal from "./components/userPage/referal/referal";

import NavGlobal from "./components/main/navigation/navGlobal/navGlobal";
import Header from "./components/main/header/header";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import axios from "axios";
import Basket from "./components/basket/basket";
import BasketFree from "./components/basket/basketFree";
import LoadingScreen from "./components/loadingScreen/loadingScreen";
import { useState } from "react";
import { useEffect } from "react";

const App = (props) => {
  
  const [response, setResponse] = useState(null);

  useEffect(() => {
    setResponse(props.state.products);
    //    fetch("http://localhost:3001/api/products.json")
    //      .then(res => res.json())
    //      .then(res => setResponse(res));
  }, []);
  return !response ? (
    <LoadingScreen />
  ) : (
    <BrowserRouter>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Navigate to="main/vape/vape" replace />} />
          <Route path="main/" element={<Navigate to="vape/vape" replace />} />
          <Route
            path="main/*"
            element={
              <Main
                addToBasket={props.addToBasket}
                state={props.state}
                MATH_TABS={props.state.MATH_TABS}
                addLenta={props.addLenta}
                products={response}
              />
            }
          />

          <Route
            path="/Popular/*"
            element={<Popular state={props.state} products={response} />}
          />
          <Route
            path="/Contacts/*"
            element={
              <Contacts
                state={props.state}
                addReview={props.addReview}
                MATH={props.state.MATH_CONTACTS}
              />
            }
          />
          <Route
            path="/UserPage/"
            element={
              <UserPage
                state={props.state}
                Content={
                  <>
                    <UserNameHello name={props.state.userName} />
                    <NavForm
                      Content={
                        <><ContentUserPage MATH={props.state.MATH_NAVFORM} /></>
                      }
                    />
                    
                  </>
                }
              />
            }
          />
          <Route
            path="/UserPage/myOldOrders/*"
            element={
              <>
                <Header
                  itemNumber={props.state.itemNumber}
                  MATH={props.state.MASS_BURGERINFO}
                  basket={props.state.basket}
                />
                <MyOldOrders />
              </>
            }
          />
          <Route
            path="/UserPage/myAdress/"
            element={
              <>
                <Header
                  itemNumber={props.state.itemNumber}
                  MATH={props.state.MASS_BURGERINFO}
                  basket={props.state.basket}
                />
                <MyAdress />
              </>
            }
          />
          <Route
            path="/UserPage/referal/"
            element={
              <>
                <Header
                  itemNumber={props.state.itemNumber}
                  MATH={props.state.MASS_BURGERINFO}
                  basket={props.state.basket}
                />
                <Referal />
              </>
            }
          />

          <Route
            path="/basket/*"
            element={
              <>
                <Basket marginHeight={props.state.marginHeight}
                  finalPrice={props.state.finalPrice}
                  setClass={props.setClass}
                  dropToBasketQuantity={props.dropToBasketQuantity}
                  addToBasketQuantity={props.addToBasketQuantity}
                  basket={props.state.basket}
                />
              </>
            }
          />
        </Routes>
        
        <NavGlobal MATH={props.state.MATH_BUTTONNAV} />
      </div>
      
    </BrowserRouter>
  );
};
export default App;
