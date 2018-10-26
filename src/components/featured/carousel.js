import React from 'react';

import Slider from "react-slick";

const carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
  };
  
  return (
    <div className="carousel_wrapper">
      {/*spread operator to copy all the settings in*/}
      <Slider {...settings}>
        <div className="carousel_slide1"></div>
        <div className="carousel_slide2"></div>
        <div className="carousel_slide3"></div>
      </Slider>
    </div>
  );
};

export default carousel;