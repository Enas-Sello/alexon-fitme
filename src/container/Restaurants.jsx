import React from 'react';
import FoodCard from '../components/FoodCard';
import { NearbyRestaurants } from '../data';
import { recommendFood } from '../data';

const Restaurants = () => {
  return (
    <div className=" sm:flex-col flex-row gap-5 justify-between items-center section__padding w-full h-full">
      <div className="">
        <h3 className="font-medium md:text-2xl text-xl mb-12">Nearby Restaurants</h3>
        <FoodCard data={NearbyRestaurants} />
      </div>
      <div className="">
        <h3 className="font-medium md:text-2xl text-xl md:mb-12 mb-6">
          Recommended Food Items
        </h3>
        <FoodCard data={recommendFood} />
      </div>
    </div>
  );
};

export default Restaurants;
