import React from "react";

import Jumbotron from "./components/Jumbotron/Jumbotron";
import QuickBooking from "./components/QuickBooking/QuickBooking";
import Card1 from "./components/Cards1/Cards";
import Card2 from "./components/Cards2/Card";
import Error from "./components/Error Message/Error Message";
import ImageTile from "./components/Image-tile/hero";
import "bulma/css/bulma.css";

function App() {
  return (
    <div>
      <div className="columns is-multiline">
        <div className="column">
          <Jumbotron />
        </div>
      </div>
      <div className="columns is-multiline">
        <div className="column">
          <QuickBooking />
        </div>
        <div className="column" />
        <div className="column">
          <Card1 />
        </div>
        <div className="column">
          <Card2 />
        </div>
      </div>
      <div className="columns is-multiline">
        <div className="column">
          <Error />
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <ImageTile />
        </div>
      </div>
    </div>
  );
}

export default App;
