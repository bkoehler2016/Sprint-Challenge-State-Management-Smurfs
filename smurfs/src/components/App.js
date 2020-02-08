import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import SmurfCard from "./SmurfCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfCard />
      </div>
    );
  }
}

export default App;
