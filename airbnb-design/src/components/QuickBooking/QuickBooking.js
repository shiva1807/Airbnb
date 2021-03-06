import React, { Component } from "react";
import "bulma/css/bulma.css";
class QuickBooking extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="box hero-body-box">
        <div className="container has-text-centered">
          <div className="columns">
            <div className="column is-four-fifths">
              <h1 class="subtitle booking-subtitle is-3 top-subtitle is-size-4-mobile">
                Book unique places to stay and things to do.
              </h1>
            </div>
          </div>

          <div className="field">
            <h6
              id="subtitle-book"
              class="subtitle  is-6 label is-size-6-mobile is-pulled-left heading"
            >
              Where
            </h6>
            <div className="control">
              <input
                className="input book-input is-medium"
                type="text"
                placeholder="AnyWhere"
              />
            </div>
          </div>
          <div className="field">
            <h6
              id="subtitle-book"
              class="subtitle  is-6 label is-size-6-mobile is-pulled-left heading"
            >
              Where
            </h6>
            <div className="control">
              <input
                className="input book-input is-medium"
                type="text"
                placeholder="AnyWhere"
              />
            </div>
          </div>

          <div className="field">
            <h6
              id="subtitle-book"
              class="subtitle is-6 label is-pulled-left heading is-size-6-mobile"
            >
              GUESTS
            </h6>
            <div className="control">
              <div className="select book-input is-medium">
                <select>
                  <option>GUESTS</option>
                  <option>GUESTS</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field is-grouped is-pulled-right">
            <div className="control">
              <button className="button button-Submit is-danger is-medium">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuickBooking;
