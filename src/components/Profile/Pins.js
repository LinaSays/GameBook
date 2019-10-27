// == Import : npm
import React from 'react';
import { Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';

// == Import : local

// == Composant
const Pins = ({ badge, image }) => (
  <div className="pins">
    <div className="pins-info">
      <img src={image} alt="badge1" />
      <Badge variant="primary">{badge}</Badge><br />
    </div>
  </div>
);

Pins.propTypes = {
  badge: PropTypes.string,
  image: PropTypes.string,
};

Pins.defaultProps = {
  badge: '',
  image: '',
};

// == Export
export default Pins;
