import React from "react";
import Wrapper from "../../hoc/Wrapper";
import "./Card.scss";
import riverBirdge from '../../assets/images/river-and-bridge.jpg'
import {
  Link
} from 'react-router-dom';
const card = props => (
  <Wrapper>
    <div className="card">
      <img src={riverBirdge} alt="" className="card__img" />
      <h4 className="card__title">{props.title}</h4>
      <div className="card__content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit placeat ab
        maxime neque iure error similique ducimus quisquam, commodi facere esse
        ex eum delectus nesciunt. Odio, cupiditate? Enim, voluptas corporis!
      </div>
      <button className="btn card__button"><Link to="/messages">{props.action}</Link></button>
    </div>
  </Wrapper>
);
export default card;
