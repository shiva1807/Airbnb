import React, { Component } from "react";
import "bulma/css/bulma.css";
class Error extends Component {
  constructor() {
    super();
    this.state = {
      visibility: ""
    };
  }
  hideMe = () => {
    this.setState({ visibility: "is-hidden" });
  };
  render() {
    return (
      <div className={`error-container ${this.state.visibility}`}>
        <article class="message is-danger">
          <div class="message-body error-message-body">
            <span class="icon has-text-warning">
              <i class="fas fa-2x fa-exclamation-triangle" />
            </span>

            <div class="error-text ">
              <div className="is-pulled-left">
                Sorry, something went wrong. Please try again.
              </div>
            </div>

            <div class="cross">
              <button class="delete is-pulled-right" onClick={this.hideMe} />
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Error;
