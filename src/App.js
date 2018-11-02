import React, { Component } from 'react';
import "./styles.css";

import Header from "./components/header/Header";
import Featured from "./components/featured/featured";
import PartyInfo from "./components/partyInfo/partyInfo";
import FunFacts from "./components/funFacts/funFacts";
import Merchandise from "./components/merchandise/merchandise";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Featured />
        <PartyInfo />
        <FunFacts />
        <Merchandise />
      </div>
    );
  }
}

export default App;