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
        <div class="columns is-centered">
          <div class="column is-half">
            <article class="message is-danger">
              <div class="message-body">
                <div class="columns">
                  <div class="column is-one-fifths">
                    <span class="icon has-text-warning">
                      <i class="fas fa-2x fa-exclamation-triangle" />
                    </span>
                  </div>
                  <div class="column is-four-fifths ">
                    <div className="is-pulled-left">
                      Sorry, something went wrong. Please try again.
                    </div>
                  </div>
                  <div class="column">
                    <button
                      class="delete is-pulled-right"
                      onClick={this.hideMe}
                    />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default Error;
