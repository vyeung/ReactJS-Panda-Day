import React, { Component } from 'react';

import SlideReveal from "react-reveal/Slide";

class Countdown extends Component {
  state = {
    nextPandaDay: "",
    hasArrived: false,
    days: 0,
    hrs: 0,
    mins: 0,
    secs: 0
  }

  componentDidMount() {
    //eliminates need to hard-code panda days
    this.getNextPandaDayDate();
    
    //call every second
    setInterval(() => this.getTimeUntilPandaDay(), 1000);
  }

  getNextPandaDayDate = () => {
    const currentYear = new Date().getFullYear();
    const currentTime = Date.parse(new Date());
    const testPandaDayTime = Date.parse("Mar, 16," + currentYear);

    if(testPandaDayTime-currentTime < 0) {
      //panda day has passed in current year, so log next one
      this.setState({nextPandaDay: "Mar, 16, " + (currentYear+1)});
    }
    else {
      this.setState({nextPandaDay: "Mar, 16, " + currentYear});
    }
  }

  getTimeUntilPandaDay = () => {
    //negative time value means date has passed.
    //positive time value means date hasn't come yet.
    const time = Date.parse(this.state.nextPandaDay) - Date.parse(new Date());
    
    const monthsArray = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const m = monthsArray[new Date().getMonth()];
    const d = new Date().getDate();
    const currMonthDay = m + ", " + d;

    let testMonthDay = "";
    let numComma = 0;
    for(var i=0; i<this.state.nextPandaDay.length; i++) {
      if(this.state.nextPandaDay.charAt(i) === ",")
        numComma++;
      if(numComma === 2)
        break;
      testMonthDay = testMonthDay + this.state.nextPandaDay.charAt(i);
    }

    // console.log(this.state.nextPandaDay);
    // console.log(currMonthDay);
    // console.log(testMonthDay);
    
    if(currMonthDay === testMonthDay) {
      //it's panda day. make countdown 0000 for entire day
      this.setState({
        hasArrived: true,
        days: 0,
        hrs: 0,
        mins: 0,
        secs: 0
      });
    }
    else if(time > 0) {
      //panda day hasn't come yet, do normal countdown
      const seconds = Math.floor((time/1000) % 60);
      const minutes = Math.floor((time/1000/60) % 60);
      const hours = Math.floor((time/(1000*60*60)) % 24);
      const days = Math.floor(time/(1000*60*60*24));

      this.setState({
        hasArrived: false,
        days: days,
        hrs: hours,
        mins: minutes,
        secs: seconds
      });
    }
  }
  
  render() {
    let countdownMessage;
    if(this.state.hasArrived === true)
      countdownMessage = "TODAY IS PANDA DAY!";
    else
      countdownMessage = "COUNTDOWN TO PANDA DAY";

    return (
      //slide reveal from left with 0.5s delay
      <SlideReveal left delay={500}>
        <div className="countdown_wrapper">
          <div className="countdown_top">
            {countdownMessage}
          </div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">{this.state.days}</div>
              <div className="countdown_tag">DAYS</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.hrs}</div>
              <div className="countdown_tag">HRS</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.mins}</div>
              <div className="countdown_tag">MINS</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.secs}</div>
              <div className="countdown_tag">SECS</div>
            </div>
          </div>
        </div>
      </SlideReveal>
    );
  }
}

export default Countdown;