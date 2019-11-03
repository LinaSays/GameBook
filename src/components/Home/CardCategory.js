// == Import : npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//import * as ScrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import { MdKeyboardArrowRight } from 'react-icons/md';

// == Import : local
import './cardcat.scss';

// == Plugins
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

// == Composant
const CardCategory = ({
  id, name, image, description,
}) => {

  const controller = new ScrollMagic.Controller();
  
  useEffect(() => {
    const card = document.getElementById(`card-story${id}`);
    // const controller = new ScrollMagic.Controller();
    const tween = TweenMax.to(card, 0.1, { scale: 1.067, repeat: 1, yoyo: true });

    new ScrollMagic.Scene({

      triggerElement: `#card-story${id}`,
      duration: '500px',
      offset: '100px',
    })

      .setTween(tween)
      .addTo(controller);
  });

  return (
    <div className="card-story-category container" category_id={id} id={`card-story${id}`}>
      <img className="card-story-category-img" src={image} alt="" />
      <div className="card-story-category-text-content">
        <h2 className={`card-story-category-title cat-title-${id}`}>{name} .</h2>
        <p className="card-story-category-descrip">{description}</p>
        <Link to={`categories/${id}`} className={`card-story-category-link cat-link-${id}`}>Commencer l'histoire<MdKeyboardArrowRight /></Link>
      </div>
    </div>
  );
};

CardCategory.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
// == Export
export default CardCategory;
