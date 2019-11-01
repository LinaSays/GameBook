// == Import : npm
import React, { useEffect } from 'react';
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
  useEffect(() => {
    const card = document.getElementById(`card-${id}`);
    const controller = new ScrollMagic.Controller();
    const tween = TweenMax.to(card, 0.1, { scale: 1.067, repeat: 1, yoyo: true });

    new ScrollMagic.Scene({

      triggerElement: `#card-${id}`,
      duration: '450px',
      // offset: '100px',
    })

      .setTween(tween)
      .addTo(controller);
  });
  return (
    <div id={`card-${id}`} className="card-story container">
      <img className="card-story-img" src={image} alt="" />
      <div className="card-story-text-content">
        <h2 className="card-story-title">{title} .</h2>
        <p className="card-story-descrip">{description}</p>
        <Link to={`story/${id}`} className={`card-story-link link-${id}`}>Commencer l'histoire ></Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

// == Export
export default Card;
