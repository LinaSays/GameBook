// == Import : npm
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// == Import : local


// == Composant
const Copyright = () => (
  <Container fluid="true" className="footer-copyright">
    <Container>
      <Row className="footer-copyright--group">
        <nav className="footer-copyright--nav">
          <a className="footer-copyright--link" href="">Mentions légales</a>
          <a className="footer-copyright--link" href="">Politique de confidentialité</a>
          <AnchorLink href="#app" className="footer-copyright--link">Haut de page</AnchorLink>
        </nav>
        <p className="footer-copyright--text">&copy; 2019 LeNomDuSite - designed by <Link to="/team">Team Cypok</Link></p>
      </Row>
    </Container>
  </Container>
);

// == Export
export default Copyright;
