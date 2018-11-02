import React from 'react';

import Pricing from "./Pricing";
import Discount from "./Discount";

const merchandise = () => {
  return (
    <div className="blackBackgroundDiv">
      <div className="merch_center_wrapper">
        <h2>Merchandise</h2>
        <Pricing />
        <Discount />
      </div>
    </div>
  );
};

export default merchandise;