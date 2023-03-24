import React, { Component } from "react";
import "../join/Join.css";
import JoinImg from "../../assets/images/joinimg.png";

export default class Join extends Component {
  render() {
    return (
      <section id="join">
        <div class="container">
          <div class="join-card">
            <div class="join__card-left">
              {/* <h1>Join 100 Compannies who boost their business with Product</h1> */}
              {/* <button href="#">Get This</button> */}
            </div>
            <div class="join__card-right">
              {/* <img src={JoinImg} alt="" /> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
