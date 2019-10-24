// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './home.scss';

// == Composant
const CardCategory = ({ id, name, image, description }) => (
  <div className="card-story container">
    <img className="card-story-img" src={image} alt="" />
    <div className="card-story-text-content">
      <h2 className="card-story-title">{name}</h2>
      <a href="" className="card-story-link">Commencer l'histoire ></a>
    </div>
  </div>
);

CardCategory.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
// == Export
export default CardCategory;
