import React, { useState } from 'react';

const Collapse = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-toggle">
        <span>{label}</span> {/* Le texte ou titre qui affiche l'état */}
        {/* Bouton qui déclenche l'ouverture/fermeture avec l'icône */}
        <button className="collapse-arrow" onClick={toggleCollapse}>
          <i className={isOpen ? "fas fa-angle-up" : "fas fa-angle-down"}></i>
        </button>
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        {children} {/* Le contenu du menu déroulant */}
      </div>
    </div>
  );
};

export default Collapse;
