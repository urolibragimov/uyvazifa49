import React, { Component } from "react";
import "../footer/Footer.css";
import Footernavlogo from "../../assets/images/navlogo.svg";
import FooterIcon1 from "../../assets/images/footericon1.svg";
import FooterIcon2 from "../../assets/images/footericon2.svg";
import FooterIcon3 from "../../assets/images/footericon3.svg";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div class="container">
          <div class="footer">
            <div class="footer-left">
              <div class="footer-logo-img">
                {/* <a href="index.html"> */}
                  {/* <img src={Footernavlogo} alt="" /> */}
                {/* </a> */}
                {/* <h2>Product</h2> */}
              </div>
              <div class="footer-icon">
                {/* <img src={FooterIcon1} alt="" /> */}
                {/* <img src={FooterIcon2} alt="" /> */}
                {/* <img src={FooterIcon3} alt="" /> */}
              </div>
            </div>
            <div class="footer-middle">
              <div class="footer__middle-left">
                {/* <h4>Resource</h4> */}
                <ul>
                  <li>
                    {/* <a href="#">About Us</a> */}
                  </li>
                  <li>
                    {/* <a href="#">Blog</a> */}
                  </li>
                  <li>
                    {/* <a href="#">Contact</a> */}
                  </li>
                  <li>
                    {/* <a href="#">FAQ</a> */}
                  </li>
                </ul>
              </div>
              <div class="footer__middle-right">
                {/* <h4>Legal Stuff</h4> */}
                <ul>
                  <li>
                    {/* <a href="#">Disclaimer</a> */}
                  </li>
                  <li>
                    {/* <a href="#">Financing</a> */}
                  </li>
                  <li>
                    {/* <a href="#">Privacy Policy</a> */}
                  </li>
                  <li>
                    {/* <a href="#">Terms of Service</a> */}
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-right">
              {/* <h2>knowing you're always on the best energy deal.</h2> */}
              {/* <form>
                <input type="text" />
              </form> */}
              {/* <a href="#">Sign up Now</a> */}
            </div>
          </div>
          <div class="footer-bottom">
            {/* <p>Made With Love By Figmaland All Right Reserved</p> */}
          </div>
        </div>
      </footer>
    );
  }
}
