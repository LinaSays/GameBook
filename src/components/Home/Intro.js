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
        <p className="intro-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consequuntur unde, itaque alias at quibusdam accusantium, commodi temporibus.Sint consequuntur unde, itaque alias at quibusdam accusantium, commodi temporibus</p>
        <AnchorLink offset="100" href="#card-1" className="intro-button">Commencer une histoire</AnchorLink>
      </div>
      <div className="intro-img">
        <img className="intro-img--mobile" src="public\images\pngtube.com-iphone-in-hand-png-5316895.png" alt="" />
        <img className="intro-img--tablet" src="public\images\Ipad_iPhone_device.png" alt="" />
      </div>
    

    </div>
  </div>

);

// == Export
export default Intro;
