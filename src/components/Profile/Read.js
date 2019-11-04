// == Import : npm
import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

// == Import : local

// == Composant
const Read = ({ title, image }) => (
  <CardDeck className="card-story-profile-wrote read">
    <Card className="menu-story-read">
      <Card.Img variant="top" className="menu-story-image read" src={image} />
      <Card.Footer className="menu-story-wrapper-read">
        <h2 className="menu-story-title read">{title}</h2>
      </Card.Footer>
    </Card>
  </CardDeck>
);

Read.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

Read.defaultProps = {
  title: '',
  image: '',
};

// == Export
export default Read;
