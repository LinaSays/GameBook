// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './home.scss';

// == Composant
const Card = ({ title, description, image }) => {
  return (
    <div className="card-story container">
      <img className="card-story-img" src={image} alt="" />
      <div className="card-story-text-content">
        <h2 className="card-story-title">{title}</h2>
        <a href="" className="card-story-link">Commencer l'histoire ></a>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

// == Export
export default Card;
