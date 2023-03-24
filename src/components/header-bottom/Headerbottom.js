import React, { Component } from "react";
import "../header-bottom/Headerbottom.css";
import Headericon1 from "../../assets/images/header-icon1.svg";
import Headericon2 from "../../assets/images/header-icon2.svg";
import Headericon3 from "../../assets/images/header-icon3.svg";
import Headericon4 from "../../assets/images/header-icon4.svg";

export default class Headerbottom extends Component {
  render() {
    return (
      <section id="header-bottom">
        <div class="container">
          <div class="header-bottom">
            <div class="header__bottom-content">
              <h1>Product was Built Specifically for You</h1>
            </div>
            <div class="header__bottom-rows">
              <div class="header__bottom-row">
                <img src={Headericon1} alt="" />
                <h3>First click tests</h3>
                <p>While most people enjoy casino gambling,</p>
              </div>
              <div class="header__bottom-row">
                <img src={Headericon2} alt="" />
                <h3>Design surveys</h3>
                <p>Sports betting, lottery and bingo playing for the fun</p>
              </div>
              <div class="header__bottom-row">
                <img src={Headericon3} alt="" />
                <h3>Preference tests</h3>
                <p>The Myspace page defines the individual.</p>
              </div>
              <div class="header__bottom-row">
                <img src={Headericon4} alt="" />
                <h3>Five second tests</h3>
                <p>
                  Personal choices and the overall personality of the person.
                </p>
              </div>
            </div>
            <div class="header__bottom-btn">
              <a href="#">SIGN UP NOW</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
