// == Import : npm
import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

// == Import : local

// == Composant
const Read = ({ title, image }) => (
  <CardDeck>
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Footer>
        <small className="text-muted">{title}</small>
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
