import React from 'react';

const pointOfInterest = () => {
  return (
    <div className="poi_wrapper">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.4816683724353!2d104.14362131513151!3d30.732968981637143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36efd0e00f9a5bf1%3A0xd3cd637087189177!2sChengdu+Research+Base+of+Giant+Panda+Breeding!5e0!3m2!1sen!2sus!4v1541189910729"
        width="100%" 
        height="600"
        title="googleMap"
        frameBorder="0" 
        allowFullScreen>
      </iframe>

      <div className="poi_tag">
        <h2>Point of Interest</h2>
      </div>
    </div>
  );
};

export default pointOfInterest;