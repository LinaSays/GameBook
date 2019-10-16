// == Import : npm
import React from 'react';
import { Col } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


// == Import : local


// == Composant
const Presentation = ({ isConnected }) => (
  <Col sm={12} md={6} lg={3}>
    <h4 className="logo">Logo</h4>
    <p className="footer-text">xPider is multi concept landing page theme for startups. Build your next landing page with proper variations.<br />Get started now.</p>

    { isConnected && (
      <div className="icon-group">
        <Link to="/facebook"><Icon name="facebook f" /></Link>
        <Link to="/instagram"><Icon name="twitter" /></Link>
        <Link to="/twitter"><Icon name="instagram" /></Link>
        <Link to="/snapchat"><Icon name="snapchat" /></Link>
      </div>
    )}
  </Col>
);

// == Validation props
Presentation.propTypes = {
  isConnected: PropTypes.bool.isRequired,
};

// == Export
export default Presentation;
