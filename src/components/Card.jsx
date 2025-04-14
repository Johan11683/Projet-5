import React from 'react';
import { Link } from 'react-router-dom'; // Importation de Link pour la navigation

const Card = ({ id, title, image }) => {
  return (
    <div className="card">
      <Link to={`/logements/${id}`}> {/* Lien dynamique vers HousingFiles avec l'ID */}
        <img src={image} alt={title} />
        <h2>{title}</h2>
      </Link>
    </div>
  );
};

export default Card;
