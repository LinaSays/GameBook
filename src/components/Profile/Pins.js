// == Import : npm
import React from 'react';
import { Badge } from 'react-bootstrap';

// == Import : local

// == Composant
const Pins = () => (
  <div>
    <Badge variant="primary">1 livre écrit</Badge><br />
    <Badge variant="success">10 livres écrit</Badge><br />
    <Badge variant="danger">5 livres lus</Badge><br />
  </div>
);

// == Export
export default Pins;
