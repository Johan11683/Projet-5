import React from 'react';
import { useParams, Navigate } from 'react-router-dom'; // Importation de Navigate
import logements from '../datas/data';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Slideshow from '../components/Slideshow';
import Collapse from '../components/Collapse';

const HousingFiles = () => {
  const { id } = useParams(); // Récupère l'id de l'URL
  const logement = logements.find((logement) => logement.id === id); // Cherche un logement avec l'id correspondant

  // Si aucun logement n'est trouvé via la recherche d'id, redirige vers la page d'erreur
  if (!logement) {
    return <Navigate to="/error" />;
  }
  // Fonction pour afficher les étoiles de rating
  // Ici on utilise un tableau que l'on rempli d'étoiles en fonction de rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
      );
    }
    return stars;
  };

  return (
    <div>
      <Header />
      <div className="housing-files">
        {/* Carrousel */}
        <div className="carrousel-container">
          <Slideshow pictures={logement.pictures} alt={logement.title} />
        </div>

        {/* Informations du logement */}
        <div className="housing-info">
          <div className="housing-content-left">
            <h1 className="housing-title">{logement.title}</h1>
            <p className="housing-location">{logement.location}</p>

            {/* Affichage des tags */}
            <div className="housing-tags">
              {logement.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="housing-content-right">
            {/* Informations sur l'hôte */}
            <div className="housing-host">
              <p className="host-name">{logement.host.name}</p>
              <img
                className="host-img"
                src={logement.host.picture}
                alt={`Portrait de ${logement.host.name}`}
              />
            </div>
            {/* Affichage de la notation */}
            <div className="housing-rating">
              {renderStars(logement.rating)}
            </div>
          </div>
        </div>

        {/* Collapses en dessous des informations */}
        <div className="housing-collapses">
          <Collapse label="Description">
            {logement.description}
          </Collapse>

          <Collapse label="Équipements">
            {logement.equipments.map((equipement, index) => (
              <p key={index}>{equipement}</p>
            ))}
          </Collapse>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HousingFiles;
