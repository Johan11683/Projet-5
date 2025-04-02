import React from 'react';
import Card from './Card';
import logements from '../data/data';
import '../styles/Cards.css'

const Cards = () => {
  return (
    <div className="cards-container">
      {logements.map((logement) => (
        <Card 
        key={logement.id} 
        title={logement.title} 
        image={logement.cover} />
      ))}
    </div>
  );
};

export default Cards;
