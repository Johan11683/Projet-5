import React from 'react';
import Banner from '../components/Banner';
import Cards from '../components/Cards';

const Home = () => {
  return (
    <div className="home-container">
      <Banner 
        imageSrc="/landscape.webp" 
        altText="falaise" 
        title="Chez vous, partout et ailleurs" 
      />
      <Cards />
    </div>
  );
};

export default Home;
