import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import QuickBooking from "./components/QuickBooking/QuickBooking";

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <QuickBooking />
    </div>
  );
}

export default App;
