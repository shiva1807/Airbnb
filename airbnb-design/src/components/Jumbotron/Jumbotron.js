import React, { Component } from "react";
import "./Jumbotron.css";
import "bulma/css/bulma.css";
import QuickBooking from "../QuickBooking/QuickBooking";
class Jumbotron extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <section className="hero is-primary is-medium">
        {/* <!-- Hero head: will stick at the top --> */}
        <div className="hero-head">
          <nav className="navbar">
            <div className="container nav-container">
              <div className="navbar-brand">
                <a className="navbar-item">
                  <img
                    src="https://bulma.io/images/bulma-type-white.png"
                    alt="Logo"
                  />
                </a>
                <span
                  className="navbar-burger burger"
                  data-target="navbarMenuHeroA"
                >
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end is-pulled-right">
                  <a className="navbar-item is-active is-pulled-right">
                    Become a host
                  </a>
                  <a className="navbar-item is-pulled-rightt">Help</a>
                  <a className="navbar-item is-pulled-right">SignUp</a>
                  <a className="navbar-item is-pulled-right">LogIn</a>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* <!-- Hero content: will be in the middle --> */}
        <div className="hero-body">
          <QuickBooking />
        </div>
      </section>
    );
  }
}

export default Jumbotron;
