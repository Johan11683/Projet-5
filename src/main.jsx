// main.jsx s'occupe du démarrage.
// App.jsx s'occupe de la structure de l'application.
// Router.jsx s'occupe de la navigation.

// main.jsx est le fichier d'entrée de l'application React. Il est responsable de rendre (render) l'application dans le DOM. 
// Ce fichier est utilisé par React pour insérer le rendu de l'application dans un élément HTML ( <div id="root"></div> ).

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Importer App.jsx

ReactDOM.createRoot(document.getElementById('root')).render(<App />);  // Rendre App


// ReactDOM.createRoot : C'est ce qui crée un "root" (racine) pour React dans le HTML, l'élément #root.
// render(<App />) : Cela rend le composant App dans cet élément racine. Le composant App est ce qui va englober et fournir toute la logique de l'application.