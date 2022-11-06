import React from 'react';
import Intero from '../components/Intero';
import Personalized from '../components/Personalized';
import Recommend from '../components/Recommend';
import Search from '../components/Search';
import Restaurants from './Restaurants';

const Home = () => {
  return (
    <div>
      <Intero />
      <Restaurants />
      <Search />
      <Recommend />
      <Personalized />
    </div>
  );
};

export default Home;
