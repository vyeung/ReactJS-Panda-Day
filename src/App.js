import React, { Component } from 'react';
import "./styles.css";

import Header from "./components/header/Header";
import Featured from "./components/featured/featured";
import PartyInfo from "./components/partyInfo/partyInfo";

class App extends Component {
  render() {
    return (
      <div className="App" style={{height:"1500px", background:"lightblue"}}>
        <Header />
        <Featured />
        <PartyInfo />
      </div>
    );
  }
}

export default App;