// == Import : npm
import React from 'react';

// == Import : local
import './home.scss';

// == Composant
const CardCategory = () => (
  <div className="card-story container">
    <img className="card-story-img" src="https://wallpaperplay.com/walls/full/a/5/3/102151.jpg" alt="" />
    <div className="card-story-text-content">
      <h2 className="card-story-title">Catégorie</h2>
      <a href="" className="card-story-link">Commencer l'histoire ></a>
    </div>
  </div>
);

// == Export
export default CardCategory;
