import React, { Component } from "react";
import "./Cards.css";
import "bulma/css/bulma.css";
class Cards extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="card card-1">
        <div className="card-image">
          <figure className="image is-square">
            <img
              src="https://a0.muscache.com/im/pictures/9ae4202f-3ab6-4684-8fa8-59af00320dba.jpg?aki_policy=x_large"
              alt="Placeholder "
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">Heading</p>
              <p className="subtitle is-6">
                lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor
                sit lorem ipsum dolor sit{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
