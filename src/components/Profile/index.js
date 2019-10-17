// == Import : npm
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

// == Import : local
import Info from './Info';
import Menu from './Menu';
import Change from './Change';
import Wrote from './Wrote';
import Read from './Read';
import Pins from './Pins';
import Mobile from './Mobile';
import './profile.scss';

// == Composant
const Profile = () => {
  const location = useLocation();
  switch (location.pathname) {
    case '/profile/modify': {
      return (
        <Container>
          <Row>
            <Col><Info /></Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <Menu />
            </Col>
            <Col>
              <Change />
            </Col>
          </Row>
        </Container>
      ); }
    case '/profile/created': {
      return (
        <Container>
          <Row>
            <Col><Info /></Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <Menu />
            </Col>
            <Col>
              <Wrote />
            </Col>
          </Row>
        </Container>
      ); }
    case '/profile/read': {
      return (
        <Container>
          <Row>
            <Col><Info /></Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <Menu />
            </Col>
            <Col>
              <Read />
            </Col>
          </Row>
        </Container>
      ); }
    case '/profile/pins': {
      return (
        <Container>
          <Row>
            <Col><Info /></Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <Menu />
            </Col>
            <Col>
              <Pins />
            </Col>
          </Row>
        </Container>
      ); }
    default:
      return (
        <Container>
          <Row>
            <Col><Info /></Col>
          </Row>
          <Row className="nav-desktop">
            <Col xs={6} md={4}>
              <Menu />
            </Col>
            <Col>
              Bienvenue
            </Col>
          </Row>
          <Row className="nav-mobile">
            <Col><Mobile /></Col>
          </Row>
        </Container>
      );
  }
};


// == Export
export default Profile;
