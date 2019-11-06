// == Import : npm
import React from 'react';
import { Col } from 'react-bootstrap';

// == Import : local


// == Composant
const NewsLetter = () => (
  <Col sm={12} md={4} lg={3}>
    <h5 className="footer-titlelink">Abonnez-vous</h5>
    <p className="footer-text">Pour être tenus informé des nouvelles histoires, fonctionnalités et autres actualités, abonnez-vous à la newsletter.</p>
    <form className="footer-form">
      <input type="email" className="footer-form-input" /><button type="submit" className="footer-form-button">S'abonner</button>
    </form>
  </Col>
);

// == Export
export default NewsLetter;
