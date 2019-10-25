// == Import : npm
import React from 'react';
import { Jumbotron, Container, Image, Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';

// == Import : local

// == Composant
const Info = ({ name, avatar, role }) => (
  <Jumbotron className="jumbotron-info">
    <Container className="info">
      <Image src={avatar} roundedCircle className="info-image" />
      <div className="info-text">
        <h2>Bonjour {name}</h2>
        <Badge variant="info">{role}</Badge>
      </div>
    </Container>
  </Jumbotron>
);

Info.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

// == Export
export default Info;
