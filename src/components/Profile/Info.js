// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Image, Badge } from 'react-bootstrap';

// == Import : local
import user from 'src/data/user';

// == Composant
const Info = () => (
  <Jumbotron>
    <Container className="info">
      <Image src={user.avatar} roundedCircle className="info-image" />
      <div className="info-text">
        <h2>Bonjour {user.name}</h2>
        <Badge variant="info">Auteur</Badge>
        <div>Heroïc Fantasy</div>
      </div>
    </Container>
  </Jumbotron>
);


// == Export
export default Info;
