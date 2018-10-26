import React, { Component } from 'react';
import "./styles.css";

import Header from "./components/header-and-footer/Header";

class App extends Component {
  render() {
    return (
      <div className="App" style={{height:"1500px", background:"lightblue"}}>
        <Header />
      </div>
    );
  }
}

export default App;