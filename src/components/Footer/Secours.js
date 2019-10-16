// == Import : npm
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';

// == Import : local
import './footer.scss';


// == Composant
const Footer = () => (
  <footer className="footer">
    <Container className="footer-content">
      <Row>
        <Col sm={12} md={6} lg={3}>
          <h4 className="logo">Logo</h4>
          <p className="footer-text">xPider is multi concept landing page theme for startups. Build your next landing page with proper variations. Get started now.</p>
          <div className="icon-group">
            <Icon name="facebook f" />
            <Icon name="twitter" />
            <Icon name="instagram" />
          </div> 
        </Col>
        <Col>
          <h5 className="footer-titlelink">Pages</h5>
          <ul>
            <li><a className="footer-link" href="http://">Mon compte</a></li>
            <li><a className="footer-link" href="http://">A propos</a></li>
            <li><a className="footer-link" href="http://">FAQ</a></li>
            <li><a className="footer-link" href="http://">Contact</a></li>
          </ul>
        </Col>
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
        <Col sm={12} md={4} lg={3}>
          <h5 className="footer-titlelink">Abonnez-vous</h5>
          <p className="footer-text">Pour être tenus informé des nouelles histoires, fonctionnalités et autres actualités, abonnez-vous à la newsletter</p>
          <form className="form">
            <input type="email" className="form-input"/><button type="submit" className="form-button">S'abonner</button>
          </form>
        </Col>
      </Row>
    </Container>
    <Container fluid="true" className="footer-copyright">
      <Container>
        <Row className="footer-copyright--group">
          <nav className="footer-copyright--nav">
            <a className="footer-copyright--link" href="">Mentions légales</a>
            <a className="footer-copyright--link" href="">Politique de confidentialité</a>
            <a className="footer-copyright--link" href="">Haut de page</a>
          </nav>
          <p className="footer-copyright--text">&copy; 2019 LeNomDuSite - designed by Team Cypok</p>
        </Row>
      </Container>
    </Container>
  </footer>

);

// == Export
export default Footer;
