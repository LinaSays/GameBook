// == Import : npm
import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FaFacebookF, FaTwitter, FaInstagram, FaSnapchatGhost,
} from 'react-icons/fa';
import PropTypes from 'prop-types';


// == Import : local


// == Composant
const Presentation = ({ isConnected }) => (
  <Col sm={12} md={6} lg={3}>
    <h4 className="footer-logo">GameBook</h4>
    <p className="footer-text">Bienvenue chez Gamebook. Fini la lecture avec une seule fin possible. Place à l’interaction ! Faites les bons choix pour faire avancer l'histoire ou votre personnage, en bref devenez le héros.</p>

    { isConnected && (
      <div className="icon-group">
        <Link to="/facebook"><FaFacebookF color="black" /> </Link>
        <Link to="/instagram"><FaInstagram color="black" /> </Link>
        <Link to="/twitter"><FaTwitter color="black" /> </Link>
        <Link to="/snapchat"><FaSnapchatGhost color="black" /> </Link>
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
