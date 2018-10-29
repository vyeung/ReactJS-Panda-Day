import React from 'react';

import Carousel from "./carousel";
import Countdown from "./Countdown";

const featured = () => {
  return (
    <div className="featuredDiv">
      <Carousel />
      <Countdown />
    </div>
  );
};

export default featured;