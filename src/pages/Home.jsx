import React from 'react';
import Banner from '../components/Banner';
import Cards from '../components/Cards';


const Home = () => {
  return (
    <div className="home-container">
      <Banner 
        imageSrc="/landscape.webp" 
        altText="falaise" 
        title={<div>Chez vous,<br className='break-mobile'></br> partout et ailleurs</div>}
        overlayOpacity={0.6}
        />
      <Cards />
    </div>
  );
};

export default Home;
