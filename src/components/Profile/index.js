// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

// == Import : local
import Info from './Info';
import Menu from './Menu';
import './profile.scss';

// == Composant
const Profile = () => (
  <Container>
    <Row>
      <Col><Info /></Col>
    </Row>
    <Row>
      <Col xs={6} md={4}>
        <Menu />
      </Col>
      <Col>2 of 3</Col>
    </Row>
  </Container>
);


// == Export
export default Profile;
