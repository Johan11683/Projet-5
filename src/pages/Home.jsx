import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <div className="image-container">
        <img src='../public/landscape.webp' alt="falaise" />
        <div className="image-overlay"></div> {/* Overlay pour assombrir */}
        <h1 className="overlay-title">Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
};


export default Home;
