// == Import : npm
import React from 'react';
import { CardDeck, Card, Button } from 'react-bootstrap';

// == Import : local

// == Composant
const Wrote = () => (
  <CardDeck>
    <Card>
      <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/51RkD7cTmmL._SX210_.jpg" />
      <Card.Body className="menu-wrote">
        <Button variant="warning" size="sm">Modifier</Button>
        <Button variant="danger" size="sm" className="menu-wrote-delete">Supprimer</Button>
      </Card.Body>
    </Card>
    <Card>
      <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/51RkD7cTmmL._SX210_.jpg" />
      <Card.Body className="menu-wrote">
        <Button variant="warning" size="sm">Modifier</Button>
        <Button variant="danger" size="sm" className="menu-wrote-delete">Supprimer</Button>
      </Card.Body>
    </Card>
    <Card>
      <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/51RkD7cTmmL._SX210_.jpg" />
      <Card.Body className="menu-wrote">
        <Button variant="warning" size="sm">Modifier</Button>
        <Button variant="danger" size="sm" className="menu-wrote-delete">Supprimer</Button>
      </Card.Body>
    </Card>
  </CardDeck>
);

// == Export
export default Wrote;
