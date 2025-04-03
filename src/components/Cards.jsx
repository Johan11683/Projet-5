import React from 'react';
import Card from './Card';
import logements from '../datas/data'; // Assure-toi que ce fichier existe
import '../styles/Cards.css';

const Cards = () => {
  return (
    <div className="cards-container">
      {logements.map((logement) => (
        <Card
          key={logement.id}
          id={logement.id}  // Passage de l'ID à chaque Card
          title={logement.title}
          image={logement.cover}
        />
      ))}
    </div>
  );
};

export default Cards;
