// == Import : npm
import React from 'react';
import { CardDeck, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

// == Import : local

// == Composant
const Wrote = ({ id, title, image }) => (
  <CardDeck>
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body className="menu-wrote">
        <Button variant="warning" size="sm" className={id}>Modifier</Button>
        <Button variant="danger" size="sm" className={`menu-wrote-delete ${id}`}>Supprimer</Button>
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
