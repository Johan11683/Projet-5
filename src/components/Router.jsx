import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import HousingFiles from '../pages/HousingFiles';
import Error404 from '../pages/Error404';

const AppRouter = () => {
  console.log("Router rendered"); // Ajoute ce log pour vérifier si le Router se rend
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/housing-files" element={<Layout><HousingFiles /></Layout>} />
        <Route path="*" element={<Layout><Error404 /></Layout>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
