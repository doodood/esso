import React, { Component } from "react";
import Wrapper from "../../hoc/Wrapper";
import "./Post.scss";
import Card from "../../components/Card/Card";
import PersonCard from "../../components/PersonCard/PersonCard";
import { heart } from "react-icons-kit/icomoon/heart";
import { home } from "react-icons-kit/icomoon/home";
import { location } from "react-icons-kit/icomoon/location";
import { clubs } from "react-icons-kit/icomoon/clubs";
import { spades } from "react-icons-kit/icomoon/spades";
import { music } from "react-icons-kit/icomoon/music";
import { Link } from "react-router-dom";
import riverBirdge from "../../assets/images/river-and-bridge.jpg";
class Post extends Component {
  render() {
    return (
      <Wrapper>
        <div className="post">
          <div className="post__img">
            <img src={riverBirdge} alt="" />
          </div>
          <section className="post-section">
            <div className="post-section__title">
              <h2>The Post</h2>
              <div className="post-section__links">
              <Link to="/">Home</Link>
              <Link to="/messages">Articles</Link>
              <Link to="/about">About</Link>
              </div>  
            </div>
            <div className="post-section__item">
              <img src={riverBirdge} alt="" />
              <div className="post-section__item-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  ipsa alias et cumque, hic dolores quibusdam velit perspiciatis
                  quisquam fugiat qui modi, deserunt temporibus repellat,
                  dolorum voluptatum itaque illum soluta!
                </p>
              </div>
            </div>
            <div className="post-section__item--reverse">
              <img src={riverBirdge} alt="" />
              <div className="post-section__item-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  ipsa alias et cumque, hic dolores quibusdam velit perspiciatis
                  quisquam fugiat qui modi, deserunt temporibus repellat,
                  dolorum voluptatum itaque illum soluta!
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  ipsa alias et cumque, hic dolores quibusdam velit perspiciatis
                  quisquam fugiat qui modi, deserunt temporibus repellat,
                  dolorum voluptatum itaque illum soluta!
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  ipsa alias et cumque, hic dolores quibusdam velit perspiciatis
                  quisquam fugiat qui modi, deserunt temporibus repellat,
                  dolorum voluptatum itaque illum soluta!
                </p>
              </div>
            </div>
          </section>
        </div>
      </Wrapper>
    );
  }
}

export default Post;
