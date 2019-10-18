// == Import : npm
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// == Import : local


// == Composant
const Copyright = () => (
  <Container fluid="true" className="footer-copyright">
    <Container>
      <Row className="footer-copyright--group">
        <nav className="footer-copyright--nav">
          <a className="footer-copyright--link" href="">Mentions légales</a>
          <a className="footer-copyright--link" href="">Politique de confidentialité</a>
          <a className="footer-copyright--link" href="">Haut de page</a>
        </nav>
        <p className="footer-copyright--text">&copy; 2019 LeNomDuSite - designed by <Link to="/team">Team Cypok</Link></p>
      </Row>
    </Container>
  </Container>
);

// == Export
export default Copyright;
