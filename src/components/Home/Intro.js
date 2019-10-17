// == Import : npm
import React from 'react';


// == Import : local
import './home.scss';
import Navigation from 'src/components/Navigation';


// == Composant
const Intro = () => (
  <div className="intro container">
    <Navigation />
    <h1 className="intro-title">L'aventure dont vous êtes le héros</h1>
    <p className="intro-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consequuntur unde, itaque alias at quibusdam accusantium, commodi temporibus, fugit corporis assumenda laborum nisi officia nam eius sapiente saepe natus tempora quo explicabo? At dignissimos debitis quis nesciunt tenetur laborum aspernatur?</p>
    <button className="intro-button" type="button">Commencez une histoire</button>
  </div>

);

// == Export
export default Intro;
