// == Import : npm
import React from 'react';
import { Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';

// == Import : local

// == Composant
const Pins = ({ image, badge }) => (
  <div className="pins-content">
    <div className="pins-content-info">
      <img src={image} alt="badge1" className="pins-content-image" />
      <Badge className="pins-content-badge" variant="primary">{badge}</Badge><br />
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
