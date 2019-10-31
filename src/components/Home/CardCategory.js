// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import : local
import './cardcat.scss';

// == Composant
const CardCategory = ({
  id, name, image, description,
}) => (

  <div className="card-story-category container" category_id={id} id={`card-story${id}`}>
    <img className="card-story-category-img" src={image} alt="" />
    <div className="card-story-category-text-content">
      <h2 className="card-story-category-title">{name}</h2>
      <p className="card-story-category-descrip">{description}</p>
      <Link to={`categories/${id}`} className="card-story-category-link">Commencer l'histoire ></Link>
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
