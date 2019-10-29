// == Import : npm
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';


// == Import : local
import './home.scss';
import NavNew from '../NavNew';


// == Composant
const Intro = () => (
  <div className="intro container">
    <div className="intro-content">
      <div className="intro-left">
        <h1 className="intro-title">L'aventure dont vous êtes le héros!</h1>
        <p className="intro-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consequuntur unde, itaque alias at quibusdam accusantium, commodi temporibus, fugit corporis assumenda laborum nisi officia nam eius sapiente saepe natus tempora quo explicabo? At dignissimos debitis quis nesciunt tenetur laborum aspernatur?</p>
        <AnchorLink offset='100'  href="#card-1"  className="intro-button">Commencer une histoire</AnchorLink>
      </div>
      <div className="intro-img">
        <img className="intro-img--image" src="http://preview.uxtheme.website/xpider-preview/xpider/img/devices-1.png" alt="" />
      </div>

    </div>
  </div>

);

// == Export
export default Intro;
