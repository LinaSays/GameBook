// == Import : npm
import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

// == Import : local

// == Composant
const Wrote = ({ id, title, image }) => (
  <CardDeck className="card-story-profile-wrote">
    <Card className="menu-story">
      <Card.Img variant="top" className="menu-story-image" src={image} />
      <Card.Body className="menu-story-written">
        <h2 className="menu-story-title">{title}</h2>
        <div className={`menu-story-buttons ${id}`}>
          <button type="button" className={`menu-story-delete ${id}`}>Supprimer</button>
          <button type="button" className={`menu-story-modify ${id}`}>Modifier</button>
        </div>
      </Card.Body>
    </Card>
  </CardDeck>
);

Wrote.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
};

Wrote.defaultProps = {
  id: 0,
  title: '',
  image: '',
};

// == Export
export default Wrote;
