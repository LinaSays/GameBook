// == Import : npm
import React from 'react';
import { Container, Row } from 'react-bootstrap';

// == Import : local
import './footer.scss';
import Presentation from './Presentation';
import FooterNavList from './FooterNavList';
import NewsLetter from './NewsLetter';
import Copyright from './Copyright';


// == Composant
const Footer = () => (
  <footer className="footer">
    <Container className="footer-content">
      <Row>
        <Presentation />
        <FooterNavList />
        <FooterNavList />
        <NewsLetter />
      </Row>
    </Container>
    <Copyright />
  </footer>

);

// == Export
export default Footer;
