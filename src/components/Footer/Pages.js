// == Import : npm
import React from 'react';
import { Col } from 'react-bootstrap';

// == Import : local


// == Composant
const Pages = () => (
  <Col>
    <h5 className="footer-titlelink">Pages</h5>
    <ul>
      <li><a className="footer-link" href="http://">Accueil</a></li>
      <li><a className="footer-link" href="http://">Le concept</a></li>
      <li><a className="footer-link" href="http://">Contact</a></li>
    </ul>
    {/* <ul>
      <li><a className="footer-link" href="http://">Mon compte</a></li>
      <li><a className="footer-link" href="http://">A propos</a></li>
      <li><a className="footer-link" href="http://">FAQ</a></li>
      <li><a className="footer-link" href="http://">Contact</a></li>
    </ul> */}
  </Col>
);

// == Export
export default Pages;
