import React, { useState } from 'react';

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasMultipleImages = pictures.length > 1;

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slideshow">
      <img
        src={pictures[currentIndex]}
        className="slideshow-image"
      />

      {hasMultipleImages && (
        <>
        {/* {'\u2039'} et {'\u203A'}*/}
          <button className="arrow left" onClick={goToPrev}>‹</button>
          <button className="arrow right" onClick={goToNext}>›</button>
          <div className="slide-count">
            {currentIndex + 1} / {pictures.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Slideshow;
