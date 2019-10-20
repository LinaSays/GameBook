// == Import : npm
import React from 'react';

// == Import : local
import './home.scss';

// == Composant
const Card = () => (
  <div className="card-story container">
    <img className="card-story-img" src="https://wallpaperplay.com/walls/full/a/5/3/102151.jpg" alt="" />
    <div className="card-story-text-content">
      <h2 className="card-story-title">La Légende de la marmotte enchanté</h2>
      <a href="" className="card-link">Commencer l'histoire ></a>
    </div>
  </div>
);

// == Export
export default Card;
