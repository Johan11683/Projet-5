import React from "react";
import Banner from '../components/Banner';
import Collapse from "../components/Collapse";


const About = () => {
  return ( 
  <div id="back-to-home">
    <div className="about-container">
    <Banner 
          imageSrc="/montagne.webp" 
          altText="falaise" 
        />
      
    </div>
    <div className="collapse">
        <Collapse label="Fiabilité">
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </Collapse>
        <Collapse label="Respect">
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de la plateforme.</p>
        </Collapse>
        <Collapse label="Services">
          <p>La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance</p>
        </Collapse>
        <Collapse label="Sécurité">
          <p>La sécurité est la proprité chez Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.
            En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers
            sur la sécurité domestique pour nos hôtes.
          </p>
        </Collapse>
      </div>
  </div>
)
};

export default About;
