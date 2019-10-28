// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import : local
import './home.scss';

// == Composant
const Card = ({
  id, title, description, image,
}) => (
  <div id={`card-${id}`} className="card-story container">
    <img className="card-story-img" src={image} alt="" />
    <div className="card-story-text-content">
      <h2 className="card-story-title">{title}</h2>
      <p className="card-story-descrip">{description}</p>
      <a href="" className={`card-story-link link-${id}`}>Commencer l'histoire ></a>
    </div>
  </div>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

// == Export
export default Card;
