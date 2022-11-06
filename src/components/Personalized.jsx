import React from 'react'
import FoodCard from './FoodCard';
import {personalized} from '../data'
const Personalized = () => {
  return (
    <div className="section__margin section__padding flex flex-col gap-10  w-full">
      <p>Personalized recommendations</p>
      <FoodCard className="" data={personalized} />
    </div>
  );
}

export default Personalized