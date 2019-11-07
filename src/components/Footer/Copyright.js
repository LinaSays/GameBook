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
          <Link className="footer-copyright--link" to="/mentions">Mentions légales</Link>
          <Link className="footer-copyright--link" to="/terms">Politique de confidentialité</Link>
          <AnchorLink href="#app" className="footer-copyright--link">Haut de page</AnchorLink>
        </nav>
        <p className="footer-copyright--text">&copy; 2019 GAMEBook- designed by <Link to="/team" className="footer-copyright--cypok">Team Cypok</Link></p>
      </Row>
    </Container>
  </Container>
);

// == Export
export default Copyright;
