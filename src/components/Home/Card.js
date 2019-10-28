// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as ScrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';


// == Import : local
import './home.scss';

// == Plugins
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

// == Composant
const Card = ({
  id, title, description, image,
}) => {
  console.log('coucou');
  return (
    <div id={`card-${id}`} className="card-story container">
      <img className="card-story-img" src={image} alt="" />
      <div className="card-story-text-content">
        <h2 className="card-story-title">{title}</h2>
        <p className="card-story-descrip">{description}</p>
        <a href="" className={`card-story-link link-${id}`}>Commencer l'histoire ></a>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

// == Export
export default Card;
