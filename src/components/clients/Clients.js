import React, { Component } from "react";
import "../clients/Clients.css";
import ClientStar1 from "../../assets/images/clients-star.svg";
import ClientStar2 from "../../assets/images/clients-star2.svg";
import ClientImg1 from "../../assets/images/clients-img1.png";
import ClientImg2 from "../../assets/images/clients-img2.png";
import ClientImg3 from "../../assets/images/clients-img3.png";

export default class Clients extends Component {
  render() {
    return (
      <section id="clients">
        <div class="container">
          <div class="clients">
            <div class="clients-content">
              <h2>What Clients Say</h2>
              <span>Problems trying to resolve the conflict between</span>
              <span>
                the two major realms of Classical physics: Newtonian mechanics{" "}
              </span>
            </div>
            <div class="clients-rows">
              <div class="clients-row">
                <div class="clients__row-star">
                  <img src={ClientStar1} alt="" />
                  <img src={ClientStar1} alt="" />
                  <img src={ClientStar1} alt="" />
                  <img src={ClientStar1} alt="" />
                  <img src={ClientStar2} alt="" />
                </div>
                <div class="clients__row-content">
                  <p>
                    Product helps you see how many more days you need to work to
                    reach your financial goal.
                  </p>
                </div>
                <div class="clients__row-about">
                  <img src={ClientImg1} alt="" />
                  <div class="clients__about-heading">
                    <h4>Wahid Ari</h4>
                    <p>Designer</p>
                  </div>
                </div>
              </div>
              <div class="clients-row">
                <div class="clients__row-star">
                  <img src={ClientStar1} alt="" />
                  <img src={ClientStar1} alt="" />
                  <img src={ClientStar1} alt="" />
                  <img src={ClientStar1} alt="" />
                  <img src={ClientStar2} alt="" />
                </div>
                <div class="clients__row-content">
                  <p>
                    Product helps you see how many more days you need to work to
                    reach your financial goal.
                  </p>
                </div>
                <div class="clients__row-about">
                  <img src={ClientImg2} alt="" />
                  <div class="clients__about-heading">
                    <h4>Wahid Ari</h4>
                    <p>Designer</p>
                  </div>
                </div>
              </div>
              <div class="clients-row">
                <div class="clients__row-star">
                  <img src={ClientStar1} alt="" />
                  <img src={ClientStar1} alt="" />
                  <img src={ClientStar1} alt="" />
                  <img src={ClientStar1} alt="" />
                  <img src={ClientStar2} alt="" />
                </div>
                <div class="clients__row-content">
                  <p>
                    Product helps you see how many more days you need to work to
                    reach your financial goal.
                  </p>
                </div>
                <div class="clients__row-about">
                  <img src={ClientImg3} alt="" />
                  <div class="clients__about-heading">
                    <h4>Wahid Ari</h4>
                    <p>Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
