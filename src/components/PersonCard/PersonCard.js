import React from "react";
import Wrapper from "../../hoc/Wrapper";
import "./PersonCard.scss";
import riverBirdge from '../../assets/images/river-and-bridge.jpg'
const personCard = props => (
  <Wrapper>
    <div className="person-card">
      <img src={riverBirdge} alt="" className="person-card__img" />
      <h4 className="person-card__title">{props.title}</h4>
      <div className="person-card__content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit placeat ab
        maxime neque iure error similique ducimus quisquam, commodi facere esse
        ex eum delectus nesciunt. Odio, cupiditate? Enim, voluptas corporis!
      </div>
      <button className="btn person-card__button">{props.action}</button>
    </div>
  </Wrapper>
);
export default personCard;
