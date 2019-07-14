import React, { Component } from "react";
import "bulma/css/bulma.css";
class Hero extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <section
          class="hero-image is-primary is-medium "
          style={{
            backgroundImage:
              "url(" +
              "https://images.unsplash.com/photo-1469827160215-9d29e96e72f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" +
              ")"
          }}
        >
          <div class="hero-body">
            <div class="container">
              <h1 class="title hero-title">Medium title</h1>
              <h2 class="subtitle hero-subtitle">Medium subtitle</h2>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Hero;
