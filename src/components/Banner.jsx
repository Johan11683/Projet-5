import React from 'react';

const Banner = ({ imageSrc, altText, title }) => {
  return (
    <div className="image-container">
      <img src={imageSrc} alt={altText} />
      <div className="image-overlay"></div>
      <h1 className="overlay-title">{title}</h1>
    </div>
  );
};

export default Banner;
