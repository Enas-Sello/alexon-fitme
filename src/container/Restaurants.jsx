import React from 'react';
import FoodCard from '../components/FoodCard';
import { NearbyRestaurants } from '../data';
import { recommendFood } from '../data';

const Restaurants = () => {
  return (
    <div className="section__margin flex lg:gap-16 md:gap-10 gap-2 justify-between items-start section__padding w-full h-full">
      <div className="flex-1">
        <h3 className="font-medium lg:text-2xl text-lg md:mb-7 mb-5">
          Nearby Restaurants
        </h3>
        <FoodCard data={NearbyRestaurants} />
      </div>
      <div className="flex-1">
        <h3 className="font-medium lg:text-2xl text-lg mb-4 sm:mb-8 leading-4 md:leading-5 ">
          Recommended Food Items
        </h3>
        <FoodCard data={recommendFood} />
      </div>
    </div>
  );
};

export default Restaurants;
