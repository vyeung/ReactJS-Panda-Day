import React from 'react';

import Zoom from "react-reveal/Zoom";

const partyInfo = () => {

  //code taken from Countdown.js
  const currentYear = new Date().getFullYear();
  const currentTime = Date.parse(new Date());
  const testPandaDayTime = Date.parse("Mar, 16," + currentYear);

  let nextPandaDay;
  if(testPandaDayTime-currentTime < 0)
    nextPandaDay = "March 16, " + (currentYear+1);
  else 
    nextPandaDay = "March 16, " + (currentYear);

  return (
    <div className="blackBackgroundDiv">
      <div className="center_wrapper">
        <div>
          <h2>Annual Celebration Party</h2>
          <h3>* Free Admission *</h3>
        </div>

        <div className="pInfo_wrapper">
          <Zoom duration={500}>
            <div className="pInfo_item">
              <div className="pInfo_outer">
                <div className="pInfo_inner">
                  <div className="pInfo_icon_square redBackground"></div>
                  <div className="pInfo_icon left" ></div>
                  <div className="pInfo_title">Event Date & Time</div>
                  <div className="pInfo_time">{nextPandaDay} @ 6pm</div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom duration={500} delay={500}>
            <div className="pInfo_item">
              <div className="pInfo_outer">
                <div className="pInfo_inner">
                  <div className="pInfo_icon_square yellowBackground"></div>
                  <div className="pInfo_icon right" ></div>
                  <div className="pInfo_title">Event Location</div>
                  <div className="pInfo_time">123 Fake Street, Fake City, NY</div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>

      </div>
    </div>
  );
};

export default partyInfo;