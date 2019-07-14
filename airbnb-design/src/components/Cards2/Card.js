import React, { Component } from "react";
import "./Card.css";
import "bulma/css/bulma.css";
class Cards extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div
        className="card-2 is-4by5"
        style={{
          backgroundImage:
            "url(" +
            "https://a0.muscache.com/im/pictures/60145c65-7c36-4ac5-8129-6ae9a0d27a81.jpg?aki_policy=large" +
            ")"
        }}
      >
        <div class="columns  is-mobile is-centered">
          <div class="column para-container-card-2">
            <p class="line-1 is-size-4">Lorem ipsum</p>
            <p class="line-2 is-size-5">Lorem Ipsum</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
