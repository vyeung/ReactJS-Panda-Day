import React from 'react';

import Fade from "react-reveal/Fade";

const funFacts = () => {
  return (
    <Fade>
      <div className="funFacts_wrapper">
        <h2>Fun Facts</h2>
        <div className="funFacts_list">
          <ul>
            <li>The Panda’s scientific name is Ailuropoda Melanoleuca, which means "black and white cat-foot".</li>
            <li>99% of a Panda’s diet consists of bamboo.</li>
            <li>Pandas spend up to 12 hours a day eating bamboo.</li>
            <li>Researchers have determined that there are 11 different panda calls.</li>
            <li>Unlike most bears, Pandas do not hibernate.</li>
            <li>A Panda cub is born pink, blind, and about 6 inches in length.</li>
            <li>A group of Pandas is called an embarassment.</li>
          </ul>
        </div>
      </div>  
    </Fade>
  );
};

export default funFacts;