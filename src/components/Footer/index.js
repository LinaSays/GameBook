// == Import : npm
import React from 'react';
import { Container, Row } from 'react-bootstrap';

// == Import : local
import './footer.scss';
import Presentation from './Presentation';
import FooterNavList from './FooterNavList';
import Pages from './Pages';
import NewsLetter from './NewsLetter';
import Copyright from './Copyright';


// == Composant
const Footer = ({ isConnected }) => (
  <footer className="footer">
    <Container className="footer-content">
      <Row>
        <Presentation isConnected={isConnected} />
        <Pages isConnected={isConnected} />
        <FooterNavList isConnected={isConnected} />
        <NewsLetter />
      </Row>
    </Container>
    <Copyright />
  </footer>

);

// == Export
export default Footer;
