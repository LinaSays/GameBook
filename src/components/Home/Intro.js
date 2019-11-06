// == Import : npm
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

// == Import : local
import './home.scss';
import hand from '../../../public/images/pngtube.com-iphone-in-hand-png-5316895.png';
import ipad from '../../../public/images/Ipad_iPhone_device.png';
import girl from '../../../public/images/girl_laptop_fv_bg.png';

// == Composant
const Intro = () => (
  <div className="intro container">
    <div className="intro-content">
      <div className="intro-left">
        <h1 className="intro-title">L'aventure dont vous êtes le héros!</h1>
        <p className="intro-text"> Bienvenue chez Gamebook où nous allons tenter de bousculer vos habitudes de lecture. Fini la lecture linéaire avec une seule fin possible. Place à l’interaction ! Faites les bons choix pour faire avancer l'histoire ou votre personnage, en bref devenez le héros.</p>
        <AnchorLink offset="100" href="#card-1" className="intro-button">Commencer une histoire <IoIosArrowDroprightCircle /></AnchorLink>
      </div>
      <div className="intro-img">
        <img className="intro-img--mobile" src={hand} alt="" />
        <img className="intro-img--tablet" src={ipad} alt="" />
        <img className="intro-img--desk" src={girl} alt="" />
      </div>


    </div>
  </div>

);

// == Export
export default Intro;
