// == Import : npm
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

// == Import : local
import './footer.scss';
import Presentation from './Presentation';
import FooterNavList from './FooterNavList';
import Pages from './Pages';
import NewsLetter from './NewsLetter';
import Copyright from './Copyright';


// == Composant
const Footer = ({ isConnected, getCategory, category }) => (
  <footer className="footer">
    <Container className="footer-content">
      <Row>
        <Presentation isConnected={isConnected} />
        <Pages isConnected={isConnected} />
        <FooterNavList
          isConnected={isConnected}
          getCategory={getCategory}
          category={category}
        />
        <NewsLetter />
      </Row>
    </Container>
    <Copyright />
  </footer>

);

// == Validation props
Footer.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  getCategory: PropTypes.func.isRequired,
  category: PropTypes.array.isRequired,
};

// == Export
export default Footer;
