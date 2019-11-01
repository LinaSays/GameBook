// == Import : npm
import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local


// == Composant
const Pages = ({ isConnected }) => (
  <Col>
    <h5 className="footer-titlelink">Pages</h5>
    {
        isConnected ? (
          <ul>
            <Link to="/profile" className="footer-link">Accueil</Link>
            <Link to="/concept" className="footer-link">Le concept</Link>
            <Link to="/faq" className="footer-link">FAQ</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </ul>

        ) : (
          <ul>
            <Link to="/" className="footer-link">Accueil</Link>
            <Link to="/team" className="footer-link">Team</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </ul>

        )
      }
  </Col>
);

// == Validation props
Pages.propTypes = {
  isConnected: PropTypes.bool.isRequired,
};

// == Export
export default Pages;
