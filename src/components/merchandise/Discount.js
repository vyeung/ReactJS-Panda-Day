import React, { Component } from 'react';

import Fade from "react-reveal/Fade";

class Discount extends Component {
  
  state = {
    discountStart: 0,
    discountEnd: 50
  }

  componentDidUpdate() {
    //doesn't work with setInterval().
    //when component updates, call function after 25ms. 
    setTimeout(() => this.percentAnimation(), 25);
  }

  percentAnimation = () => {
    if(this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  }
  
  render() {
    return (
      <div className="discount_wrapper">
        <Fade onReveal={() => this.percentAnimation()}>
          <div className="discount_percentage">
            <span>{this.state.discountStart}%</span>
            <span>OFF any item when you purchase on March 16th</span>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Discount;