// == Import : npm
import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// == Import : local


// == Composant
const Pages = () => (
  <Col>
    <h5 className="footer-titlelink">Pages</h5>
    <ul>
      <Link to="/" className="footer-link">Accueil</Link>
      <Link to="/concept" className="footer-link">Le concept</Link>
      <Link to="/contact" className="footer-link">Contact</Link>
    </ul>
    {/* <ul>
      <Link to="/moncompte" className="footer-link">Accueil</Link>
      <Link to="/concept" className="footer-link">Le concept</Link>
      <Link to="/faq" className="footer-link">Contact</Link>
      <Link to="/contact" className="footer-link">Contact</Link>
    </ul> */}
  </Col>
);

// == Export
export default Pages;
