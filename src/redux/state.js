import axios from "axios";
//let dataProd;
import data from "../../src/products.json";

    //res.send("ОЧИСТКА JSON");
    //deliteJson('./products.json')

let rerenderTree = () => {
  console.log("Успех");
};
let tg = window.Telegram.WebApp;
let tgView = window.Telegram.WebView.initParams.tgWebAppPlatform;

tg.expand();

let state = {
  MATH_NAVFORM: [
    ["ic_Paper", "Мои заказы", "myOldOrders/all"],
    ["ic_Location", "Мои адреса", "myAdress"],
    ["ic_Paper", "Реферальная программа", "referal"],
  ],
  arrowBtnClassIco: "ic_Arrow---Down-2",
  newArrowBtnClassIco: "ic_Delete",

  webPlatform: tgView,
  userName: tg.initDataUnsafe?.user?.first_name,
  viewportHeight: tg.viewportHeight,
  marginHeight:0,
  itemNumber: 0,
  finalPrice: 0,
  basket: [],
  MATH_BUTTONNAV: [
    ["ic_Home", "/main", "/main/vape/vape"],
    ["ic_Heart ", "/popular", ""],
    ["ic_Call ", "/contacts", ""],
    ["ic_Profile", "/userpage", ""],
  ],

  MASS_BURGERINFO: [
    ["ic_Calendar", "Режим работы:", "Ежедневно с 14:00 до 23:00", ""],
    [
      "ic_Location",
      "Бесплатная доставка при заказе от 600₽",
      "Бесплатная доставка по районам города Архангельска: ",
      "(Октябрьский, Ломоносовский, Привокзальный, Соломбальский, Галушина и Варавино-Фактория)",
    ],
    ["ic_Shield-Done", "Наш продукция исключительно оригинальная", "", ""],
    [
      "ic_Swap",
      "В случае любого производственного брака сделаем замену",
      "",
      "",
    ],
  ],

  MATH_TABS: [
    {
      id: "0",
      nameTab: "vape",
      link: "vape",
      MATH: [
        {
          id: "0",
          name: "Электронки",
          link: "vape",
          filter: "/1. Одноразовые электронные испарители",
          endElements: 20,
        },
        {
          id: "1",
          name: "Жидкости",
          link: "liquids",
          filter: "/2. Жидкости для POD-систем",
          endElements: 20,
        },
        {
          id: "2",
          name: "Pod-ситемы",
          link: "pods",
          filter: "/3. POD-системы/Многоразовые POD-системы",
          endElements: 20,
        },
        {
          id: "3",
          name: `Картриджи\\Испарители`,
          link: "cartrige",
          filter: "/3. POD-системы/Испарители и Картриджи",
          endElements: 20,
        },
      ],
    },

    {
      id: "1",
      nameTab: "hookah",
      link: "hookah",
      MATH: [
        {
          id: "0",
          name: "Табак",
          link: "tobacco",
          filter: "/4. Табачная продукция/Табаки и смеси для кальяна/(м)",
          endElements: 20,
        },
        {
          id: "1",
          name: "Смеси",
          link: "noTobacco",
          filter: "/4. Табачная продукция/Табаки и смеси для кальяна/(н)",
          endElements: 20,
        },
        {
          id: "2",
          name: "Уголь",
          link: "coal",
          filter: "/5. Уголь для кальяна/",
          endElements: 20,
        },
        {
          id: "3",
          name: "Аксессуары",
          link: "accessory",
          filter: "*не выводить*",
          endElements: 20,
        },
        {
          id: "4",
          name: "Аренда кальяна",
          link: "hookahRental",
          filter: "*не выводить*",
          endElements: 20,
        },
      ],
    },

    {
      id: "2",
      nameTab: "snus",
      link: "snus",
      MATH: [
        {
          id: "0",
          name: "Снюс",
          link: "snus",
          filter: "/4. Табачная продукция/Табак жевательный",
          endElements: 20,
        },
        {
          id: "1",
          name: "Снаф",
          link: "snaf",
          filter: "/4. Табачная продукция/Табак нюхательный",
          endElements: 20,
        },
      ],
    },
  ],
  MATH_CONTACTS: [
    ["ic_Calling", "8 (995) 908-52-81", "tel:+79959085281"],
    ["ic_Calling", "Мы в Телеграм", "https://t.me/Par_Delivery_bot"],
    ["ic_Calling", "Мы в Вконтакте", "https://vk.com/par_delivery"],
  ],
  review: [{ reviewText: "Отзыв" }],

  products: data,
};

// console.log(state.products);
export let setClass = (num, index) => {
  if (num === 1) {
    state.basket[index][5] = state.newArrowBtnClassIco;
    rerenderTree(state);
  }
  if (num === 0) {
    state.basket[index][5] = state.arrowBtnClassIco;
    rerenderTree(state);
  }
};
export let addLenta = (lineId, catId, endElementAdd) => {
  state.MATH_TABS[lineId].MATH[catId].endElements = endElementAdd;
  rerenderTree(state);
};

export const addReview = (message) => {
  let newReviewText = {
    reviewText: message,
  };

  state.review.push(newReviewText);
  rerenderTree(state);
};
export let renderItemNumber = () => {
  let x = 0;
  state.itemNumber = state.basket.map((element) => element[3]);
  state.itemNumber = state.itemNumber
    .map((i) => (x += i))
    .reverse()[0];

    let y = 0;
  state.finalPrice = state.basket.map((element) => element[2] * element[3]);
  state.finalPrice = state.finalPrice
    .map((i) => (y += i))
    .reverse()[0];
};

export let addToBasket = (id, namePos, price, quantity, namePhoto) => {
  let basket = [id, namePos, price, quantity, namePhoto, "ic_Delete"];
  if (state.basket.find((el) => el[0] === basket[0]) === undefined) {
    state.basket.push(basket);
  }

  rerenderTree(state);
};
export let addToBasketQuantity = (index, quantity) => {
  state.basket[index][3] = quantity;
  rerenderTree(state);
};

export let dropToBasketQuantity = (index) => {
  state.basket.splice(index, 1);
  rerenderTree(state);
};


export let lenghtMargin = () => {
  if (state.webPlatform === 'ios' && state.viewportHeight <= window.visualViewport.height){
    state.marginHeight = 0
    rerenderTree(state);
  }if ((state.webPlatform === 'ios' && state.viewportHeight > window.visualViewport.height)){
  state.marginHeight = state.viewportHeight - window.visualViewport.height
    rerenderTree(state);
  }
};

export const addRefresh = (observer) => {
  rerenderTree = observer;
};

export const ScrollToTop = () => {
  var scroll = require("react-scroll").animateScroll;
  scroll.scrollToTop();
};
window.state = state;
export default state;
window.basket = state.basket;
