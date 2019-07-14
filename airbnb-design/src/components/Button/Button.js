import React, { Component } from "react";
import "bulma/css/bulma.css";
class Button extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <button className="button button-Submit is-danger is-medium">
        Search
      </button>
    );
  }
}

export default Button;
