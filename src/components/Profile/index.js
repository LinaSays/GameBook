// == Import : npm
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

// == Import : local
import Pins from 'src/containers/Profile/Pins';
import Info from './Info';
import Menu from './Menu';
import Change from './Change';
import Wrote from './Wrote';
import Read from './Read';
import Mobile from './Mobile';
import './profile.scss';

// == Composant
class Profile extends React.Component {
  componentDidMount() {
    const { getProfile, getPins } = this.props;
    getProfile();
    getPins();
  }

  render() {
    const { profile, location, pins } = this.props;
    // const { path, url } = this.props.match;
    switch (location.pathname) {
      case '/profile/modify': {
        return (
          <Container>
            <Row>
              <Col>
                {profile.map((item) => (
                  <Info key={item.id} {...item} />
                ))}
              </Col>
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
              <Col>
                {profile.map((item) => (
                  <Info key={item.id} {...item} />
                ))}
              </Col>
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
              <Col>
                {profile.map((item) => (
                  <Info key={item.id} {...item} />
                ))}
              </Col>
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
              <Col>
                {profile.map((item) => (
                  <Info key={item.id} {...item} />
                ))}
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
                <Menu />
              </Col>
              <Col>
                {pins.map((item) => (
                  <Pins key={item.badge} {...item} />
                ))}
              </Col>
            </Row>
          </Container>
        ); }
      default:
        return (
          <Container>
            <Row>
              <Col>
                {profile.map((item) => (
                  <Info key={item.id} {...item} />
                ))}
              </Col>
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
  }
}

Profile.propTypes = {
  getProfile: PropTypes.func.isRequired,
  profile: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};

// == Export
export default withRouter(Profile);
