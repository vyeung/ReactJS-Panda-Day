import React, { Component } from 'react';

import MyButton from "../utilities/myButton";
import Zoom from "react-reveal/Zoom";

import Mug from "../../assets/images/mug.jpg";
import Shirt from "../../assets/images/shirt.jpg";
import Plush from "../../assets//images/plush.jpg";

class Pricing extends Component {
  
  state = {
    prices: [5, 15, 30],
    items: ["Mug", "Shirt", "Plush"],
    images: [Mug, Shirt, Plush],
    linkTo: ["http://pandadaysociety.com/sales/mug", "http://pandadaysociety.com/sales/shirt", "http://pandadaysociety.com/sales/plush"],
    delayTime: [500, 0, 500] //in ms
  };

  render() {
    //using loop to show boxes
    let showBoxes = this.state.prices.map((box, i) => {
      return (
        <Zoom delay={this.state.delayTime[i]} key={i}>
          <div className="pricing_item">
            <div className="pricing_inner">
              <div className="pricing_title">
                <span>${this.state.prices[i]}</span>
                <span>{this.state.items[i]}</span>
              </div>
              
              <div className="pricing_image">
                <img src={this.state.images[i]} alt="image"/>
              </div>
              
              <div className="pricing_button">
                <MyButton 
                  buttonText="Purchase"
                  back="#ffa800"
                  color="#ffffff"
                  link={this.state.linkTo[i]}
                />
              </div>
            </div>
          </div>
        </Zoom>
      );
    });

    return (
      <div className="pricing_wrapper">
        {showBoxes}
      </div>
    );
  }
}

export default Pricing;