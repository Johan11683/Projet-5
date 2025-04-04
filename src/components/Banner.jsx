import React from 'react';

const Banner = ({ imageSrc, altText, title, overlayOpacity }) => {
  return (
    <div className="image-container">
      <img src={imageSrc} alt={altText} />
      <div 
        className="image-overlay" 
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
      ></div>
      <h1 className="overlay-title">{title}</h1>
    </div>
  );
};

export default Banner;
