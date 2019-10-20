// == Import : npm
import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';

// == Import : local

// == Composant
const Read = () => (
  <CardDeck>
    <Card>
      <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/51RkD7cTmmL._SX210_.jpg" />
      <Card.Footer>
        <small className="text-muted">Lu le 16/10/2019</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/51RkD7cTmmL._SX210_.jpg" />
      <Card.Footer>
        <small className="text-muted">Lu le 16/10/2019</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/51RkD7cTmmL._SX210_.jpg" />
      <Card.Footer>
        <small className="text-muted">Lu le 16/10/2019</small>
      </Card.Footer>
    </Card>
  </CardDeck>
);

// == Export
export default Read;
