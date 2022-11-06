import React from 'react';
import shape from '../assets/Union.png';
import apple from '../assets/apple.png';
import banana from '../assets/bananna.png';
const Intero = () => {
  return (
    <div className="relative section__margin section__padding section__margin">
      <div className="absolute top-40 -left-72">
        <img src={shape} alt="" />
      </div>
      <div className="flex mx-12">
        <div className=" flex-1">
          <div>
            <p>Premium quality Food for your healthy & Daily Life</p>
          </div>
          <p>Premium quality Food for your healthy & Daily Life</p>
          <input type="text" placeholder="Enter your delivery location" />
          <div>
            <h4>Popular cities in India</h4>
            <p>Hyderabad Chennai Mumbai Bangalore Delhi Kolkata</p>
          </div>
        </div>
        <div className="flex flex-1">Premium quality</div>
      </div>
    </div>
  );
};

export default Intero;
