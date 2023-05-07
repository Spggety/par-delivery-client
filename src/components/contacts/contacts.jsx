import React from "react";
import "./contacts.css";
import Header from "../main/header/header";

let Contacts = (props) => {
  
  
  
  let newReviewElement = React.createRef();

  let addReviewBt = () => {
    let text = newReviewElement.current.value;
    props.addReview(text);
    newReviewElement.current.value = "";
  };

  let onReviewChange = () => {
    let text = newReviewElement.current.value;

    console.log(text);
  };




  return (<><Header line='line' itemNumber={props.state.itemNumber} MATH={props.state.MASS_BURGERINFO} basket={props.state.basket} />
    <div className="contacts">
      <div className="contactsContain">
        <h3 className="contactsHeader">Наши контакты:</h3>
        {props.MATH.map((elemMass) => (
          <FormContact
            key={elemMass[1]}
            ic_Name={elemMass[0]}
            a_Title={elemMass[1]}
            a_Href={elemMass[2]}
          />
        ))}
      </div>
      <div className="hr_down"></div>
      <div className="contactsContain">
        <div className="formFeedback">
          <textarea
            onChange={onReviewChange}
            ref={newReviewElement}
            className="textareaContacts"
            id=""
            cols="40"
            rows="6"
            placeholder="Тут вы можете оставить отзыв о нашей работе"
          ></textarea>
          <button onClick={addReviewBt} className="addFeedback">
            Отправить
          </button>
        </div>
        <div className="tester"></div>
      </div>
    </div></>
  );
};

const FormContact = (props) => {
  return (
    <div className={`formContact`}>
      <a href={props.a_Href} className={`resurcesLinkIco`}>
        <i className={`iconContact ${props.ic_Name}`}></i>
      </a>
      <a href={props.a_Href} className={`resurcesLink`}>
        {props.a_Title}
      </a>
    </div>
  );
};

export default Contacts;
