import React, { Component } from "react";
import "../home/Home.css";
import Play from "../../assets/images/play.svg";
import Homeleft from "../../assets/images/home-leftimg.png";

export class Home extends Component {
  render() {
    return (
      <section id="home">
        <div class="container">
          <div class="home">
            <div class="home-left">
              <h1>Work at the speed of thought</h1>
              <p>
                Tools, tutorials, design and innovation experts, all in one
                place! The most intuitive way to imagine your next user
                experience.
              </p>
              <div class="home__left-btns">
                <a class="home-leftbtn" href="#">
                  Get started
                </a>
                <div class="home__btns-watch">
                  <img src={Play} alt="" />
                  <a href="#">Watch the Video</a>
                </div>
              </div>
            </div>
            <div class="home-right">
              <img src={Homeleft} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
