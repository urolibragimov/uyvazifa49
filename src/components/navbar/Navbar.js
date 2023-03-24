import React, { Component } from "react";
import "../../components/navbar/Navbar.css";
import Navlogo from "../../assets/images/navlogo.svg";
import Darkmode from "../../assets/images/dark.svg";
import Menunavbar from "../../assets/images/menu.svg";
import Closenavbar from "../../assets/images/close.svg";

export class Navbar extends Component {
  render() {
    return (
      <header>
        <nav id="navbar">
          <div class="container">
            <div class="nav-container">
              <div class="nav-logo-img">
                <a href="index.html">
                  <img src={Navlogo} alt="" />
                </a>
                <h2>Product</h2>
              </div>
              <div class="nav-menus">
                <ul>
                  <li>
                    <a href="index.html">Product</a>
                  </li>
                  <li>
                    <a href="#">Customers</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Resources</a>
                  </li>
                </ul>
                <div class="nav-btns navbar-btn">
                  <a id="btndark" href="#">
                    Sign In
                  </a>
                  <a id="btndark" href="#">
                    Sign Up
                  </a>
                </div>
                <div class="darklight">
                  <button id="dark-light">
                    <img src={Darkmode} alt="" />
                  </button>
                </div>
              </div>
              <button class="hamburger" onclick="openNavbar()">
                <img src={Menunavbar} alt="" />
              </button>
            </div>
          </div>
          <div id="navbar-responsive">
            <ul>
              <li>
                <a class="nav-menus-link" href="index.html">
                  Product
                </a>
              </li>
              <li>
                <a class="nav-menus-link" href="#">
                  Customers
                </a>
              </li>
              <li>
                <a class="nav-menus-link" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a class="nav-menus-link" href="#">
                  Resources
                </a>
              </li>
              <li>
                <a class="nav__responsive-btn" href="contact.html">
                  Sign In
                </a>
              </li>
              <li>
                <a class="nav__responsive-btn" href="contact.html">
                  Sign Up
                </a>
              </li>
            </ul>
            <button id="close-navbar" onclick="closeNavbar()">
              <img src={Closenavbar} alt="" />
            </button>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
