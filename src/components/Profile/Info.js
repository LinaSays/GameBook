// == Import : npm
import React from 'react';
import { Jumbotron, Container, Image, Badge, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import : local

// == Composant
const Info = ({ name, avatar, role }) => (
  <Jumbotron className="jumbotron-info">
    <Container className="info">
      <Image src={avatar} roundedCircle className="info-image" />
      <div className="info-text">
        <h2>Bonjour {name}</h2>
        <Badge variant="info">{role}</Badge>
        {role === 'author' && <Button variant="warning" className="menu-link-btn"><Link to="/createstory" className="menu-link">Ecrire une histoire</Link></Button>}
      </div>
    </Container>
  </Jumbotron>
);

Info.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  role: PropTypes.string,
};

Info.defaultProps = {
  role: '',
}

// == Export
export default Info;
