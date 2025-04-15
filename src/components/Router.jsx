// Le fichier Router.jsx contient la logique de routage, ce qui permet à l'application de naviguer entre différentes pages ou composants en fonction de l'URL.

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import HousingFiles from '../pages/HousingFiles';
import Error404 from '../pages/Error404';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/logements/:id" element={<HousingFiles />} /> {/* Route dynamique */}
        <Route path="*" element={<Layout><Error404 /></Layout>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;


// <Router> : Le Router englobe l'ensemble des routes. C'est ce qui permet à React de gérer la navigation entre les différentes pages sans recharger la page.

// <Routes> : Ce composant englobe toutes les routes à définir pour l'application. 
// Chaque <Route> définit une URL et un composant à rendre lorsqu'une route correspond à l'URL donnée.

// <Route path="/" element={<Layout><Home /></Layout>} /> : C'est un exemple de route où :
// L'URL "/" affiche le composant Home.

// Layout est un composant qui est utilisé pour fournir une structure de page commune (footer et header).

// <Route path="*" element={<Layout><Error404 /></Layout>} /> : Cette route est une route de secours qui est utilisée quand aucune autre route ne correspond. 
// Cela affiche la page Error404.