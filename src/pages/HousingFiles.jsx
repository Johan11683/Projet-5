import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../datas/data'; // Assure-toi que ce fichier contient bien tes logements
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const HousingFiles = () => {
  const { id } = useParams(); // Récupère l'ID dans l'URL

  const logement = logements.find((logement) => logement.id === id); // Recherche le logement par ID

  return (
    <div className="housing-files">
      <Header/>
      <h1>{logement.title}</h1>
      <img src={logement.cover} alt={logement.title} />
      <p>{logement.description}</p>
      <Footer/>
    </div>
  );
};

export default HousingFiles;
