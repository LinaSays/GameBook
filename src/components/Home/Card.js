// == Import : npm
import React from 'react';

// == Import : local
import './home.scss';


// == Composant
const Card = () => (
  <div className="card container">
    <div className="card-text-content">
      <h2 className="card-title">Titre de l'histoire</h2>
    <a href="" className="card-link">Commencer l'histoire ></a>
    </div>
    
    <img className="card-img" src="https://images.ctfassets.net/tqv8zqwdfnf7/4vRsDBiuxyKaywwuSyeSmk/721be5aca854399fbed7bba40524a334/Marmotta_desk.jpg?fm=jpg&fl=progressive" alt="" />
  </div>
);

// == Export
export default Card;
