import React from "react";
import { Link } from "react-router-dom";


const Error404 = () => {
  return (
  <div className="error-Page">
    <div className="error-Title">404</div>
    <div className="error-Text">Oups! La page que vous demandez n'existe pas</div>
    <Link to = "/">Retourner sur la page d'accueil</Link>
  </div>
)};

export default Error404;
