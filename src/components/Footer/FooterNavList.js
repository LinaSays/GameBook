// == Import : npm
import React from 'react';
import { Col } from 'react-bootstrap';

// == Import : local


// == Composant
const FooterNavLIst = () => (
  <Col>
    <h5 className="footer-titlelink">Catégories</h5>
    <ul>
      <li><a className="footer-link" href="http://">Polar</a></li>
      <li><a className="footer-link" href="http://">Enfants</a></li>
      <li><a className="footer-link" href="http://">Heroïc Fantasy</a></li>
      <li><a className="footer-link" href="http://">Science Fiction</a></li>
      <li><a className="footer-link" href="http://">Horreur</a></li>
    </ul>
  </Col>
);

// == Export
export default FooterNavLIst;
