import React, { Component } from 'react';

import "./styles.css";
import { Element } from "react-scroll";

import Header from "./components/header/Header";
import Featured from "./components/featured/featured";
import PartyInfo from "./components/partyInfo/partyInfo";
import FunFacts from "./components/funFacts/funFacts";
import Merchandise from "./components/merchandise/merchandise";
import PointOfInterest from "./components/pointOfInterest/pointOfInterest";
import Footer from "./components/footer/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        
        <Element name="countdown">
          <Featured />
        </Element>
        
        <Element name="partyInfo">
          <PartyInfo />
        </Element>
        
        <Element name="funFacts">
          <FunFacts />
        </Element>
        
        <Element name="merchandise">
          <Merchandise />
        </Element>

        <Element name="poi">
          <PointOfInterest />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;