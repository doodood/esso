import React, { Component } from "react";
import Wrapper from "../../hoc/Wrapper";
import "./Home.scss";
import Articles from "../../components/Articles/Articles";
import Feature from "../../components/Feature/Feature";
import Card from "../../components/Card/Card";
import PersonCard from "../../components/PersonCard/PersonCard";
import { heart } from "react-icons-kit/icomoon/heart";
import { home } from "react-icons-kit/icomoon/home";
import { location } from "react-icons-kit/icomoon/location";
import { clubs } from "react-icons-kit/icomoon/clubs";
import { spades } from "react-icons-kit/icomoon/spades";
import { music } from "react-icons-kit/icomoon/music";
class Home extends Component {
  render() {
    return (
      <Wrapper>
        <div className="home">
          <section className="articles-section">
            <Articles></Articles>
          </section>
          <section className="features-section">
            <Feature icon={home} title="Home"></Feature>
            <Feature icon={heart} title="Heart"></Feature>
            <Feature icon={clubs} title="Test 3"></Feature>
            <Feature icon={location} title="Test 4"></Feature>
            <Feature icon={spades} title="Test 5"></Feature>
            <Feature icon={music} title="Music"></Feature>
          </section>
          <section className="persons-section">
            <div className="persons-section__title">
                <h2>The Crew</h2>
            </div>
            <Card action='Click' title='Bob Denver'></Card>
            <Card action='Sky hook' title='Ben Becker'></Card>
            <Card action='River Tacle' title='Tsubasa Ozora'></Card>
            <Card action='Defend' title='Taro Misaki'></Card>
            <Card action='Shoot' title='Don Dood'></Card>
            <PersonCard action='Shoot' title='Don Dood'></PersonCard>
          </section>

          <h3>Home component</h3>
        </div>
      </Wrapper>
    );
  }
}

export default Home;
