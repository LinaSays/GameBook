// == Import : npm
import React from 'react';
import { Badge } from 'react-bootstrap';

// == Import : local

// == Composant
const Pins = () => (
  <div className="pins">
    <div className="pins-info">
      <img src="https://image.flaticon.com/icons/svg/138/138716.svg" alt="badge1" />
      <Badge variant="primary">1 livre écrit</Badge><br />
    </div>
    <div className="pins-info">
      <img src="https://image.flaticon.com/icons/svg/138/138714.svg" alt="badge1" />
      <Badge variant="danger">5 livres lus</Badge><br />
    </div>
  </div>
);

// == Export
export default Pins;
