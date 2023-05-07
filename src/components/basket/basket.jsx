import {
  Link,
  NavLink,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "../../icons/style.css";
import "./basket.css";
import MyOldOrdersNavFormElementCard from "../MyOldOrdersNavFormElementCard";
import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { lenghtMargin, renderItemNumber } from "../../redux/state";
import BasketFree from "./basketFree";




let Basket = (props) => {
  return props.finalPrice === undefined || props.finalPrice === 0 ? (
    <BasketFree />
  ) : (
    <div className="basketContain">
      <Routes>
        <Route
          path="/"
          element={
            <BasketStart
              finalPrice={props.finalPrice}
              setClass={props.setClass}
              dropToBasketQuantity={props.dropToBasketQuantity}
              addToBasketQuantity={props.addToBasketQuantity}
              basket={props.basket}
            />
          }
        />
        <Route
          path="/delivery/*"
          element={<BasketDelivery marginHeight={props.marginHeight} finalPrice={props.finalPrice} />}
        />
        <Route path="/delivery/confirm" element={<BasketDeliveryConfirm />} />
      </Routes>
    </div>
  );
};
let BasketStart = (props) => {
  return (
    <>
      <HeaderBasket line="line" title="Вы выбрали:" />

      <ContainItemBasket
        setClass={props.setClass}
        dropToBasketQuantity={props.dropToBasketQuantity}
        addToBasketQuantity={props.addToBasketQuantity}
        basket={props.basket}
      />
      <PromoCode />
      <Total
        finalPrice={props.finalPrice}
        link="delivery/adress/now/transfer"
        title="Далее"
      />
    </>
  );
};

let BasketDelivery = (props) => {
    
  return (
    <>
      <HeaderBasket line="line" title="Доставка:" />
      <Delivery/>
      <div style={{marginBottom: props.marginHeight}}></div>
      <Total
        finalPrice={props.finalPrice}
        link="confirm"
        noneBorder="borderNone"
        none="arrowNone"
        title="Заказать"
      />
    </>
  );
};
let BasketDeliveryConfirm = () => {
  return (
    <>
      <HeaderBasket noPoint="noPoint" title="" />
      <div className="basketDeliveryConfirm">
        <i className="ic_Tick-Square iconConfirm"></i>
        <h3 className="h_Confirm">Ваш заказ принят!</h3>
        <p className="p_Confirm">
          Мы уже начали собирать ваш заказ. Для уточнения данных с вами может
          связаться наш курьер.{" "}
        </p>
        <Link to="/" className="confirmOrder">
          Хорошо
        </Link>
      </div>
    </>
  );
};

export let HeaderBasket = (props) => {
  let setActive = ({ isActive }) =>
    isActive ? "noPoint activeIcoHead" : "noPoint";

  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <header className={`headerBasket ${props.line}`}>
      <div className="headerNav">
        <div className="headerBackBtn">
          <button onClick={goBack} className={`headerButton ${props.noPoint}`}>
            <i className="ic_Arrow---Left-2 basketArrowLeft"></i>
          </button>
        </div>
        <div className="infoRoad">
          <NavLink to="/basket" className={setActive}>
            <i className="ic_Bag basketHead"></i>
          </NavLink>
          <span className="basketHeadLine "></span>
          <NavLink to="/basket/delivery" className={setActive}>
            <i className="ic_Location basketHead"></i>
          </NavLink>

          <span className="basketHeadLine"></span>
          <NavLink to="/basket/delivery/confirm" className={setActive}>
            <i className="ic_Tick-Square basketHead"></i>
          </NavLink>
        </div>
      </div>
      <h3 className="headerTitle">{props.title}</h3>
    </header>
  );
};
let ContainItemBasket = (props) => {
  let addQuantity = (content, index) => {
    let conten = content[3] + 1;
    props.addToBasketQuantity(index, conten);
    if (conten == 1) {
      props.setClass(conten, index);
    } else if (conten == 0) {
      props.setClass(conten, index);
      props.dropToBasketQuantity(index, conten);
    } else {
      props.setClass(0, index);
    }
    renderItemNumber();
  };
  let delite = React.createRef();
  let dropQuantity = (content, index) => {
    let conten = content[3] - 1;
    props.addToBasketQuantity(index, conten);
    if (conten == 1) {
      props.setClass(conten, index);
    } else if (conten == 0) {
      props.setClass(0, index);
      props.dropToBasketQuantity(index, conten);
    } else {
      props.setClass(0, index);
    }
    renderItemNumber();
  };

  return (
    <>
      {props.basket.map((elemMass, index) => (
        <div key={index} className="containItemBasket">
          <MyOldOrdersNavFormElementCard
            background="blueBack"
            textColor="colWhite"
            content={elemMass}
          />

          <div className="selector">
            <button
              onClick={() => addQuantity(elemMass, index)}
              className="selectorBtn"
            >
              <i className={`selectorBasketIco ic_Arrow---Up-2 `}></i>
            </button>
            <span className="selectorNumber">{elemMass[3]}</span>
            <button
              onClick={() => dropQuantity(elemMass, index)}
              className="selectorBtn"
            >
              <i
                ref={delite}
                className={`${elemMass[5]} selectorBasketIco`}
              ></i>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
let PromoCode = () => {
  return (
    <div className="promoCode">
      <div className="promoCodeIcoInput">
        <i className="ic_Ticket promoLabelBasket"></i>
        <input type="text" placeholder="Есть промокод?"></input>
      </div>
      <button className="promoCodeAdd">
        <i className="ic_Arrow---Right-2 basketArrowRight"></i>
      </button>
    </div>
  );
};
let Total = (props) => {
  return (
    <div className={`totalContain`}>
      <div className={`total ${props.noneBorder}`}>
        <p className={`totalText ${props.none}`}>
          Бесплатная доставка по городу от 600₽
        </p>
        <TotalConfirm
          finalPrice={props.finalPrice}
          link={props.link}
          none={props.none}
          title={props.title}
        />
      </div>
    </div>
  );
};

let TotalConfirm = (props) => {
  return (
    <div className="totalConfirm">
      <div>
        <span className="totalLabel">Итого:</span>
        <span className="totalPrice">{props.finalPrice} ₽</span>
      </div>
      <Link to={props.link} className="nextFormBtn">
        <span className="nextTextFormBtn">{props.title}</span>
        <span className={`lineArrow ${props.none}`}></span>
        <i className={`ic_Arrow---Right-2 basket ${props.none}`}></i>
      </Link>
    </div>
  );
};

let Delivery = (props) => {
  let setActive = ({ isActive }) => (isActive ? "activeSl slide" : "slide");
  return (
    <div>
      <div className="compCont slider">
        <NavLink className={setActive} to="adress">
          Доставка на адрес
        </NavLink>
        <NavLink className={setActive} to="pickup">
          Забрать самому
        </NavLink>
      </div>
      <Routes>
        <Route path="adress/*" element={<AdressDelivery />}></Route>
        <Route path="pickup/*" element={<Pickup />}></Route>
      </Routes>
    </div>
  );
};

let AdressDelivery = (props) => {
  let setActive = ({ isActive }) => (isActive ? "activeSl slide" : "slide");

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);
  const inputRef6 = useRef(null);
  const inputRef7 = useRef(null);
  const inputRef71 = useRef(null);
  const inputRef72 = useRef(null);
  const inputRef73 = useRef(null);
  const inputRef8 = useRef(null);
  
  const handleKeyPressInputRef2 = (event) => handleKeyPress(event, inputRef2),
  handleKeyPressInputRef3 = (event) => handleKeyPress(event, inputRef3),
  handleKeyPressInputRef4 = (event) => handleKeyPress(event, inputRef4),
  handleKeyPressInputRef5 = (event) => handleKeyPress(event, inputRef5),
  handleKeyPressInputRef6 = (event) => handleKeyPress(event, inputRef6),
  handleKeyPressInputRef7 = (event) => handleKeyPress(event, inputRef7),
  handleKeyPressInputRef72 = (event) => handleKeyPress(event, inputRef72)

  const handleKeyPress = (event, inputRefNext) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      inputRefNext.current.focus();
      console.log(event)
    }
  };
  
  return (
    <div>
      <input
      ref={inputRef1} 
      onKeyUp={handleKeyPressInputRef2}
      enterKeyHint='next'
        onFocus={lenghtMargin}
        onBlurCapture={lenghtMargin}
        className="compCont"
        placeholder="Например: улица Дымная, 15 "
      ></input>
      <input  
      ref={inputRef2} 
      onKeyUp={handleKeyPressInputRef3}
      enterKeyHint="next"
        onFocus={lenghtMargin}
        onBlurCapture={lenghtMargin}
        className="compCont"
        placeholder="№ квартиры / офиса"
      ></input>
      <div className="numAdress">
        <input
        ref={inputRef3} 
        onKeyUp={handleKeyPressInputRef4}
        enterKeyHint='next'
        onFocus={lenghtMargin}
        onBlurCapture={lenghtMargin}
          className="compCont"
          type="number"
          placeholder="Подъезд"
        ></input>
        <input
        ref={inputRef4} 
        onKeyUp={handleKeyPressInputRef5}
        enterKeyHint='next'
        onFocus={lenghtMargin}
        onBlurCapture={lenghtMargin}
          className="compCont"
          type="number"
          placeholder="Этаж"
        ></input>
      </div>
      <input
      ref={inputRef5} 
      onKeyUp={handleKeyPressInputRef6}
      enterKeyHint='next'
      onFocus={lenghtMargin}
      onBlurCapture={lenghtMargin}
        className="compCont"
        type="number"
        placeholder="Номер телефона "
      ></input>
      <input
      ref={inputRef6} 
      onKeyUp={handleKeyPressInputRef7}
      enterKeyHint='next'
      inputMode='text'
      onFocus={lenghtMargin}
      onBlurCapture={lenghtMargin}
        className="compCont"
        placeholder="Ваше имя"
      ></input>
      <input
      ref={inputRef7} 
      enterKeyHint='next'
      onFocus={lenghtMargin}
      onBlurCapture={lenghtMargin}
        inputMode="numeric"
        className="compCont"
        placeholder="Бонусная карта магазина Пармаркет"
      ></input>
      <div className="compCont slider">
        <NavLink className={setActive} to="now">
          Как можно быстрее
        </NavLink>

        <NavLink className={setActive} to="theTime">
          Ко времени
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="now/transfer" />}></Route>
        <Route path="now/*" element={<Now setActive={setActive} />}></Route>
        <Route
          path="theTime/*"
          element={<TheTime setActive={setActive} />}
        ></Route>
      </Routes>

      <textarea
      enterKeyHint='done'
      onFocus={lenghtMargin}
      onBlurCapture={lenghtMargin}
        inputMode='text'
        className="compCont"
        placeholder="Комментарий курьеру..."
      ></textarea>
    </div>
  );
};
const options = [
  { value: "voskr", label: "Улица Воскресенская, 15" },
  { value: "atrium", label: "Проспект Троицкий, 3, ТЦ Атриум" },
  { value: "timme", label: "Улица Тимме, 12" },
];

let Pickup = (props) => {
  const [selectedOption, setSelectedOption] = useState("voskr");

  const getValue = () => {
    return selectedOption
      ? options.find((o) => o.value === selectedOption)
      : "";
  };

  return (
    <div className="numAdress">
      <Select
        classNamePrefix="select"
        defaultValue={getValue}
        onChange={setSelectedOption}
        options={options}
        isSearchable={false}
      />
    </div>
  );
};
let Now = (props) => {
  return (
    <>
      <Money setActive={props.setActive} />
      <Routes>
        <Route path="cash" element={<Сash />}></Route>
      </Routes>
    </>
  );
};
let Сash = (props) => {
  // let [height, setHeight] = useState();
  // useEffect(() => {
  //   setHeight(window.visualViewport.height);
  // });
  // let TimeOut = () =>{ setTimeout(setHeight, 300, window.visualViewport.height);}
     return (
    <>
      <input
      enterKeyHint='next'
      onFocus={lenghtMargin}
      onBlurCapture={lenghtMargin}
        type="number"
        className="compCont"
        placeholder="Нужна сдача с "
      ></input>
    </>
  );
};
let Money = (props) => {
  return (
    <div className="compCont slider">
      <NavLink className={props.setActive} to="transfer">
        Оплата переводом
      </NavLink>
      <NavLink className={props.setActive} to="cash">
        Оплата наличными
      </NavLink>
    </div>
  );
};
let TheTime = (props) => {let [height, setHeight] = useState();
  return (
    <>
      <div className="numAdress">
        <input enterKeyHint='next'
          onFocus={lenghtMargin}
          onBlurCapture={lenghtMargin}
          type="number"
          className="compCont"
          placeholder="Введите час"
        ></input>
        <span className="time">:</span>
        <input enterKeyHint='next'
          onFocus={lenghtMargin}
          onBlurCapture={lenghtMargin}
          type="number"
          className="compCont"
          placeholder="Введите минуты"
        ></input>
      </div>
      <Money setActive={props.setActive} />
      <Routes>
        <Route path="cash" element={<Сash />}></Route>
      </Routes>
    </>
  );
};
export default Basket;
